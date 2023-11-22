import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total_item: 0,
        quantity: 1,
        total_cost: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            const { id,cost } = action.payload;
            const existingProductIndex = state.cart.findIndex(item => item.id === id);
            if (existingProductIndex !== -1) {
                // Product with the same ID already exists in the cart
                state.cart[existingProductIndex].quantity += 1;
            } else {
                // Product with the given ID doesn't exist, add a new one
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.total_cost += cost;
            console.log('Updated Cart:', state.cart);


        },
        removeFromCart: (state, action) => {
            const { id,cost } = action.payload;
            const indexOfProductToRemove = state.cart.findIndex(item => item.id === id);

            if (indexOfProductToRemove !== -1) {
                // Remove only one instance of the product with the specified ID
                state.cart.splice(indexOfProductToRemove, 1);
            }
            state.total_cost -= cost;
            // Log the updated cart
            console.log('Updated Cart:', state.total_);
        }
    }
})
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;