import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../models/product.model';
import { SWrapper } from './product-list.styled.component';

type ProductListProp = {
    products: Array<ProductModel>;
    // createdByUser: boolean;
    // createdByUserTrue: () => void;
};

const ProductList: React.FC<ProductListProp> = ({ products }) => {
    return <SWrapper>{products && products.map(p => <ProductCard product={p} key={p.id} />)}</SWrapper>;
};
export default ProductList;
