let age:number;
let userName:string="OOO";
let isTrue:boolean=false;
let hobbies: string[];
hobbies=["Sports","Cooking"];




let person:{
    name:string
    age:number
};
let people:{
    name:string
    age:number
}[];

let course="React - The Complete Guide";

let count:string | number;
count=12;
count="None";

type Person={
    name:string
    age:number
}
let newPeople:Person[]

function add(a:number,b:number){
    return a+b;
}
function printOutput(value:any){
    console.log(value)
}

function insertAtBegining<TArray>(array:TArray[],value:TArray){
    const newArray=[value,...array]
    return newArray;
}
const demoArray=[1,2,3];
const updatedArray=insertAtBegining(demoArray,7);