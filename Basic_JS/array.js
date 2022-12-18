/*
 * Se define con []
 * Solo pueden tener valores de un mismo tipo
 */

var arr_example = ["element1", "element2", "element3"];

// Check number of elements
arr_example.length; // Returns 3

// Accessing element2
arr_example[1];

// Add elements into the end of the array
arr_example.push("element4");
// Add element as first element
arr_example.unshift("element0");

// Remove element from last position and returns it
var last_data = arr_example.pop();
// Remove first element
var first_data = arr_example.shift();

// Get position of element
var position = arr_example.indexOf("element2");

// Function to return instances that fits in certain condtion
var devices = [
    {name : "Bicycle", price: 150000},
    {name : "Tv", price: 250000},
    {name : "Book", price: 1000},
    {name : "Laptop", price: 500000},
    {name : "Smartphone", price: 300000}
];

// It will iterate over all device in devices and returns all devices that have a cost lower than 200000
// We define a new var with filtered devices
var filter_devices = devices.filter(function(device){
    return device.price < 200000
});

// map: Map certain articles and creates a new array
// It returns all device names
var mapDevices = devices.map(function(device){
    return device.name
});

// find(): Searches for something in existing array
var device = devices.find(function(device){
    return device.nombre === "Laptop"
});

// forEach: Iterate over all elements
devices.forEach(function(device){
    console.log(device.name);
});

// some(): Return true or false if at least one element satisfies a condition 
devices.some(function(device){
    return device.price < 300000;
});

