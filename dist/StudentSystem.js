"use strict";
var students = [];
function addStudent(studentId, name, age, subjects, status) {
    var newStudent = { studentId: studentId, name: name, age: age, subjects: subjects, status: status };
    students.push(newStudent);
    return newStudent;
}
function updateStatus(studentId, status) {
    var student = students.find(function (s) { return s.studentId === studentId; });
    if (!student)
        return "Student not found.";
    student.status = status;
    return "".concat(student.name, " has ").concat(status);
}
function addSubject(studentId, subject) {
    var student = students.find(function (s) { return s.studentId === studentId; });
    if (!student)
        return "Student not found.";
    student.subjects.push(subject);
    return "".concat(subject, " added to ").concat(student.name, "'s subjects.");
}
function getStudent(studentId) {
    var student = students.find(function (s) { return s.studentId === studentId; });
    return student ? student : "Student not found.";
}
// Test cases
console.log(addStudent(1, "Alice", 20, ["Math", "Science"], "active"));
console.log(updateStatus(1, "graduated")); // "Alice has graduated"
console.log(addSubject(1, "History")); // "History added to Alice's subjects"
console.log(getStudent(1)); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science", "History"], status: "graduated" }
