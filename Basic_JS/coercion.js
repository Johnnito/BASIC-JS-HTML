// Coercion: Hay dos tipos: Implícitas y explícitas
// Implícita: El lenguaje cambia de un tipo de valor a otro: number -> string
var cast_implicito = 4 + "7"; // Infiere que es una concatenación de strings
typeof cast_implicito; // Retorna un string
console.log(cast_implicito); // Imprime un 47

var new_cast = 4 * 7;
typeof new_cast; // Return 'number'
console.log(new_cast) // Prints '28' - Interprets them as numbers

// Explícita: El programador cambia un valor de un tipo a otro - Cast
var numb = 10;
var str_numb = numb + ""; // COnvert numb into string using concatenation
var str_numb_explicit = String(numb); // Cast to String

var cast_to_number = Number("20"); 

// ParseInt: Starts changing the string from first char until it gets a string
parseInt("123abc"); // Returns 123 
parseInt("abc123"); // Returns NaN