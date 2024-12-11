import React, { memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SWrapper, SCard, STitle, SImg, SPrice, SDescrip } from '../card/product-card.styled.component';

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
                <SDescrip>{product.description}</SDescrip>
            </SCard>
        </SWrapper>
    );
};

export default memo(ProductCard);
