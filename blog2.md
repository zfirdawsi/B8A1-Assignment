# Understanding Access Modifiers in TypeScript topic 5

## Introduction

Object-Oriented Programming (OOP) is an important concept in TypeScript. Access modifiers control how class properties and methods can be accessed. They help protect data and organize code.

## Types of Access Modifiers

TypeScript provides three main access modifiers: `public`, `private`, and `protected`.

- **Public:** Properties and methods can be accessed from anywhere.
- **Private:** Properties and methods can only be accessed inside the class where they are declared.
- **Protected:** Properties and methods can be accessed inside the class and its subclasses.

Think about a kitchen. Everyone may see the menu, but only the chef should access a private recipe, while the head chef may share certain cooking instructions with assistant chefs. Access modifiers work in a similar way by controlling access.

## Example

```ts
class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getDetails(): string {
        return `${this.name} works in ${this.department}.`;
    }
}

class Manager extends Employee {
    getDepartment(): string {
        return this.department;
    }
}
```

In this example, `name` is public, so it can be accessed from outside the class. `salary` is private, so it cannot be accessed directly outside the Employee class. `department` is protected, so the Manager class can access it through inheritance.

## Conclusion

Access modifiers support encapsulation and help developers protect important data. Understanding them is essential for writing secure, organized, and maintainable TypeScript applications.