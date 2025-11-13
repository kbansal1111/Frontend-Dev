var a=null/0;
var b = "20";

// numeric casts
var n1 = Number(b);       // 20
var n2 = parseInt(b, 10); // 20
var n3 = parseFloat(b);   // 20
var n4 = +b;              // 20 (unary +)

// string casts
var s1 = String(b);       // "20"
var s2 = b.toString();    // "20"

// boolean casts
var bool1 = Boolean(b);   // true
var bool2 = !!b;          // true

// quick inspect
console.log({ b, n1, n2, n3, n4, s1, s2, bool1, bool2 });
console.log(a+b);

// object literal
const objLiteral = { x: 1, y: 2 };
console.log('object literal', objLiteral);

// constructor function
function Point(x, y) { this.x = x; this.y = y; }
const point = new Point(3, 4);
console.log('constructor function', point);

// ES6 class
class Person {
    constructor(name) { this.name = name; }
    greet() { return `hi ${this.name}`; }
}
const person = new Person('Alice');
console.log('class instance', person, person.greet());

// Object.create(null) — plain dictionary without prototype
const dict = Object.create(null);
dict.apple = 5;
console.log('Object.create(null)', dict, Object.getPrototypeOf(dict));

// new Object()
const newObj = new Object({ z: 9 });
console.log('new Object()', newObj);


// JSON.parse from a JSON string
const fromJson = JSON.parse('{"foo":"bar"}');
console.log('JSON.parse', fromJson);

