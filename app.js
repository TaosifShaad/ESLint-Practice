var i = 1;

function montasirsFunction() {
  return 1;
}

function taosifsFunction() {
  return 2;
}

montasirsFunction(); //asdf
// taosifsFunction();

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let myCar = new Car("Ford", 2014);

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

let a = 20;
let b = 30;

if (a > 500) {
  a += 1;
  a += 1;
  a += 1;
}

if (b > 500) {
  b += 1;
}

let arr = [1, 2, 3];
console.table(arr);