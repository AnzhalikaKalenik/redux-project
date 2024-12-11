import { useProduct } from '../../../hooks/products.hook';
import ProductList from './product-list.component';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/product/product.selectors';
// import { selectProducts } from '../../../store/product/product.selectors';

//import { useEffect, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { fetchProductsApi } from '../../../services/product-api.service';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProduct();
    //const products: ProductModel[] = useSelector(selectProducts);
    const product = useSelector((state: any) => state?.products);

    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <ProductList products={products} />
        </>
    );
};

export default ProductListContainer;
