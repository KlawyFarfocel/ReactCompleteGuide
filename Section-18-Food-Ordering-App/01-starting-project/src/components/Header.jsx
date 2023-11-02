import { useContext } from 'react'
import logoImage from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgress';
export default function Header(){
    const cartCtx=useContext(CartContext);
    const totalCartItems=cartCtx.items.reduce((totalNumber,item)=>{
        return totalNumber+item.quantity
    },0)
    const userProgressCtx=useContext(UserProgressContext)
    function handleGoToCart(){
        userProgressCtx.showCart();
    }
    return(
        <header id="main-header"> 
            <div id="title">
                <img src={logoImage} alt="A restaurant logo" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button onClick={handleGoToCart} textOnly>
                    Cart  ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}