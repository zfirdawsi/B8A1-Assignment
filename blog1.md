# Understanding Type Narrowing in TypeScript [TOPIC 3]

## Introduction

TypeScript is a strongly typed programming language that helps developers write safer and more reliable code. Type narrowing is an important feature that allows TypeScript to identify the specific type of a variable within a condition.

## What Is Type Narrowing?

Sometimes, a variable can have more than one possible type. This is called a union type. Type narrowing helps us determine which type we are working with before performing an operation.

For example, when cooking, we first identify whether an ingredient is an egg, milk, or flour before using it. Similarly, TypeScript checks a variable's type before allowing specific operations.

We can use the `typeof` operator to narrow down primitive types.

## Example

```ts
function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 10;
    }
}
```

In this example, TypeScript checks whether the input is a string or a number. If it is a string, the function converts it to uppercase. Otherwise, it multiplies the number by ten.

TypeScript also supports other narrowing techniques, such as `instanceof` and the `in` operator.

## Conclusion

Type narrowing makes code more predictable and reduces type-related errors. It helps developers handle different data types safely and write cleaner TypeScript programs.