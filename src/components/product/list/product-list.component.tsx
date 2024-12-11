import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../models/product.model';
import { selectProducts } from '../../../store/product/product.selectors';
import { useSelector } from 'react-redux';

type ProductListProp = {
    products: Array<ProductModel>;
};

const ProductList: React.FC<ProductListProp> = ({ products }) => {
    // const products = useSelector(selectProducts);
    //const product = useSelector((state: any) => state?.products);
    // console.log(products);

    return <div>{products && products.map(p => <ProductCard product={p} key={p.id} />)}</div>;
};
export default ProductList;
