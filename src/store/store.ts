import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart/cart.slice';
import { productSlice } from './product/product.slice';

export const store = configureStore({
    reducer: {
        productsList: productSlice.reducer,
        cartList: cartSlice.reducer,
    },
});
