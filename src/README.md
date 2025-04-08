## random implementation details
 - all statement must end pushing exactly 1 value on the stack
 - all blocks must end pushing exactly 1 value on the block
 - function declarations must have the type for each param ( fun f(a : u32) )
 - function calls first pushes the arguments in order then the function object (ex. f(a, b, c) : push a; push b; push c; push f)
 - (a = b) is compiled as [b; a; ASSIGN];