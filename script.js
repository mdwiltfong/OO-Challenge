//Part One
class Vehicle{
  constructor(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
  }
  honk(){
    console.log('Beep')
  }
  string(){
    console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
  }
  
}
/*
const v1= new vehicle("Honda", "Monster Truck", 1999);
v1.honk();
v1.string();
*/
// Part Two

class car extends Vehicle {
  constructor(make,model,year){
    super(make,model,year)
    this.numWheels=4;
  }  
}
/*
let myFirstCar = new car("Toyota", "Corolla", 2005);
myFirstCar.string(); // "The Vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4 */

//Part Three

class motorcycle extends Vehicle{
  constructor(make,model,year){
    super(make,model,year)
    this.numWheels=2;
  }
  revEngine(){
    console.log('VROOM!');
  }
}
/*
let myFirstMotorcycle = new motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.string();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2 */

//Part Four

class Garage{
  constructor(cap,vehicle){
    this.vehicles=[];
    this.capacity=cap;
    this.vehicle=vehicle;
  }  
  add(vehicle){
    if(!(vehicle instanceof Vehicle)){
      throw new Error('Only vehicles are allowed in here! ');      
    } 
    this.vehicles.push(vehicle);
    console.log('Vehicle added!')
  }
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"
