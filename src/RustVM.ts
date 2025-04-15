import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";

const operandStackSize = 1024;
const runtimeStackSize = 2048;
const WORD_SIZE = 4; // 4 bytes is a 32 bit int
const HEAP_SIZE = 1024; // Size in words

export enum InstructionType {
  PUSH       = "PUSH",
  ADD        = "ADD",
  SUB        = "SUB",
  MUL        = "MUL",
  DIV        = "DIV",
  POP        = "POP",
  LOAD       = "LOAD",
  ASSIGN     = "ASSIGN",
  LT         = "LT",
  GT         = "GT",
  EQ         = "EQ",
  NE         = "NE",
  LE         = "LE",
  GE         = "GE",
  NOT        = "NOT",
  AND        = "AND",
  OR         = "OR",
  JMP        = "JMP",
  JZ         = "JZ",
  RETURN     = "RETURN",
  CALL       = "CALL",
  DONE       = "DONE",
  ALLOCATE   = "ALLOCATE",
  LOADHEAP   = "LOADHEAP",
  ASSIGNHEAP = "ASSIGNHEAP",
  MALLOC     = "MALLOC",
  FREE       = "FREE",
  DISPLAY    = "DISPLAY",
}

export interface Instruction {
  type: InstructionType;
  operand?: number | string;
}

export const UNDEFINED = 0;

class OperandStack {
  private stack: DataView;
  private sz: number;
  private num_words: number;

  private readonly word_size = 4; // 4 bytes is a 32 bit int

  private NO_SPACE(f: string) : string {
    return `OperandStack ${f}: no space left in operand stack`;
  }

  private NO_ELEMENTS_IN_STACK(f: string) : string {
    return `OperandStack ${f}: no elements in stack`;
  }

  constructor(num_words : number) {
    const data = new ArrayBuffer(num_words * this.word_size);
    this.stack = new DataView(data);
    this.sz = 0;
    this.num_words = num_words;
  }

  push(val: any) : void {
    if (this.sz === this.num_words) {
      throw new VMError(this.NO_SPACE("push"));
    }
    this.stack.setInt32((this.sz++) * this.word_size, val);
  }

  pop(): any {
    if (this.sz === 0) {
      throw new VMError(this.NO_ELEMENTS_IN_STACK("pop"));
    }
    return this.stack.getInt32((--this.sz) * this.word_size);
  }

  print(): number[] {
    return Array.from({length: this.sz}, (_, i) => this.stack.getInt32(i * this.word_size));
  }

}

class RuntimeStack {
  // a stack consists of prevPC, prevSizeOfFrame, followed by the vars
  private num_words: number;
  private runtimeStack: DataView;

  private baseAddress: number;
  private sizeOfFrame: number;

  private numOfFrames: number;

  private readonly frameOffset = 2;
  private readonly word_size = 4; // 4 bytes is a 32 bit int
  private readonly prevPCOffset = 0;
  private readonly prevSizeOfFrameOffset = 1;

  private IDX_OUT_OF_FRAME(f: string): string {
    return `RuntimeStack ${f}: index out of frame`;
  }

  private NO_SPACE(f: string): string {
    return `RuntimeStack ${f}: no space in runtime stack`;
  }

  private NO_FRAMES(f: string): string {
    return `RuntimeStack ${f}: no frames`;
  }

  constructor(num_words: number) {
    this.num_words = num_words;

    const data = new ArrayBuffer(num_words * this.word_size);
    this.runtimeStack = new DataView(data);

    this.baseAddress = 0;
    this.sizeOfFrame = 0;
    this.numOfFrames = 0;
  }

  set(_idx: number, val: number): void {
    const idx = _idx + this.frameOffset;
    if (idx >= this.sizeOfFrame) {
      throw new VMError(this.IDX_OUT_OF_FRAME("set"));
    }

    this.runtimeStack.setInt32((this.baseAddress + idx) * this.word_size, val);
  }

  get(_idx: number): number {
    const idx = _idx + this.frameOffset;
    if (idx >= this.sizeOfFrame) {
      throw new VMError(this.IDX_OUT_OF_FRAME("get"));
    }

    return this.runtimeStack.getInt32((this.baseAddress + idx) * this.word_size);
  }

  call(prevPC: number, sz: number) : void {
    const totalSz = sz + this.frameOffset + this.baseAddress + this.sizeOfFrame;
    if (totalSz >= this.num_words) {
      throw new VMError(this.NO_SPACE("call"));
    }

    this.runtimeStack.setUint32((this.baseAddress + this.sizeOfFrame + this.prevPCOffset) * this.word_size, prevPC);
    this.runtimeStack.setUint32((this.baseAddress + this.sizeOfFrame + this.prevSizeOfFrameOffset) * this.word_size, this.sizeOfFrame);

    this.baseAddress = this.baseAddress + this.sizeOfFrame;
    this.sizeOfFrame = sz + this.frameOffset;
    ++this.numOfFrames;
  }

  ret() : number {
    if (this.numOfFrames-- === 0) {
      throw new VMError(this.NO_FRAMES("ret"));
    }
    const prevPC = this.runtimeStack.getUint32((this.baseAddress + this.prevPCOffset) * this.word_size);
    const prevSizeOfFrame = this.runtimeStack.getUint32((this.baseAddress + this.prevSizeOfFrameOffset) * this.word_size);

    this.baseAddress = this.baseAddress - prevSizeOfFrame;
    this.sizeOfFrame = prevSizeOfFrame;

    return prevPC;
  }

  print() : number[] {
    return Array.from({length: this.baseAddress + this.sizeOfFrame}, (_, i) => this.runtimeStack.getInt32(i * this.word_size));
  }
}

class Heap {
  private buffer: ArrayBuffer;
  private dataView: DataView;
  private freeBlocks: { start: number; size: number }[];

  constructor(sizeInWords: number) {
    this.buffer = new ArrayBuffer(sizeInWords * WORD_SIZE);
    this.dataView = new DataView(this.buffer);
    this.freeBlocks = [{ start: 0, size: sizeInWords }];
  }

  load(address: number): number {
    const byteOffset = address * WORD_SIZE;
    return this.dataView.getInt32(byteOffset, true);
  }

  assign(address: number, value: number): void {
    const byteOffset = address * WORD_SIZE;
    this.dataView.setInt32(byteOffset, value, true);
  }

  malloc(szWords: number): number {
    const requiredSize = szWords + 1; // Including header
    for (let i = 0; i < this.freeBlocks.length; i++) {
      const block = this.freeBlocks[i];
      if (block.size >= requiredSize) {
        // Allocate from this block
        this.freeBlocks.splice(i, 1);
        const allocatedStart = block.start;
        const remainingSize = block.size - requiredSize;
        if (remainingSize > 0) {
          this.freeBlocks.push({ start: allocatedStart + requiredSize, size: remainingSize });
        }
        // Write header (size szWords)
        this.assign(allocatedStart, szWords);
        // Return the address after the header
        return allocatedStart + 1;
      }
    }
    return -1; // Indicate failure
  }

  free(address: number): void {
    const headerAddress = address - 1;
    const szWords = this.load(headerAddress);
    const blockSize = szWords + 1;
    const newBlock = { start: headerAddress, size: blockSize };
    this.freeBlocks.push(newBlock);
    // Merge adjacent blocks
    this.freeBlocks.sort((a, b) => a.start - b.start);
    for (let i = 0; i < this.freeBlocks.length - 1; i++) {
      const current = this.freeBlocks[i];
      const next = this.freeBlocks[i + 1];
      if (current.start + current.size === next.start) {
        current.size += next.size;
        this.freeBlocks.splice(i + 1, 1);
        i--; // Re-check current with new next
      }
    }
  }
}

export class VMError extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

export class RustVM {
  private binOps = new Map<InstructionType, (arg0: any, arg1: any) => any>([
    [InstructionType.ADD, (x, y) => x +   y],
    [InstructionType.SUB, (x, y) => x -   y],
    [InstructionType.MUL, (x, y) => x *   y],
    [InstructionType.LT , (x, y) => x <   y],
    [InstructionType.GT , (x, y) => x >   y],
    [InstructionType.EQ , (x, y) => x === y],
    [InstructionType.NE , (x, y) => x !== y],
    [InstructionType.LE , (x, y) => x <=  y],
    [InstructionType.GE , (x, y) => x >=  y],
    [InstructionType.AND, (x, y) => x && y],
    [InstructionType.OR,  (x, y) => x || y],
  ])
  private debug: boolean;
  private DEBUG(...v: any): void {
    if (this.debug) {
      console.log(...v);
    }
  }

  public run(instructions: Instruction[], conductor: IRunnerPlugin, debug: boolean) : any {
    this.debug = debug;
    const runtimeStack = new RuntimeStack(runtimeStackSize);
    const operandStack = new OperandStack(operandStackSize);
    const heap = new Heap(HEAP_SIZE);
    let PC = 0, returnPC = 0;

    while(PC < instructions.length) {
      const instruct = instructions[PC];
      const operand = instruct.operand;

      this.DEBUG('PC: ', PC, 'operandStack: ', operandStack.print(), 'runtimeStack: ', runtimeStack.print());

      switch(instruct.type) {
        case InstructionType.PUSH: {
          if(operand === null || operand ===  undefined) {
            throw new VMError("PUSH: missing operand");
          }
          operandStack.push(operand);
          break;
        }
        case InstructionType.ADD:
        case InstructionType.SUB:
        case InstructionType.MUL:
        case InstructionType.LT:
        case InstructionType.GT:
        case InstructionType.EQ:
        case InstructionType.NE:
        case InstructionType.LE:
        case InstructionType.GE:
        case InstructionType.AND:
        case InstructionType.OR:{
          const b = operandStack.pop();
          const a = operandStack.pop();
          operandStack.push(this.binOps.get(instruct.type)(a, b));
          break;
        }
        case InstructionType.DIV: {
          const b = operandStack.pop();
          const a = operandStack.pop();
          if (b === 0) {
            throw new VMError("DIV: divide by zero")
          }
          operandStack.push(Math.floor(a / b));
          break;
        }
        case InstructionType.POP: {
          operandStack.pop();
          break;
        }
        case InstructionType.LOAD: {
          const a = operandStack.pop();
          operandStack.push(runtimeStack.get(a));
          break;
        }
        case InstructionType.ASSIGN: {
          const a = operandStack.pop();
          const b = operandStack.pop();
          runtimeStack.set(a as number, b);
          break;
        }
        case InstructionType.NOT: {
          const a = operandStack.pop();
          if (a !== 0 && a !== 1) {
            throw new VMError("Runtime error: condition is not a boolean value.");
          }
          operandStack.push(!a);
          break;
        }
        case InstructionType.JMP: {
          PC = (operand as number);
          continue;
        }
        case InstructionType.JZ: {
          const a = operandStack.pop();
          if (a !== 0 && a !== 1) {
            throw new VMError("Runtime error: condition is not a boolean value.");
          }
          if (!a) {
            PC = operand as number;
            continue;
          }
          break;
        }
        case InstructionType.RETURN: {
          PC = runtimeStack.ret();
          continue;
        }
        case InstructionType.CALL: {
          returnPC = PC + 1;
          PC = operand as number;
          continue;
        }
        case InstructionType.DONE: {
          return operandStack.pop();
        }
        case InstructionType.ALLOCATE: {
          runtimeStack.call(returnPC, operand as number);
          break;
        }
        case InstructionType.LOADHEAP: {
          const address = operandStack.pop();
          operandStack.push(heap.load(address));
          break;
        }
        case InstructionType.ASSIGNHEAP: {
          const address = operandStack.pop();
          const value = operandStack.pop();
          heap.assign(address, value);
          break;
        }
        case InstructionType.MALLOC: {
          const sz = operandStack.pop();
          const address = heap.malloc(sz);
          if (address === -1) {
            throw new VMError("MALLOC: out of memory");
          }
          operandStack.push(address);
          break;
        }
        case InstructionType.FREE: {
          const address = operandStack.pop();
          heap.free(address);
          break;
        }
        case InstructionType.DISPLAY: {
          const a = operandStack.pop();
          conductor.sendOutput(`DISPLAY: ${a}`)
          break;
        }
      }
      ++PC;
    }
  }
}
