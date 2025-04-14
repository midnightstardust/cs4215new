## random implementation details
 - all statement must end pushing exactly 1 value on the stack
 - all blocks must end pushing exactly 1 value on the block
 - function declarations must have the type for each param ( fun f(a : u32) )
 - function calls first pushes the arguments in order then the function object (ex. f(a, b, c) : push a; push b; push c; push f)
 - (a = b) is compiled as [b; a; ASSIGN];
 - LOADHEAP pops the heap address off the operand stack, then loads the value at the heap address to the operand stack
 - ASSIGNHEAP pops the heap address off the operand stack, then the value, and assigns the value to the heap address
 - MALLOC pops the size off the operand stack, allocate heap memory, then pushes the heap address onto the operand stack
 - FREE pops address off operand stack; and frees the memory in heap