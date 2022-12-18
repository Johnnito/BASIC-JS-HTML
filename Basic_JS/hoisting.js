// Variables y funciones que se declaran antes de que se procese el codigo
// my_name se define después de que console.log lo utiliza
console.log(my_name); // En este caso devolvería undefined
// Devuelve undefined, ya que el compilador se da cuenta que hay una nueva variable
// Entonces la define con un valor por defecto de undefined
var my_name = "James";

prot_function(); // En este caso devolvería Hola undefined
prot_function2(); // En este caso devolvería Hola James

function prot_function(){
    console.log("Hola " + new_name);
}

function prot_function2(){
    console.log("Hola " + new_name);
}

var new_name = "Johnny";