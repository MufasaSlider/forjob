class Car{
    constructor(color){
        this.color=color;
       }
}
let car= new Car("green");
let carProto=Object.getPrototypeOf(car);
console.log(carProto);
let objProto=Object.getPrototypeOf(carProto);
console.log(objProto);
let lastOne=Object.getPrototypeOf(objProto);
console.log(lastOne);