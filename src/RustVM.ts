const operandStackSize = 1024;

export enum InstructionType {
  PUSH = "PUSH",
  ADD = "ADD",
  SUB = "SUB",
  MUL = "MUL",
  DIV = "DIV",
  POP = "POP",
  LOAD = "LOAD",
  ASSIGN = "ASSIGN",
  LT = "LT",
  GT = "GT",
  EQ = "EQ",
  NE = "NE",
  LE = "LE",
  GE = "GE",
  NOT = "NOT",
  JMP = "JMP",
  JZ = "JZ",
  RETURN = "RETURN",
  CALL = "CALL",
  DONE = "DONE",
  ALLOCATE = "ALLOCATE",
}

export interface Instruction {
  type: InstructionType;
  operand?: number | string;
}

export const UNDEFINED = "undefined";

class OperandStack {
  private stack: DataView;
  private sz: number;
  private word_size = 4; // 4 bytes is a 32 bit int
  private num_words: number;

  constructor(num_words : number) {
    const data = new ArrayBuffer(num_words * this.word_size);
    this.stack = new DataView(data);
    this.sz = 0;
    this.num_words = num_words;
  }

  push(val: any) : void {
    if (this.sz === this.num_words) {
      throw new VMError("OperandStack push: no space");
    }
    this.stack.setInt32((this.sz++) * this.word_size, val);
  }

  pop(): any {
    if (this.sz === 0) {
      throw new VMError("OperandStack pop: no elements in stack")
    }
    return this.stack.getInt32((--this.sz) * this.word_size);
  }

  print(): number[] {
    return Array.from({length: this.sz}, (_, i) => this.stack.getInt32(i * this.word_size));
  }

}

// TODO: make realistic
class RuntimeStack {
  private runtimeStack: Map<number, any>[];
  private prevPC: number[];
  private limit: number[];
  private sz: number;

  private NO_SPACE(f: string) : string {
    return `RuntimeStack: ${f} no frames`;
  }

  constructor() {
    this.runtimeStack = [];
    this.prevPC = [];
    this.limit = [];
    this.sz = 0;
  }

  set(idx: number, val: any): void {
    if (this.sz === 0) {
      throw new VMError(this.NO_SPACE("set"));
    }
    if (idx >= this.limit.at(-1)) {
      throw new VMError("RuntimeStack: set exceed declared space");
    }
    this.runtimeStack.at(-1).set(idx, val);
  }

  get(idx: number): any {
    if (this.sz === 0) {
      throw new VMError(this.NO_SPACE("set"));
    }
    if (idx >= this.limit.at(-1)) {
      throw new VMError("RuntimeStack: get exceed declared space");
    }
    return this.runtimeStack.at(-1).get(idx);
  }

  call(prevPC: number, sz: number) : void {
    this.prevPC.push(prevPC);
    this.limit.push(sz);
    this.runtimeStack.push(new Map<number, any>());
    this.sz++;
  }

  ret() : number {
    if (this.sz === 0) {
      throw new VMError(this.NO_SPACE("set"));
    }
    this.limit.pop();
    this.runtimeStack.pop();
    return this.prevPC.pop();
  }

  print(): any {
    return this.runtimeStack;
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
  ])
  private debug: boolean;
  private DEBUG(...v: any): void {
    if (this.debug) {
      console.log(...v);
    }
  }

  public run(instructions: Instruction[], debug: boolean) : any {
    this.debug = debug;
    const runtimeStack = new RuntimeStack();
    const operandStack = new OperandStack(4);
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
        case InstructionType.GE: {
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
          operandStack.push(!a);
          break;
        }
        case InstructionType.JMP: {
          PC = (operand as number);
          continue;
        }
        case InstructionType.JZ: {
          const a = operandStack.pop();
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
      }
      ++PC;
    } 
  }
}
