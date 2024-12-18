import { SButton } from './CreateButton.styled';
type CreateButtonProp = {
    onClick: () => void;
};

const CreateButton: React.FC<CreateButtonProp> = ({ onClick }) => {
    return <SButton onClick={onClick}>+</SButton>;
};
export default CreateButton;
