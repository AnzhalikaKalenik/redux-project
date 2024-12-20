//import { useDispatch } from 'react-redux';
import { useProduct } from '../../../hooks/products.hook';
// import { addProductCartAction } from '../../../store/cart/cart.slice';
import CartCreationContainer from '../../CartCreationContainer/CartCreationContainer';
import ProductCreationContainer from '../../ProductCreationContainer/ProductCreationContainer';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProduct();
    // const dispatch = useDispatch();
    // dispatch(addProductCartAction(products.product));

    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <ProductList products={products} />
            <ProductCreationContainer></ProductCreationContainer>
            <CartCreationContainer></CartCreationContainer>
        </>
    );
};

export default ProductListContainer;
