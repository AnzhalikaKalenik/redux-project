import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductApi } from '../../services/product-api.service';
import { addProductAction, AppDispatch } from '../../store/product/product.slice';
import Button from '../button/Button';
import Input from '../input/Input';

type ProductCreationFormProp = {
    setActive: (active: boolean) => void;
};
const ProductCreationForm: React.FC<ProductCreationFormProp> = ({ setActive }) => {
    const [valueTitle, setValueTitle] = useState('');
    const [valueDescription, setValueDescription] = useState('');
    const [error, setError] = useState('');

    const dispatch: AppDispatch = useDispatch();

    const addNewProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (valueTitle.trim().length === 0) {
            setError('Введите название продукта');
            return;
        }
        if (valueDescription.trim().length === 0) {
            setError('Введите описание продукта');
            return;
        }
        try {
            const newProduct = {
                id: Date.now(),
                title: valueTitle,
                price: 13.5,
                description: valueDescription,
                image: 'https://i.pravatar.cc',
                category: 'electronic',
            };

            await createProductApi(newProduct);
            dispatch(addProductAction(newProduct));

            setValueTitle('');
            setValueDescription('');
            setActive(false);
        } catch {}
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(e.target.value);
        setError('');
    };
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueDescription(e.target.value);
        setError('');
    };

    return (
        <form onSubmit={addNewProduct}>
            <Input value={valueTitle} onChange={handleChangeTitle} placeholder='Введите название продукта'></Input>

            <Input
                value={valueDescription}
                onChange={handleChangeDescription}
                placeholder='Введите описание продукта'
            ></Input>
            {error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}

            <Button type='submit'></Button>
        </form>
    );
};
export default ProductCreationForm;
