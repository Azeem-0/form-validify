import React from 'react';
import { useFormData } from '../context/FormValidify';

interface ButtonComponentProps {
    type?: 'button' | 'submit' | 'reset';
    onSubmit: (values: any) => void;
    label: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type = 'button', onSubmit, label, disabled = false, style }) => {

    const { handleSubmit, errors } = useFormData();

    const handleClick = () => {
        handleSubmit(onSubmit);
    }

    return (
        <>
            <button
                type={type}
                style={style}
                onClick={handleClick}
                disabled={disabled || ((Object.keys(errors).length > 0) ? true : false)}
                className={`mt-4 p-2 rounded w-full ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
            >
                {label}
            </button >
            <span
                id={`error`}
                className={`text-red-500 mt-2 text-xs italic text-center transition-opacity duration-300 ease-in-out ${Object.keys(errors).length > 0 ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {Object.keys(errors).length > 0 ? "Please resolve the errors above to submit the form." : ' '}
            </span>
        </>
    );
};

export default ButtonComponent;
