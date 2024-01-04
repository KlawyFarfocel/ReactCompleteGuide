## Combining React & TypeScript
When creating new React Project with incentive of using TypeScript it's good to include it during instalation process. Create-React-App have predefined template that creates React Application with addition of Typescript. What's more -> Now that the .jsx files are being replaced by the .tsx files, when starting dev server with npm start, we also start server that converts TypeScript into JavaScript files.
## Working with Components & TypeScript
As learned before, in TypeScript type definitions are vital part of it. When creating component in React, we have to somehow tell Typescript what exactly will be passed to functional component. With the --typescript template, it comes built-in type React.FC, which means "Functional Component". It ensures that Typescript knows what is passed through function and not giving us error. Also, it helps with autocompletion.
Examples
```typescript
const TodosContextProvider:React.FC<{children?:React.ReactNode}>=(props)=>{}
```
or
```typescript
const TodoItem:React.FC<{text:string,onRemoveTodo:()=>void}>=(props)=>{}
```
### Using Refs
When we are trying to access the values that possibly can not be there yet, Typescript considers this an error. In order to avoid it, we use "?" and "!" characters to state, that we are aware of such possiblity and tell TypeScript what do do if such situation happens
- ?
Try to drill into object to get the value, if value is not there, simply use NULL
- !
"I am 100% sure the value will be there, so drill into the object and get the value, no matter what"
Examples:
```typescript
 const enteredText=todoTextInputRef.current!.value;
```
or
```typescript
 const enteredText=todoTextInputRef.current?.value;

```
### How to use useState() with Typescript
Although not much have changed from JavaScript to Typescript, there are some distingued features that we have to look for
The most important part is that we have to state, which type we be used in that State
```typescript
 const [todos,setTodos]=useState<string[]>([]);
```
The rest of this statement becomes pretty much the same

## tsconfig.json
tsconfig.json is a file that can be added to any project that uses Typescript, and it will configure the compilation.
The options there are describes in the Typescript docs. I will talk about the most important options listed there.
- target
This line controls the target JavaScript version to which the code will be converted. This is not necessarily the last step in conversion process, because, for example, the Babel can take the output JavaScript and convert it even more.
- lib
Default TypeScript libraries - it influences which types are known to TypeScript, when installing new, it should be listed there.
For example, the DOM lib allows for the <HTMLInputElement> to be recognised by Typescript and allows us to use some methods provided for that type
- allowJS
Allows to include plain JS files in project and import from them
- strict
When set to true, it ensures that we have the strictest set of rules applied to project. That, for example means, that we cannot have implicitly set :any values.
- jsx 
It controls that jsx code is supported

All of these parameters as well as the other ones should only be changed if we are certain of what we want to achieve. 