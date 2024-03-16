//Basic Types
let x:number=45;
let y:string="hi";
let z:boolean=true;
let num:number[]=[58,54,55,51];

let tup:any[]=["sum",59];
enum Day{
    Sunday=1,monday,tuesday,wednesday,thurusday,friday,saturday
}


console.log(x);
console.log(y);
console.log(z);
console.log(num);
console.log(tup);
console.log(Day[1]);



// Functions

function add(a: number, b:number)
{
    return a+b;
}
console.log(add(3,5));



function capitalize(a: string)
{
    return a.toUpperCase();
}
console.log(capitalize("gayatri"));


//Interfaces

interface Person
{
    name:string,
    age: number,
    email:string
}


let user:Person={
    name:"Gayatri",
    age:20,
    email:"gayatridikkala@gmail.com"
}

console.log(user.name);
console.log(user.age);
console.log(user.email);




//Class

class Car
{
    make:string;
    model:string;
    year:number;
    displayInfo()
{
    console.log("Make: "+this.make+"Model: "+this.model+ "Year: "+this.year);
}
}

let c1=new Car();
c1.make="Benz";
c1.model="2024 Volvo XC40";
c1.year=2022;
console.log(Car);



//Generics

function reverseArray<T>(arg: T[]): T[]{
    return arg.reverse();
}


let numbers: number[] = [1, 2, 3, 4, 5];
let reversedNumbers: number[] = reverseArray(numbers);
console.log(reversedNumbers); 