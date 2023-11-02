import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgress";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig={
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
}

export default function Checkout(){
    const cartCtx=useContext(CartContext)
    const userProgessCtx=useContext(UserProgressContext);
    const totalCartValue=cartCtx.items.reduce((totalPrice,item)=>{
        return totalPrice + item.price*item.quantity;
    },0)
    const{data,isLoading:isSending,sendRequest,error,clearData}=useHttp('http://localhost:3000/orders',requestConfig)


    function handleCloseModal(){
        userProgessCtx.hideCheckout();
    }
    function handleFinish(){
        userProgessCtx.hideCheckout();
        cartCtx.clearCart();
        clearData()
    }
    function handleSubmit(event){
        event.preventDefault();

        const formData=new FormData(event.target);
        const customerData=Object.fromEntries(formData.entries())
        
        sendRequest(
            JSON.stringify({
                order:{
                    items:cartCtx.items,
                    customer:customerData
                }
            })
        )   
    }
    let actions=(
        <>
            <Button onClick={handleCloseModal} type="button" textOnly>Close</Button>
            <Button>Submit Order</Button>
        </>
    )
    if(isSending){
        actions=<span>Sending order data...</span>
    }
    if(data && !error){
        console.log(data);
        return <Modal open={userProgessCtx.progress==="checkout"} onClose={handleCloseModal}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully</p>
            <p>We will get back to you with more details via e-mail within the next few minutes</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>OK</Button>
            </p>
        </Modal>
    }
    return(
        <Modal open={userProgessCtx.progress==="checkout"} onClose={handleCloseModal}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total amount: {currencyFormatter.format(totalCartValue)}</p>
                <Input label="Full Name" type="text" id="name"/>
                <Input label="E-mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>
                {error && <Error title="Failed to sumbit order" message={error}/>}
                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    )
}