import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { MAX_LENGTH_CONST } from '../../../constants/maxlength.constant';
import { ProductModel } from '../../../models/product.model';
import { addProductCartAction, AppDispatch } from '../../../store/cart/cart.slice';
import { SWrapper, SCard, STitle, SImg, SPrice, SDescrip } from './product-card.styled.component';
import Description from '../Description';

type ProductCardProps = {
    product: ProductModel;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <SWrapper>
            <SCard key={product.id}>
                <STitle>{product.title}</STitle>
                <SImg src={product.image} alt={product.title}></SImg>
                <SPrice>{product.price}</SPrice>
                <SDescrip>
                    <Description text={product.description} maxLength={MAX_LENGTH_CONST} />
                </SDescrip>
                <button
                    style={{ display: 'flex', marginLeft: 5, marginBottom: 20 }}
                    onClick={() => console.log(dispatch(addProductCartAction(product)))}
                >
                    Add to cart
                </button>
            </SCard>
        </SWrapper>
    );
};

export default memo(ProductCard);
