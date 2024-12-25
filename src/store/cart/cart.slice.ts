import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';
import { store } from '../store';

export interface CartItem extends ProductModel {
    countItem: number; // Добавляем поле количества товара
    countPriceItem: number;
}

const initialState = {
    cart: [] as CartItem[],
    count: 0,
    countPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addProductCartAction: (state, action: PayloadAction<ProductModel>) => {
            const productIndex = state.cart.findIndex(product => product.id === action.payload.id);
            //const productPrice = state.cart.find(p => p.price === action.payload.price);

            if (productIndex !== -1) {
                state.cart[productIndex].countItem += 1;
                state.cart[productIndex].countPriceItem =
                    Math.round((state.cart[productIndex].countPriceItem + state.cart[productIndex].price) * 100) / 100;
            } else {
                state.cart.push({ ...action.payload, countItem: 1, countPriceItem: action.payload.price });
            }
            state.count += 1;
            //state.countPrice += action.payload.price;
            //state.countPrice = parseFloat((state.countPrice + action.payload.price).toFixed(2));
            state.countPrice = Math.round((state.countPrice + action.payload.price) * 100) / 100; // Округляем общую сумму
        },
        deleteProductCartAction: (state, action: PayloadAction<number>) => {
            const productIndex = state.cart.findIndex(product => product.id === action.payload);

            if (productIndex !== -1) {
                //const existingProduct = state.cart[productIndex];
                if (state.cart[productIndex].countItem > 1) {
                    state.cart[productIndex].countItem -= 1;
                    state.cart[productIndex].countPriceItem =
                        Math.round((state.cart[productIndex].countPriceItem - state.cart[productIndex].price) * 100) /
                        100;
                    state.count -= 1;
                    state.countPrice = Math.round((state.countPrice - state.cart[productIndex].price) * 100) / 100;
                } else {
                    state.count -= state.cart[productIndex].countItem;
                    // state.countPrice -= state.cart[productIndex].countPriceItem;
                    state.countPrice =
                        Math.round((state.countPrice - state.cart[productIndex].countPriceItem) * 100) / 100;

                    state.cart.splice(productIndex, 1); // Удаляем только первый найденный товар
                }
            }
        },
    },
});

export const { addProductCartAction, deleteProductCartAction } = cartSlice.actions;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
