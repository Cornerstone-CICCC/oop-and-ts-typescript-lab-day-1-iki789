type StudentStatus = "active" | "graduated" | "dropped";

type Student = {
  studentId: number;
  name: string;
  age: number;
  subjects: string[];
  status: StudentStatus;
};

const students: Student[] = [];

function addStudent(
  studentId: number,
  name: string,
  age: number,
  subjects: string[],
  status: StudentStatus
): Student {
  const newStudent: Student = { studentId, name, age, subjects, status };
  students.push(newStudent);
  return newStudent;
}

function updateStatus(studentId: number, status: StudentStatus): string {
  const student = students.find((s) => s.studentId === studentId);
  if (!student) return "Student not found.";
  student.status = status;
  return `${student.name} has ${status}`;
}

function addSubject(studentId: number, subject: string): string {
  const student = students.find((s) => s.studentId === studentId);
  if (!student) return "Student not found.";
  student.subjects.push(subject);
  return `${subject} added to ${student.name}'s subjects.`;
}

function getStudent(studentId: number): Student | string {
  const student = students.find((s) => s.studentId === studentId);
  return student ? student : "Student not found.";
}

// Test cases
console.log(addStudent(1, "Alice", 20, ["Math", "Science"], "active"));
console.log(updateStatus(1, "graduated")); // "Alice has graduated"
console.log(addSubject(1, "History")); // "History added to Alice's subjects"
console.log(getStudent(1)); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science", "History"], status: "graduated" }
