import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch()
  const cartQuantity=useSelector(state=>state.cartitems.totalQuantity)

  const cartVisibilityHandler=()=>{
    dispatch(cartActions.cartVisibility())
  }
  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
