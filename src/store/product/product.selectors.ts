import { ProductModel } from '../../models/product.model';
import { ProductStateModel } from '../../models/state/product-state.model';

type RootState = {
    product: ProductStateModel;
};

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

//export const selectProducts = (state: RootState) => selectProductState(state).products;

export const selectProducts = (state: RootState): ProductModel[] => selectProductState(state).products;
