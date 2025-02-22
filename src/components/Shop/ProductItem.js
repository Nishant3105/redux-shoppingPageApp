import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartItemsActions } from '../../store/cartItemsSlice';

const ProductItem = (props) => {
  const dispatch=useDispatch()
  
  const { id, title, price, description } = props;

  const addToCartHandler=()=>{
    dispatch(
      cartItemsActions.addItemToCart({id, title, price, description}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
