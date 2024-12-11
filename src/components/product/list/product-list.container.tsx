import { useProduct } from '../../../hooks/products.hook';
import ProductList from './product-list.component';
import { useSelector } from 'react-redux';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProduct();
    //const products = useSelector((state: any) => state?.productsList.products);

    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <ProductList products={products} />
        </>
    );
};

export default ProductListContainer;
