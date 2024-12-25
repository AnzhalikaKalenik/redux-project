import { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

// import { addProductCartAction } from '../../store/cart/cart.slice';
import Cart from '../cart/Cart';

export const SButton = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    top: 40px;
    right: 50px;
    cursor: pointer;
    @media (max-width: 1000px) {
        width: 40px;
        height: 40px;
        right: 30px;
    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        right: 10px;
    }
`;

const CartCreationContainer = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    // const dispatch = useDispatch();

    const toggleCart = () => setCartOpen(!isCartOpen);
    // dispatch(addProductCartAction(fetchedProducts));
    return (
        <>
            <SButton onClick={toggleCart}>
                <FaShoppingCart style={{ width: 30, height: 30 }} />
            </SButton>

            <Cart isOpen={isCartOpen} onClose={toggleCart}></Cart>

            {/* <div id='portal'></div> */}
        </>
    );
};
export default CartCreationContainer;
