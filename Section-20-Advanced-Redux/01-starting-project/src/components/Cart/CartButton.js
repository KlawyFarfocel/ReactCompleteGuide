import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux'
import { cartActions } from '../../store/shoppingCartSlice';
const CartButton = (props) => {
  const dispatch=useDispatch()
  function handleOpenCart(){
    dispatch(cartActions.toggleCart())
  }
  const items=useSelector(state=>state.cart.items);
  const itemCounter=items.reduce((totalValue,item)=>{return totalValue+item.quantity},0)
  return (
    <button onClick={handleOpenCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCounter}</span>
    </button>
  );
};

export default CartButton;
