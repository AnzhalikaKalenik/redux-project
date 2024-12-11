import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './product/product.slice';

export const store = configureStore({
    reducer: {
        productsList: productSlice.reducer,
    },
});
