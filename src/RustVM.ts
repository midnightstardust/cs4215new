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
