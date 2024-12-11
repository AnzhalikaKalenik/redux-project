import axios from 'axios';
import { ProductModel } from '../models/product.model';
import { PRODUCTS_URL } from '../constants/api.constans';
import { useDispatch } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';

export async function fetchProductsApi(): Promise<ProductModel[]> {
    // const dispatch = useDispatch();

    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
        // dispatch(setProductsAction(response.data));
        return response.data;
        //dispatch(setProductsAction(response.data));
    } catch (error) {
        console.error('ERROR fetching products: ', error);
        throw error;
    }
}
//
