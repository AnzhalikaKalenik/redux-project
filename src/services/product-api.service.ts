import axios from 'axios';
import { ProductModel } from '../models/product.model';
import { PRODUCTS_URL } from '../constants/api.constant';

export async function fetchProductsApi(): Promise<ProductModel[]> {
    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Убедитесь, что все заголовки корректны
            },
        });
        return response.data;
    } catch (error) {
        console.error('ERROR fetching products: ', error);
        throw error;
    }
}

export async function createProductApi(product: Partial<ProductModel>): Promise<ProductModel> {
    try {
        const response = await axios.post<ProductModel>(PRODUCTS_URL, product, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('ERROR creating products: ', error);
        throw error;
    }
}
