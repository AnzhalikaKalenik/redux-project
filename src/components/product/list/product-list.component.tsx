import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../models/product.model';

type ProductListProp = {
    products: Array<ProductModel>;
};

const ProductList: React.FC<ProductListProp> = ({ products }) => {
    return <div>{products && products.map(p => <ProductCard product={p} key={p.id} />)}</div>;
};
export default ProductList;
