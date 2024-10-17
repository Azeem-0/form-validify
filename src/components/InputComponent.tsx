import React from 'react';
import { useFormData } from '../context/FormValidify';

interface InputComponentProps {
    name: string;
    label: string;
    type: string;
    options?: { value: string; label: string }[];
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
    validate?: (value: string) => string | null;
}

const InputComponent: React.FC<InputComponentProps> = ({ name, label, type, placeholder = 'Enter your data', minLength = 0, maxLength, pattern = undefined, disabled = false, readOnly = false, autoFocus = false, style, options, validate }) => {
    const { handleChange, errors } = useFormData();

    return (
        <div className="mb-6 w-full">
            <label
                htmlFor={name}
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
                {label}
            </label>
            {type === 'checkbox' ? (
                <div className="flex items-center">
                    <input
                        style={style}
                        type={type}
                        name={name}
                        onChange={(e) => {
                            handleChange(e, validate);
                        }}
                        disabled={disabled}
                        readOnly={readOnly}
                        autoFocus={autoFocus}
                        aria-invalid={!!errors[name]}

                        className={`mr-2 leading-tight relative -z-10 ${errors[name] ? 'border-red-500' : 'border-gray-200'}`}
                    />

                    <span className="text-gray-700 text-sm">{label}</span>
                </div>
            ) : type === 'radio' ? (
                <div className="flex flex-col">
                    {options?.map((option) => (
                        <div key={option.value} className="flex items-center mb-2">
                            <input
                                style={style}
                                type={type}
                                name={name}
                                value={option.value}
                                onChange={(e) => {
                                    handleChange(e, validate);
                                }}
                                disabled={disabled}
                                readOnly={readOnly}
                                autoFocus={autoFocus}
                                aria-invalid={!!errors[name]}
                                className={`mr-2 relative -z-10 leading-tight ${errors[name] ? 'border-red-500' : 'border-gray-200'
                                    }`}
                            />
                            <span className="text-gray-700 text-sm">{option.label}</span>
                        </div>
                    ))}
                </div>
            )
                :
                (
                    <input
                        type={type}
                        name={name}
                        onChange={(e) => {
                            handleChange(e, validate);
                        }}
                        minLength={minLength}
                        maxLength={(maxLength && maxLength > 0) ? maxLength : undefined}
                        min={minLength}
                        max={maxLength}
                        pattern={pattern}
                        disabled={disabled}
                        readOnly={readOnly}
                        autoFocus={autoFocus}
                        style={style}
                        className={`appearance-none block w-full relative -z-10 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors[name] ? 'border-red-500' : 'border-gray-200'}`}
                        aria-invalid={!!errors[name]}
                        aria-describedby={`${name}-error`}
                        placeholder={placeholder}
                    />
                )}
            <span
                id={`${name}-error`}
                className={`text-red-500 text-xs italic transition-opacity text-center duration-300 ease-in-out ${errors[name] ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {errors[name] ? errors[name] : ' '}
            </span>

        </div>
    );
};

export default InputComponent;
