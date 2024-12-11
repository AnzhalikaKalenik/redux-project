import axios from 'axios';
import { ProductModel } from '../models/product.model';
import { PRODUCTS_URL } from '../constants/api.constant';

export async function fetchProductsApi(): Promise<ProductModel[]> {
    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
        return response.data;
    } catch (error) {
        console.error('ERROR fetching products: ', error);
        throw error;
    }
}
