import { ReactNode } from 'react';
import { SModal, SModalContent } from './Modal.styled';

type ModalProp = {
    active: boolean;
    setActive: (active: boolean) => void;
    //children?: React.ReactNode;
    children?: ReactNode;
};

const Modal: React.FC<ModalProp> = ({ active, setActive, children }) => {
    return (
        <SModal active={active} onClick={() => setActive(false)}>
            <SModalContent active={active} onClick={e => e.stopPropagation()}>
                {children}
            </SModalContent>
        </SModal>
    );
};
export default Modal;
