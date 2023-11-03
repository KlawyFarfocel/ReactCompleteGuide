import {configureStore} from "@reduxjs/toolkit"
import uiSlice from "./uiSlice"
import shoppingCartReducer from "./shoppingCartSlice"
const store=configureStore({
    reducer:{
        cart:shoppingCartReducer,
        ui:uiSlice.reducer
    }
})
export default store;