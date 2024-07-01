import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch()
  const cartVisibilityHandler=()=>{
    dispatch(cartActions.cartVisibility())
  }
  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
