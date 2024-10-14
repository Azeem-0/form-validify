import React from 'react';
import { useFormData } from '../FormValidify'

interface InputComponentProps {
    name: string;
    label: string;
    type: string;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    pattern?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    error?: string;
    helpText?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
    style?: React.CSSProperties;
}

const InputComponent: React.FC<InputComponentProps> = ({ name, label, type, placeholder = 'Enter your data', minLength = 0, maxLength, pattern = undefined, disabled = false, readOnly = false, autoFocus = false, style }) => {
    const { handleChange, errors } = useFormData();

    return (
        <div className="mb-6 w-full">
            <label
                htmlFor={name}
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
                {label}
            </label>
            {type === 'checkbox' || type === 'radio' ? (
                <div className="flex items-center">
                    <input
                        style={style}
                        type={type}
                        name={name}
                        onChange={handleChange}
                        disabled={disabled}
                        readOnly={readOnly}
                        autoFocus={autoFocus}
                        aria-invalid={!!errors[name]}
                        className={`mr-2 leading-tight ${errors[name] ? 'border-red-500' : 'border-gray-200'}`}
                    />

                    <span className="text-gray-700 text-sm">{label}</span>
                </div>
            ) : (
                <input
                    type={type}
                    name={name}
                    onChange={handleChange}
                    minLength={minLength}
                    maxLength={(maxLength && maxLength > 0) ? maxLength : undefined}
                    pattern={pattern}
                    disabled={disabled}
                    readOnly={readOnly}
                    autoFocus={autoFocus}
                    style={style}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors[name] ? 'border-red-500' : 'border-gray-200'}`}
                    aria-invalid={!!errors[name]}
                    aria-describedby={`${name}-error`}
                    placeholder={placeholder}
                />
            )}

            {errors[name] && (
                <span id={`${name}-error`} className="text-red-500 text-xs italic">
                    {errors[name]}
                </span>
            )}
        </div>
    );
};

export default InputComponent;
