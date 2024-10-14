import React from 'react';
import { useFormData } from '../FormValidify';

interface TextAreaComponentProps {
    name: string;
    label: string;
    error?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    helpText?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
    style?: React.CSSProperties;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
    name,
    label,
    error,
    placeholder = "Write your text here...",
    rows = 10,
    cols = 22,
    disabled = false,
    autoComplete,
    autoFocus = false,
    ariaLabel,
    ariaDescribedby,
    style
}) => {
    const { handleChange } = useFormData();

    return (
        <div className="mb-4 w-full">
            <label htmlFor={name} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label>
            <div className="mt-1">
                <textarea
                    name={name}
                    onChange={handleChange}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? 'border-red-500' : 'border-gray-200'}`}
                    aria-invalid={!!error}
                    aria-describedby={ariaDescribedby || `${name}-error`}
                    rows={rows}
                    cols={cols}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    aria-label={ariaLabel}
                    style={style}
                />
            </div>
            <span
                id={`${name}-error`}
                className={`text-red-500 text-xs italic transition-all duration-300 ease-in-out transform ${error ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0'
                    }`}
            >
                {error ? error : ' '}
            </span>

        </div>
    );
};

export default TextAreaComponent;
