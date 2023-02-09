/* TYPESCRIPT
    What are the basics uses and ways of writing 
    Types : define the type of your data explicitly
    Is a Language superset of JavaScript

    // Define system folder.
    Update to Github
*/

// Create a variable with typescript

let myId: number = 5
myId = 7

// How to Compile TypesCript to JS using TSCompiler
//      Open the terminal and type: ----- tsc 'name-TSC-file' ----
//      Once it's compiled it will create a JS file, by default is going to compile to ES5.
//      Watch mode: ---- tsc --watch 'name'----- any changes we make to .ts file will watch it and update when se save.

//      Compile any(all) typescript files in the project, open terminal and type: tsc


// Set up configuration file
//      Open terminal and type: tsc --init
//      Creates a new tsconfig.json file.

//      Vanilla Typescript setup
//      You can modify the compiler options, a few basic ones like target set to 'ESNEXT'
//      "target": "ESNEXT",
//      "module": "ESNEXT"


// Set up directory structure
//      In the tsconfig.json file use the src folder for .ts files and dist for .js compiled.
//      Set up this uncommenting and filling
//      "outDir": "./dist"
//      "rootDir": "./src"


// Basic Types
let id: number = 5
let company: string = 'Geolavz'
let isPublished: boolean = true

let x: any = 'x can be any type'
let y: any = 2

// Array - setting the types for the array values
// This array can only contain numbers
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'String']

// Tuple: you can specify the type inside the array
let person: [number,string, boolean] = [1,'Brad',true]
// Tuple Array: an array of tuples
let employee: [number,string][]
employee = [
    [1, 'Geo'],
    [2, 'Maud'],
    [3, 'Bro']
]

// Union: if you want a variable to be able to hold more than one type.
let pid: string | number = 22 // this can be either a number or string

// Enums: Enumerated Types, defined a set of named constants numeric or string
enum Direction1 {
    // Default Set up to numeric values
    // By default they have values from 0 to N
    Up,
    Down,
    Left,
    Right

    // You can change the values by default
    // Up = 1
    // Down would be 2 and so on.
}

console.log(Direction1.Right) // 4

enum Direction2 {
    // Set up to Strings
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// OBJECTS

const user1 : {
    id: number
    name: string
} = {
    id: 1,
    name: 'Trooper'
}

// Type: another way to set up the TYPES of an object
// Types can be used with primitives and unions

    // Type with primitives
type Usuario = {
    id2: number
    name2: string
}

const user2: Usuario = {
    id2 : 1,
    name2 : 'Trooper2',
}

    // Type with union

type Point = number | string
const p1: Point = 1



// TYPE ASSERTION: Explicitly telling the compiler that we want to treat
// an entity as a diferent type.

let cid: any = 1
let costumerId = <number>cid // cid type is changed to number
let costumerId2 = cid as boolean // Can be done this way aswell.


// FUNCTIONS
// Specifiy the TYPE of parameters and the return value aswell outside the ( )
function addNum(m: number, l: number) : number {
    return m + l
}

    // Function with Union, return void so it can be either type.
function log(message: string | number): void{

}

// INTERFACES: custom type or specific structure to an object or function.

    // Interface for Objects

// OPTIONAL PROPERTIES: Use a ?
// READ-ONLY properties (not able to reassign)
interface UserInterface{
    readonly id3: number
    name3: string
    age?: number
}

const user3: UserInterface = {
    id3: 1,
    name3: 'Trooper3'
}
 
    // Interface for Functions.

interface MathFunc {
    (x: number,y:number):number
}

const add: MathFunc = (x: number, y:number): number =>  x + y
// Using the same interface with a differente function
const sub: MathFunc = (x: number, y:number): number =>  x - y

// CLASSES
class Persona {
    id: number
    name: string

    constructor(paramId: number, paramName: string){
        this.id = paramId,
        this.name = paramName
    }
}

const Persona1 = new Persona(123, 'Diego')

// ACCESS MODIFIER - DATA MODIFIERS
/* Properties by default are public which means you
 can access and change them outside the function */

// - Private: property only accesible within the class. (not assingning or log)
// - Protected: you can only access it withing the class or any class that extends from that class.

class Person1 {
    private  id: number
    protected name: string

    constructor(cID:number, cID2:string){
        this.id = cID
        this.name = cID2
    }
}

// Adding an Interface for Classes

interface personInterface{
    id: number
    name: string
    register(): string
}

class Person implements personInterface{
    id: number
    name: string

    constructor(cID:number, cName:string){
        this.id = cID
        this.name = cName
    }

    register(){
        return `${this.name} is now registered`
    }
}

// EXTENDING CLASSES

// Subclass of Person
class Employee extends Person {
    position: string

    constructor(cID: number, cName:string, cPosition: string){
        // Initialized values
        super(cID,cName)
        this.position = cPosition
    }
}

const emp = new Employee(2122, 'Sean', 'Developer')



// GENERICS: used to build reusable components

// Use a place holder <T> to specify the type when calling the function
function getArray<T> (  items: T[] ): T[] {
    // returns an instance of an Array and adds the items.
    return new Array().concat(items)
}

    // Creating two different arrays one with strings and second with numbers

const numArray = getArray<number>([1,2,3,4])
const strArray = getArray<string>(['banana','apple','kiwi','pineapple'])

    // strArray.push(1); get an error because the type is speficied to strings.



