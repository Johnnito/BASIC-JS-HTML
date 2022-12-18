const h1 = document.querySelector('h1');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result_value');
const operation = document.querySelector('#operators');
const form = document.querySelector('#formulario');

// Disparar un evento cuando btn es seleccionado
// addEventListener: Método para esperar un evento y triggerear una acción
// Las funciones no hay que ponerlas con paréntesis porque solo es para saber
// la función que tiene que ejecutar y no ejecutarla de una vez
btn.addEventListener('click', btnOnClick);

// Para escuchar la acción de un elemento en el HTML
// Crear una función para cuando un botón es presionado
function btnOnClick(){
    switch(operation.value){
        case '+':
            result.innerText = Number(input1.value) + Number(input2.value);
            break;
        case '-':
            result.innerText = Number(input1.value) - Number(input2.value);
            break;
        case '*':
            result.innerText = Number(input1.value) * Number(input2.value);
            break;
        case '/':
            result.innerText = Number(input1.value) / Number(input2.value);
            break;
    }
}

// Crear un formulario para limpiar el output del resultado
// Por defecto la acción de un formulario es submit, así que hay que elegir otra acción
form.addEventListener('submit', cleanResult);
// Para remover la actualización del submit por defecto
// Se utiliza el event para evitar la acción por default
function cleanResult(event){
    event.preventDefault();
    result.innerText = "Empty";
}

