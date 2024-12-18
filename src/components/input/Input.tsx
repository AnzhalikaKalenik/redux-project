const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, value, onChange }) => {
    return <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%' }}></input>;
};
export default Input;
