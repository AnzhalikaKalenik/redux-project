import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { AppDispatch, AppState, setProductsAction } from '../store/product/product.slice';

export function useProduct() {
    // const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: AppState) => state.productsList.products);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const fetchedProducts = await fetchProductsApi();

            // setProducts(fetchedProducts);
            dispatch(setProductsAction(fetchedProducts));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(`Something went wrong! Error: ${error}`);
        } finally {
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
}
