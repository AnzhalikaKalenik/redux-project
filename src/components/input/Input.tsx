import React from 'react';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ placeholder, value, onChange, ...props }, ref) => {
        return (
            <input
                ref={ref}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
                style={{ width: '100%' }}
            ></input>
        );
    }
);
export default Input;
