import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';
import { store } from '../store';

const initialState = {
    products: [] as ProductModel[],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        addProductAction: (state, action: PayloadAction<ProductModel>) => {
            state.products.unshift(action.payload);
        },
        deleteProductAction: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(p => p.id !== action.payload);
        },
    },
});

export const { setProductsAction, addProductAction, deleteProductAction } = productSlice.actions;
// export default productSlice.reducer;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
