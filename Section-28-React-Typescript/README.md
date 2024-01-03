## What and why?
Typescript is a "superset" to Javascript - it extends JavaScript. Base JS syntax and features does not changes, but TypeScript extends these features.
Most importantly <b>TypeScript adds static typing</b> to JavaScript. Javascript on its own is dynamically typed.
#### What does it mean?
Most importantly, functions written with dynamically typing expects two parameters, not any particular types.
```javascript
function add(a, b) {
  return a + b;
}
```
This functions works with strings and numbers. This is not always the best behaviour, then having static typing could enhance code. Thats where TypeScript could be a help.
## TypeScript Basics
In TypeScript, this function could work like this:
```javascript
function add(a: number, b: number) {
  return a + b;
}

```
In order to avoid concatenating strings.

TypeScript needs to be compiled into JavaScript first. 

### Base Types
- Primitives
  - number
  - string
  - boolean
In TypeScript, when we define variable of primitive type, we just enter it's type after a colon
```javascript
let age:number;
let userName:string="OOO";
let isTrue:boolean=false;
```
- More complex
  - arrays
  - objects
```javascript
let hobbies: string[];
hobbies=["Sports","Cooking"];

let person:{
    name:string
    age:number
};
```
You can also define an array of such object in this way:
```javascript
let people:{
    name:string
    age:number
}[];
```

### Type inference
By default, TypeScript tries to infere as many types as possible - get to know what types are being used.
```javascript
let course="React - The Complete Guide";
course=12; <--- an Error
```
Its good practice to embrace type inference and not setting the type explicitly.
### Multiple types
```javascript
let count:string | number;
count=12; <--No error
count="None"; <-- no error
```

### Type Aliases
To avoid duplicating definitions, you can use a feature called type aliassing:
```typescript
type Person={
    name:string
    age:number
}
let newPeople:Person[]
```

- Function types
Let's get back to previous function once again:
```typescript
function add(a:number,b:number){
    return a+b;
}
```
As we can see, there are types explicitly added to the parameters. Although, there is third type setted in this function. Typescript automatically setts a type for the return value. You can also explicitly state it like this:
```typescript
function add(a:number,b:number):string | number{
    return a+b;
}
```
But it isn't advised, as mentioned in the "Type inference" section. Also, functions have the special type - "void". It is used when the function does not return any value.
- Objects
We specify a type once, and then just use it like a type - it helps with redundancy

### Generics
Sometimes, you want to function works with any type of data, like numbers and strings at the same time.
```typescript
function insertAtBegining(array:any[],value:any){
    const newArray=[value,...array]
    return newArray;
}
```
But when using type any, you basically throw away all of TypeScript support, as it is a fallback type.
That's where Generics comes into play:
```typescript
function insertAtBegining<TArray>(array:TArray[],value:TArray){
    const newArray=[value,...array]
    return newArray;
}
```
This new function uses new type [<T{id}> is a common naming convention] in which TypeScript will find the needed type and will treat the newArray like, for example, array:int[] instead of array:any[].
## Combining React & TypeScript
For the sake of not keeping this readme too long to freely read, to know more about combining React and TypeScript, please refer to README.md file, located in "react_with_typescript" sub-directory or [click here](https://github.com/KlawyFarfocel/ReactCompleteGuide/tree/main/Section-28-React-Typescript/react_with_typescript)