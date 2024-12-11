import React, { memo } from 'react';
import { MAX_LENGTH_CONST } from '../../../constants/maxlength.constant';
import { ProductModel } from '../../../models/product.model';
import { SWrapper, SCard, STitle, SImg, SPrice, SDescrip } from '../card/product-card.styled.component';
import Description from '../Description';

type ProductCardProps = {
    product: ProductModel;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <SWrapper>
            <SCard key={product.id}>
                <STitle>{product.title}</STitle>
                <SImg src={product.image} alt={product.title}></SImg>
                <SPrice>{product.price}</SPrice>
                <SDescrip>
                    <Description text={product.description} maxLength={MAX_LENGTH_CONST} />
                </SDescrip>
            </SCard>
        </SWrapper>
    );
};

export default memo(ProductCard);
