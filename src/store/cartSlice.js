import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, uiNotification: null }
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartVisibility(state) {
            state.showCart = !state.showCart
        },
        showNotification(state, action) {
            state.uiNotification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer