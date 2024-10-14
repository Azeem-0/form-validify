import React from 'react';
import { useFormData } from '../FormValidify';

interface ButtonComponentProps {
    type?: 'button' | 'submit' | 'reset';
    onSubmit: (values: any) => void;
    label: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type = 'button', onSubmit, label, disabled = false, style }) => {

    const { handleSubmit } = useFormData();

    const handleClick = () => {
        handleSubmit(onSubmit);
    }

    return (
        <button
            type={type}
            style={style}
            onClick={handleClick}
            disabled={disabled}
            className={`mt-4 p-2 rounded w-full ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
        >
            {label}
        </button>
    );
};

export default ButtonComponent;
