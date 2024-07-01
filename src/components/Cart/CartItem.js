import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import {cartItemsActions} from '../../store/cartItemsSlice'

const CartItem = (props) => {
  const { id, title, total, quantity, price } = props.item;

  const dispatch=useDispatch()

  const removeItemHandler=()=>{
    dispatch(cartItemsActions.removeItemFromCart(id))
  }

  const addItemHandler=()=>{
    dispatch(cartItemsActions.addItemToCart({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
