## random implementation details
 - all statement must end pushing exactly 1 value on the stack
 - all blocks must end pushing exactly 1 value on the block
 - variable declaration and initialisation is not supported ('let a = b;' is not supported, only 'let a;')
 - function declarations must have the type for each param ( fun f(a : u32) )
 - function calls first pushes the arguments in order then the function object (ex. f(a, b, c) : push a; push b; push c; push f)