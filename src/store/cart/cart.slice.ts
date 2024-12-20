import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';
import { store } from '../store';

export interface CartItem extends ProductModel {
    countItem: number; // Добавляем поле количества товара
}

const initialState = {
    cart: [] as CartItem[],
    count: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addProductCartAction: (state, action: PayloadAction<ProductModel>) => {
            const productIndex = state.cart.findIndex(product => product.id === action.payload.id);

            if (productIndex !== -1) {
                state.cart[productIndex].countItem += 1;
            } else {
                state.cart.push({ ...action.payload, countItem: 1 });
            }
            state.count += 1;
        },
        deleteProductCartAction: (state, action: PayloadAction<number>) => {
            const productIndex = state.cart.findIndex(product => product.id === action.payload);

            if (productIndex !== -1) {
                if (state.cart[productIndex].countItem > 1) {
                    state.cart[productIndex].countItem -= 1;
                    state.count -= 1;
                } else {
                    state.count -= state.cart[productIndex].countItem;
                    state.cart.splice(productIndex, 1); // Удаляем только первый найденный товар
                }
            }
        },
    },
});

export const { addProductCartAction, deleteProductCartAction } = cartSlice.actions;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
