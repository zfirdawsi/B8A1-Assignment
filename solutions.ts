// Problem 1: Optional and Default Parameters

function multiplyValue(value: number, multiplier?: number): number {
    return value * (multiplier ?? 2);
}


// Problem 2: Union Types and Type Narrowing

function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } 
    
    if (typeof input === "number") {
        return input * 10;
    } 
    
    if (typeof input === "boolean") {
        return input ? "Active" : "Inactive";
    }

    return input;
}


// Problem 3: Readonly Tuple

function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// Problem 4: Generic Function and Rest Parameters

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


// Problem 5: Interface and Array Filtering

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    return courses.filter(
        (course: Course): boolean =>
            course.isPublished && course.students >= minStudents
    );
}


// Problem 6: Generics with keyof Constraint

function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return items.map((item: T): T[K] => item[key]);
}


// Problem 7: Object-Oriented Programming

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


// Problem 8: Promise and Async Function

async function validateAgeAsync(age: number): Promise<string> {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return "Access Granted";
}