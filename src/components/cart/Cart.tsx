import { useDispatch, useSelector } from 'react-redux';
import { addProductCartAction, AppDispatch, AppState, deleteProductCartAction } from '../../store/cart/cart.slice';

import Portal from '../Portal/Portal';
import { SWrapper, SDiv, SButtongrop, SImg, SPrice } from './Cart.styled.component';

type CartProp = {
    isOpen: boolean;
    onClose: () => void;
    //children?: ReactNode;
};

const Cart: React.FC<CartProp> = ({ isOpen, onClose }) => {
    const dispatch: AppDispatch = useDispatch();

    const cartProducts = useSelector((state: AppState) => state.cartList.cart);
    // const countItem = useSelector((state: AppState) => state.cartList.cart.countItem);
    const selectCartItemCount = (state: AppState) => state.cartList.count;
    const count = useSelector(selectCartItemCount);

    if (!isOpen) return null;
    return (
        <Portal>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={onClose}
                onKeyDown={e => {
                    if (e.key === 'Escape' || e.key === 'Enter') {
                        onClose();
                    }
                }}
                tabIndex={0} // Делает элемент фокусируемым
                role='button' // Добавляет семантику кнопки для screen readers
            >
                <button
                    style={{
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                        fontSize: 20,
                        border: '1px solid white',
                        borderRadius: 12,
                        backgroundColor: ' white',
                        // width: '50vw',
                        minWidth: '450px',
                        position: 'relative',
                        boxShadow: '2px 2px 8px 1px pink',
                        paddingBottom: '20px',
                    }}
                    onClick={e => e.stopPropagation()}
                    onKeyDown={e => e.stopPropagation()}
                    tabIndex={0} // Делает элемент фокусируемым
                >
                    <button
                        style={{
                            position: 'absolute',
                            top: 25,
                            right: 20,
                            cursor: 'pointer',
                            border: '1px solid white',
                            backgroundColor: 'white',
                            fontSize: 30,
                        }}
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <h2>Cart</h2>
                    <div style={{ paddingBottom: 10, fontSize: 16 }}>{count} products in the shopping cart</div>
                    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                        {cartProducts.map(product => (
                            <SWrapper>
                                <SDiv key={product.id}>
                                    <SImg src={product.image} alt={product.title}></SImg>

                                    {/* <STitle>{product.title}</STitle> */}
                                    <SPrice>{product.price}</SPrice>
                                </SDiv>

                                <SButtongrop>
                                    {product.countItem}
                                    <button onClick={() => dispatch(addProductCartAction(product))}>+</button>
                                    <button onClick={() => dispatch(deleteProductCartAction(product.id!))}>-</button>
                                </SButtongrop>
                            </SWrapper>
                        ))}
                    </div>
                </button>
            </div>
        </Portal>
    );
};
export default Cart;
