// Hay dos tipos de funciones: Declarativas y por expresion

// Declarativa: Usando la palabra reservada function
function function_name(){
    return 0;
}

// Expresion: Usando una variable - Se pueden pasar los parametros
var function_var = function(var1, var2){
    return var1 + var2;
}

var result = function_var(1, 2);

// Para imprimir en consola:
console.log(result);

// Imprimir variable dentro de funcion
function helloName(name){
    console.log("Hello, " + name);
    console.log("Hello, ", name);
}
