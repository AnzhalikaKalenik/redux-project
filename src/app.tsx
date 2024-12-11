import ProductListContainer from './components/product/list/product-list.container';
import { selectProducts } from './store/product/product.selectors';
import { useSelector } from 'react-redux';

function App() {
    // const product = useSelector((state: any) => state?.products);
    //const products = useSelector(selectProducts);

    return <ProductListContainer />;
}

export default App;

// import React, { useEffect, useState } from 'react';
// import ProductCard from './components/product/card/product-card.component';
// import { ProductModel } from './models/product.model';

// function App() {
//     const [product, setProduct] = useState<ProductModel[]>([]);
//     function fetchProducts() {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => setProduct(json))
//             .catch(error => console.log('Error fetching products:', error));
//     }
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <ProductCard productListData={product} />
//         </div>
//     );
// }

// export default App;
