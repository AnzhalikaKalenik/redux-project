import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';
import { AppDispatch, AppState, setProductsAction } from '../store/product/product.slice';

export function useProduct() {
    // const [products, setProducts] = useState<Array<ProductModel>>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // const state=useSelector(state=>state.);

    const dispatch: AppDispatch = useDispatch();
    // dispatch(setProductsAction(products));
    const products = useSelector((state: AppState) => state.productsList.products);
    // console.log(aaaaaaaaaaaaa);
    // console.log(products);

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
            //console.error('ERROR fetching products: ', error);
        } finally {
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
}

// const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

// export const selectProducts = (state: RootState) => selectProductState(state).products;
//
