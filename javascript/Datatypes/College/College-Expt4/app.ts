// Base class Student
class Student {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Subclass CollegeStudent inheriting from Student
class CollegeStudent extends Student {
    private course: string; // Private: Only accessible inside this class

    constructor(name: string, age: number, course: string) {
        super(name, age); // Call the parent class constructor
        this.course = course;
    }

    display(): string {
        return `${super.display()}, Course: ${this.course}`;
    }
}

// Array to store students
let students: CollegeStudent[] = [];

// Function to add a student
function addStudent(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    const course = (document.getElementById("course") as HTMLInputElement).value;

    if (name && age && course) {
        const newStudent = new CollegeStudent(name, age, course);
        students.push(newStudent);
        displayStudents();
    } else {
        alert("Please enter all details.");
    }
}

// Function to display students
function displayStudents(): void {
    const studentListDiv = document.getElementById("student-list")!;
    studentListDiv.innerHTML = ""; // Clear existing list

    students.forEach((student) => {
        const p = document.createElement("p");
        p.textContent = student.display();
        studentListDiv.appendChild(p);
    });
}
