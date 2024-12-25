import { useDispatch, useSelector } from 'react-redux';
import { MAX_LENGTH_TITLE_CONST } from '../../constants/maxlength.title.constant';
import { addProductCartAction, AppDispatch, AppState, deleteProductCartAction } from '../../store/cart/cart.slice';

import Portal from '../Portal/Portal';
import { SButtonPortalClose, SContentPortal, SWrapperPortal } from '../Portal/Portal.styled.component';
import ShotTitle from '../title/ShotTitle';
import { SWrapper, SButtongrop, SImg, SPrice, STitle } from './Cart.styled.component';

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

    const countPrice = useSelector((state: AppState) => state.cartList.countPrice);

    if (!isOpen) return null;
    return (
        <Portal>
            <SWrapperPortal
                onClick={onClose}
                onKeyDown={e => {
                    if (e.key === 'Escape' || e.key === 'Enter') {
                        onClose();
                    }
                }}
                tabIndex={0} // Делает элемент фокусируемым
                role='button' // Добавляет семантику кнопки для screen readers
            >
                <SContentPortal
                    onClick={e => e.stopPropagation()}
                    onKeyDown={e => e.stopPropagation()}
                    tabIndex={0} // Делает элемент фокусируемым
                >
                    <SButtonPortalClose onClick={onClose}>×</SButtonPortalClose>
                    <h2>Cart</h2>
                    <div style={{ paddingBottom: 10, fontSize: 16 }}>{count} products in the shopping cart</div>
                    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                        {cartProducts.map(product => (
                            <SWrapper key={product.id}>
                                <SImg src={product.image} alt={product.title}></SImg>
                                <STitle>
                                    <ShotTitle title={product.title} maxLength={MAX_LENGTH_TITLE_CONST}></ShotTitle>
                                </STitle>
                                {/* <SDiv key={product.id}></SDiv> */}

                                <SButtongrop>
                                    {product.countItem}

                                    <button onClick={() => dispatch(addProductCartAction(product))}>+</button>
                                    <button onClick={() => dispatch(deleteProductCartAction(product.id!))}>-</button>
                                </SButtongrop>
                                {/* <SPrice>{product.price}</SPrice> */}
                                <SPrice>{product.countPriceItem}</SPrice>
                            </SWrapper>
                        ))}
                    </div>
                    <div style={{ paddingBottom: 10, fontSize: 14, fontWeight: 'bold' }}>total price {countPrice}</div>
                </SContentPortal>
            </SWrapperPortal>
        </Portal>
    );
};
export default Cart;
