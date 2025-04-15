# TODO
- [x] handle function declaration
- [x] handle function params
- [x] handle function calls correctly
- [ ] handle function calls in assignments correctly
- [ ] write tests
- [ ] different behavior based on copy trait
- [ ] full borrow checker

# Ownership Tests

## Pass
Basic case
```rust
fn main() {
    let x : i32 = 1;
    return;
}
```

Declare then assign
```rust
fn main() {
    let x : i32;
    x = 1;
    return;
}
```

Shadow variable
```rust
fn main() {
    let x : i32 = 1;
    {
        let x : i32 = 2;
    }
    return;
}
```

Access correct shadow variable
```rust
fn main() {
    let x : i32 = 1;
    {
        let x : i32 = 2;
        let y : i32 = x;
    }
    let y : i32 = x;
    return;
}
```

Function values
```rust
fn foo() -> i32 { return 1; }
fn main() {
    let x : i32 = foo();
    return;
}
```

Function call
```rust
fn print(x: i32) {}
fn main() {
    let x : i32 = 1;
    print(x);
    return;
}
```

Assign from expression
```rust
fn main() {
    let x : i32 = 1;
    let y : i32 = x + 1;
    return;
}
```

Mutable variable
```rust
fn main() {
    let mut x : i32 = 1;
    x = 2;
    x = 3;
    return;
}
```

## Fail
Multiple assign to immutable var
```rust
fn main() {
    let x : i32;
    x = 1;
    x = 1;
    return;
}
```

Accessing moved variable
```rust
fn main() {
    let x : i32 = 1;
    let y : i32 = x;
    x;
    return;
}
```

Accessing moved variable
```rust
fn print(x: i32) {}
fn main() {
    let x : i32 = 1;
    print(x);
    x;
    return;
}
```

Accessing moved variable in expression
```rust
fn main() {
    let a : i32 = 1;
    let c : i32 = a;
    let b : i32 = a + 1;
}
```

Accessing moved variable in expression
```rust
fn main() {
    let a : i32 = 1;
    let c : i32 = a;
    let b : i32 = 1;
    b = a + 1;
}
```

Function call accessing moved variable
```rust
fn print(x: i32) {}
fn main() {
    let x : i32 = 1;
    let y : i32 = x;
    print(x);
    return;
}
```

Assigning from un-declared variable
```rust
fn main() {
    let x : i32 = y;
    return;
}
```

Assigning from un-initialized variable
```rust
fn main() {
    let y : i32;
    let x : i32 = y;
    return;
}
```

## Not Supported

Block expression
```rust
fn main() {
    {
        let a : i32 = 1;
    };
    return;
}
```

Function Usage before declaration
```rust
fn main() {
    foo();
    return;
}
fn foo() -> i32 {
    return 1;
}
```
