let x = 'hey class' // implicitly it always have string
let a: string = 'I am a string' // explicitly
let b: string | number | boolean = 'another string'

console.log(typeof (x))


b = 12345
console.log(typeof (b))


b = false
console.log(typeof (b))


function testMyTypescript(num1: number, num2: number):number {
    return num1 * num2
}

console.log(testMyTypescript(23, 78))


// arrays in typescript

function myArrayFunction(arr1: string[]) {
    console.log(arr1)
}

myArrayFunction(['test1', 'hola', 'mira', 'vera'])


/**
 * objects
 * THere are 2 ways to declare the shape of an object
 * 1. Type - LImitations / reatricted
 * 2. Interface - more flexible
 *
 */
type TBird = {
    wings: number
    beak: boolean
    feathers: number | string
    color?: string
}
const bird1: TBird = { wings: 2, beak: true, feathers: 2000 }
const bird2: TBird = { wings: 5, beak: false, feathers: 2, color: 'Blue' }
const bird3: TBird = { wings: 30, beak: true, feathers: 'none', color: 'darkBlue' }

/**
 * Interface in Typescript
 * 
 */

import { IBird } from "./interfaces"
import { IHaskilled } from "./interfaces"
import { IKillerBirds } from "./interfaces"
const owl: IBird = {
    wings: 2,
    noctunal: true,
    family: ['joe', 'jane', 'jack'],
    flies: true
}


const eagle: IKillerBirds ={
    wings: 2,
    noctunal: true,
    flies: true,
    family: ['joe', 'jane', 'jack'],
    edible: true,
    hasKilled: [
        {type: 'racoon', weight: 12, color: 'darkbrown'},
        {type: 'rat', weight: 1, color: 'darkgray'},
        {type: 'Andys puppy', weight: 0.5, color: 'yellow'},
    ],
    phoneNumber: 67637364
}

