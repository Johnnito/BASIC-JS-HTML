// Entorno de ejecución de JavaScript es donde corre JS
// Hay muchos entornos, como nodeJS, el navegador...
// El HTML será el encargado de ejecutar automáticamente el código de JS

// Para leer el archivo de HTML hay que crear variables que representen los diferentes selectores del HTML
// Esto lo provee el entorno, en este caso el explorador
// Utiliza document.getElementXXX, donde XXX depende del elemento que estemos queriendo obtener del HTML
// Si el elemento que queremos no pertenece a alguno de ellos, se puede usar la función querySelector
// En el HTML hay un tag que se llama h1, para seleccionarlo:
const h1 = document.querySelector('h1');

// Si se quisiera seleccionar un párrafo:
const p = document.querySelector('p');
// Para todas las coincidencias:
const multiple_p = document.querySelectorAll('p');

// Seleccionar una clase específica: En este caso, parrafito
const spec_class = document.querySelector('.parrafito');
// Check if class exist:
spec_class.classList.contains('parrafito');
// Adds a class if it doesn't exist or removes it if it does
spec_class.classList.toggle('parrafito');

// Para un id
const pid = document.querySelector('#pid');
// Input:
const input = document.querySelector('input');

// console.log: Al pasarle un {}, él interpreta que tiene que imprimir un objecto e imprimte tanto los valores como propiedades
console.log({
    h1,
    p,
    multiple_p,
    spec_class,
    pid,
    input
});

// En la consola muestra directamente el valor del tag, en este caso: Manipulación del DOM
console.log(h1);
// Accediendo a los diferentes atributos:
// Para el caos de value, como al inicio está vacío, no imprime nada. Se puede poner un valor por defecto en el HTML:w
console.log(input.value);