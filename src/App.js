import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './store/cartSlice';
import Notification from './components/UI/Notification'
let isInitial = true

function App() {
  const showCart = useSelector(state => state.cart.showCart)
  const cartItems = useSelector(state => state.cartitems)
  const notification = useSelector(state => state.cart.uiNotification)

  const dispatch = useDispatch()


  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://expensetracker-372e7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    });


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
