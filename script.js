//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
}
function getPG(movie){
    return movie.filter((ele)=>ele.rating==="PG");
}
var movies=new movie("Casino Royale", "Eon Productions","PG13");
console.log(movies);

//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  getRadius() {
    return this._radius;
  }

  setRadius(radius) {
    this._radius = radius;
  }

  getColor() {
    return this._color;
  }

  setColor(color) {
    this._color = color;
  }

  toString() {
    return `Circle[radius=${this._radius}, color=${this._color}]`;
  }

  getArea() {
    return Math.PI * this._radius * this._radius;
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

//3.Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, email, address) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._email = email;
    this._address = address;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }

  toString() {
    return `${this._firstName} ${this._lastName} (age: ${this._age}, email: ${this._email}, address: ${this._address})`;
  }
}

//4.write a class to calculate the uber price.

class UberPriceCalculator {
  constructor(distance, serviceType) {
    this._distance = distance;
    this._serviceType = serviceType;
  }

  get distance() {
    return this._distance;
  }

  set distance(distance) {
    this._distance = distance;
  }

  get serviceType() {
    return this._serviceType;
  }

  set serviceType(serviceType) {
    this._serviceType = serviceType;
  }

  calculatePrice() {
    let basePrice = 0;
    let distancePrice = 0;

    switch (this._serviceType) {
      case "UberX":
        basePrice = 5;
        distancePrice = 0.6;
        break;
      case "UberXL":
        basePrice = 10;
        distancePrice = 1.2;
        break;
      case "UberBlack":
        basePrice = 15;
        distancePrice = 2.0;
        break;
      default:
        throw new Error("Invalid service type");
    }

    const price = basePrice + distancePrice * this._distance;

    
  }
}