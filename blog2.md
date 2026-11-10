# Understanding Access Modifiers in TypeScript

## Introduction

In Object-Oriented Programming (OOP), access modifiers control how class properties and methods can be accessed. They help to protect data from unauthorized access.

## Types of Access Modifiers

TypeScript provides three main access modifiers: `public`, `private`, and `protected`.

- Public: Properties and methods can be accessed from anywhere.It is a default access modifier.
- Private: Properties and methods can only be accessed inside the class where they are declared.
- Protected: Properties and methods can be accessed inside the class and its subclasses.

Think about a kitchen. Everyone may see the menu, but only the chef should access a private recipe, while the head chef may share certain cooking instructions with assistant chefs. Access modifiers work in a similar way by controlling access.

## Example

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

## Conclusion

Access modifiers support encapsulation and help developers protect important data. Understanding them is essential for writing secure, organized, and maintainable TypeScript applications.