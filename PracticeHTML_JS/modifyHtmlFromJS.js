// Modify HTML
// Get all sections from index.html
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const spec_class = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

// innerHTML: It modifies the element inside an HTML label
// This is dangerous because some can add its own HTML
h1.innerHTML = 'New header <br> Adding new line with another HTML label';
// innerText: Modifies only the text of an HTML label
h1.innerText = "New header <br> without new line using HTML label";

// Appends HTML class to an existing element
// getAttribute reads attributes from specific element
var read_attrib = h1.getAttribute('attr_of_h1')
console.log("h1: Attrib val: ", read_attrib);
// setAttribute modifies the class from the attribute
// With this function, it changes the original class_name from HTML and sets the new value
// h2.setAttribute("class_name", "new class value");
read_attrib = h2.getAttribute("class_name");
console.log("h2: Attrib val: ", read_attrib);

// classList: It sets new classes
h2.classList.add("added_class");
h2.classList.remove("class_name");

// For inputs, we can directly modify its value 
input.value = "Value modified with JS";

// Add new element
console.log(document.createElement("span"));
// Add new element in the HTML: First, we need a location to add the new element
const img = document.createElement("img");
img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png");
console.log(img);
// Appends img to pid
// It will update the pid section with the img from the src link
pid.append(img);
// We can also use the appendChild method
pid.appendChild(img);
// Replace pid data
pid.innerHTML = "";
pid.appendChild(img);
// replaceWith doesn't work because it replaces the whole pid
// pid.replaceWith(img);
//pid.replaceChild(img);