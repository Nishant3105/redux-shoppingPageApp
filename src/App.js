import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData, fetchCartData } from './store/CartItem-Actions';
import Notification from './components/UI/Notification'
let isInitial = true

function App() {
  const showCart = useSelector(state => state.cart.showCart)
  const cartItems = useSelector(state => state.cartitems)
  const notification = useSelector(state => state.cart.uiNotification)

  const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, [dispatch])


  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    if(cartItems.changed){
      dispatch(sendCartData(cartItems))
    }
  }, [cartItems, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
