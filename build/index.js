"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 'hey class'; // implicitly it always have string
let a = 'I am a string'; // explicitly
let b = 'another string';
console.log(typeof (x));
b = 12345;
console.log(typeof (b));
b = false;
console.log(typeof (b));
function testMyTypescript(num1, num2) {
    return num1 * num2;
}
console.log(testMyTypescript(23, 78));
// arrays in typescript
function myArrayFunction(arr1) {
    console.log(arr1);
}
myArrayFunction(['test1', 'hola', 'mira', 'vera']);
const bird1 = { wings: 2, beak: true, feathers: 2000 };
const bird2 = { wings: 5, beak: false, feathers: 2, color: 'Blue' };
const bird3 = { wings: 30, beak: true, feathers: 'none', color: 'darkBlue' };
const owl = {
    wings: 2,
    noctunal: true,
    family: ['joe', 'jane', 'jack'],
    flies: true
};
const eagle = {
    wings: 2,
    noctunal: true,
    flies: true,
    family: ['joe', 'jane', 'jack'],
    edible: true,
    hasKilled: [
        { type: 'racoon', weight: 12, color: 'darkbrown' },
        { type: 'rat', weight: 1, color: 'darkgray' },
        { type: 'Andys puppy', weight: 0.5, color: 'yellow' },
    ],
    phoneNumber: 67637364
};
