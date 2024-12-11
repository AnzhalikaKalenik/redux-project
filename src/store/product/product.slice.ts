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
    },
});

export const { setProductsAction } = productSlice.actions;
// export default productSlice.reducer;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
