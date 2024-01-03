import React, { useState } from "react";
import Todo from "../modules/todo";

type TodoContextObject={
    items:Todo[],
    addTodo:(todoText:string)=>void,
    removeTodo:(id:string)=>void
}

export const TodosContext=React.createContext<TodoContextObject>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
});

const TodosContextProvider:React.FC<{children?:React.ReactNode}>=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([]);

    const addTodoHandler=(todoText:string)=>{
      setTodos((prevTodos)=>[
        ...prevTodos,
        new Todo(todoText)
      ])
    }
    const removeTodoHandler=(todoId:string)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo=> todo.id!==todoId)
        })
    }

    const contextValue:TodoContextObject={
        items:todos,
        addTodo:addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
    
}

export default TodosContextProvider;