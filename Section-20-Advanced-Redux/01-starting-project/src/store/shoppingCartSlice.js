import {createSlice} from "@reduxjs/toolkit"
import { uiActions } from "./uiSlice"
const shoppingCartInitialState={
    items:[],
    isVisible:false
}
const shoppingCartSlice=createSlice({
    name:"cart",
    initialState:shoppingCartInitialState,
    reducers:{
        toggleCart(state){
            state.isVisible=!state.isVisible
        },
        addToCart(state,action){
            if(state.items.findIndex(item=>item.title===action.payload.title)===-1){
                state.items=[...state.items,{title:action.payload.title,price:action.payload.price,quantity:1}]
            }else{
                const updatedData=state.items.map(item =>{
                    if(item.title===action.payload.title){
                        return {...item,quantity:item.quantity+1}
                    }
                    return item;
               })
               console.log(updatedData)
               state.items=[...updatedData];
            }
        },
        increaseAmount(state,action){
           const updatedData=state.items.map(item =>{
                if(item.title===action.payload.title){
                    return {...item,quantity:item.quantity+1}
                }
                return item;
           })
           state.items=updatedData;
        },
        decreaseAmount(state,action){
            const updatedData=state.items.map(item =>{
                if(item.title===action.payload.title){
                    if(item.quantity!==1){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return null;
                    }
                }
                return item;
           }).filter(Boolean)
           console.log(updatedData)
           state.items=updatedData;
        },
        replaceCart(state,action){
            state.items=action.payload.items;
        }
    }
})



export default shoppingCartSlice.reducer
export const cartActions=shoppingCartSlice.actions;