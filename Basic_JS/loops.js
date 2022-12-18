// Loops in JS: while, do while and for

// Define basic structures
var names = ["Name1", "Name2", "Name3"];
var students = {
    "Key1" : "Name1",
    "Key2" : "Name2",
    "Key3" : "Name3"
}

// for loop: Iterate over elements
for (var idx = 0; idx < names.length; idx++){
    console.log(names[idx]);
}
// for loop of: Iterate over elements
for (var name of names){
    console.log(name);
}
// for in loop: Iterate over hash/object
for (var key in students){
    console.log(students[key]);
}

// While loop
var student_idx = 0;
while (student_idx < names.length){
    console.log(names[student_idx]);
    student_idx++;
}

var estudiantes = [];
function solution(estudiantes, deathCount, nuevo) {
    while (deathCount){
        estudiantes.pop();
        deathCount--;
    }
    return estudiantes.push(nuevo);
}