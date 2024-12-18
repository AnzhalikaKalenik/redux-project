import { useState } from 'react';
import CreateButton from '../createbutton/CreateButton';
import Modal from '../modal/Modal';
import '../../assets/icons/close.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import styled from 'styled-components';
import ProductCreationForm from '../ProductCreationForm/ProductCreationForm';

const Sheader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const ProductCreationContainer: React.FC = () => {
    const [modalActive, setModalActive] = useState(false);

    // const modalClose = () => {
    //     setModalActive(modalActive => !modalActive);
    // };

    return (
        <>
            <CreateButton onClick={() => setModalActive(true)} />

            <Modal active={modalActive} setActive={setModalActive}>
                <Sheader>
                    Новый продукт:
                    <CloseIcon style={{ cursor: 'pointer' }} onClick={() => setModalActive(false)} />
                </Sheader>
                <ProductCreationForm setActive={setModalActive}></ProductCreationForm>
            </Modal>
        </>
    );
};
export default ProductCreationContainer;
