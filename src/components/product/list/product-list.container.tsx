import { useProduct } from '../../../hooks/products.hook';
import ProductCreationContainer from '../../ProductCreationContainer/ProductCreationContainer';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProduct();

    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <ProductList products={products} />
            <ProductCreationContainer></ProductCreationContainer>
        </>
    );
};

export default ProductListContainer;
