import { useState, useRef } from 'react';
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
    const [valueImg, setValueImg] = useState<File | null>(null);
    const [valuePrice, setValuePrice] = useState('');
    const [valueDescription, setValueDescription] = useState('');
    const [error, setError] = useState('');

    const dispatch: AppDispatch = useDispatch();

    // Реф для input type='file'
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addNewProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (valueTitle.trim().length === 0) {
            setError('Введите название продукта');
            return;
        }
        if (valuePrice.trim().length === 0 || isNaN(parseFloat(valuePrice))) {
            setError('Введите корректную стоимость продукта');
            return;
        }
        if (valueDescription.trim().length === 0) {
            setError('Введите описание продукта');
            return;
        }
        const imageUrl = valueImg
            ? URL.createObjectURL(valueImg) // создание URL для локального файла
            : 'https://i.pravatar.cc'; // ссылка на сгенерированное изображение
        try {
            const newProduct = {
                id: Date.now(),
                title: valueTitle,
                price: parseFloat(valuePrice),
                description: valueDescription,
                image: imageUrl,
                category: 'electronic',
                createdByUser: true,
            };

            await createProductApi(newProduct);
            dispatch(addProductAction(newProduct));
            setValueTitle('');
            setValuePrice('');
            setValueImg(null);
            setValueDescription('');
            setActive(false);
        } catch (err) {
            console.error('Ошибка при создании продукта:', err);
            setError('Произошла ошибка при добавлении продукта');
        }
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(e.target.value);
        setError('');
    };
    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Получаем первый файл из списка
        if (file) {
            setValueImg(file);
        }
        setError('');
    };
    // Функция для клика по кастомной кнопке
    // const handleFileButtonClick = () => {
    //     if (fileInputRef.current) {
    //         fileInputRef.current.click(); // Открыть диалог выбора файла
    //     }
    // };
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValuePrice(e.target.value);
        setError('');
    };
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueDescription(e.target.value);
        setError('');
    };

    return (
        <form onSubmit={addNewProduct}>
            <Input value={valueTitle} onChange={handleChangeTitle} placeholder='Введите название продукта*'></Input>

            {/* Кастомная кнопка для открытия диалога выбора файла */}
            {/* <div style={{ marginBottom: '10px' }}> */}
            {/* <button
                    type='button'
                    onClick={handleFileButtonClick}
                    style={{
                        padding: '5px 10px',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                    }}
                >
                    Выберите изображение
                </button> */}
            <Input
                // onClick={handleFileButtonClick}
                ref={fileInputRef}
                id='product-image'
                type='file'
                accept='image/*'
                onChange={handleChangeImg}
                //placeholder='Добавьте изображение продукта'
                style={{ display: 'none' }} // Скрываем стандартный input
            ></Input>
            {/* </div> */}
            <Input value={valuePrice} onChange={handleChangePrice} placeholder='Введите стоимость продукта*'></Input>
            <Input
                value={valueDescription}
                onChange={handleChangeDescription}
                placeholder='Введите описание продукта*'
            ></Input>
            {error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}
            <div style={{ fontSize: 10, paddingTop: 5, color: ' grey' }}>
                поля помеченные * являются обязательными к заполнению
            </div>

            <Button type='submit'></Button>
        </form>
    );
};
export default ProductCreationForm;
