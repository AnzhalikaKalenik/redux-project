const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ type }) => {
    return (
        <button style={{ cursor: 'pointer' }} type={type}>
            Добавить
        </button>
    );
};
export default Button;
