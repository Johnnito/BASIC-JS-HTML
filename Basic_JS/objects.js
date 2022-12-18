// Objects are defined using {} - Same than hash/dict
var obj = {
    // Constructor
    // Setting properties
    prop1: "Val",
    prop2: "Val2",
    prop3: 1234,
    // Defining methods
    obj_method: function(){
        // Using this keyword
        console.log("Obj method from obj - key1: ", this.prop1);
        return 1
    }
};

// Get value: We can do it in two ways:
obj["prop1"];
obj.prop1;

// Calling method:
obj.obj_method();

// Constructor
function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Create a new instance of car
var newCar = new car("Toyota", "Corolla", 2018)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// Constructor with multiple instances: 
function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var available_brands = {
    "Toyota" : ["Corolla", "Hilux", "Supra"],
    "Hyundai" : ["Elantra", "Accent", "Tucson"],
    "Tesla" : ["Model S", "Model X", "Model 3"]
};

function create_list_of_cars(total_cars){
    var list_of_cars = [];
    while (true){
        for (brand of Object.keys(available_brands)){
            for (var model of available_brands[brand]){
                var year = randomIntFromInterval(2010, 2022);
                list_of_cars.push(brand, model, year);
                total_cars--;
                if (!total_cars){
                    return list_of_cars;
                }
            }
        }
    }
}

var total_cars = prompt("Number of cars: ");
create_list_of_cars(total_cars);