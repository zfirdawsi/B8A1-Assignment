# Understanding Type Narrowing in TypeScript

## Introduction

TypeScript helps developers  to write safe and more reliable code. Type narrowing feature  allows TypeScript to identify the specific type of a variable using conditional statement.

## What Is Type Narrowing?

If a variable can have more than one possible type, it is called a union type. Type narrowing helps us  to determine which type we are working with before performing an operation.

For example, when cooking, we first identify whether an ingredient is an egg, milk, or flour before using it. Similarly, TypeScript checks a variable's type before allowing specific operations.

We can use the `typeof` operator to narrow down primitive types.

## Example

function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 10;
    }
}


## Conclusion

Type narrowing reduces type-related errors. It helps developers to work with different data types safely and write cleaner TypeScript programs.