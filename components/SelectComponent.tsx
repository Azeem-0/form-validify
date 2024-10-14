import React from 'react';
import { useFormData } from '../FormValidify';

interface SelectComponentProps {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    style?: React.CSSProperties;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ name, label, options, error, style }) => {
    const { handleChange } = useFormData();

    return (
        <div className="mb-6 w-full">
            <label htmlFor={name} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <div className="relative">
                <select
                    style={style}
                    name={name}
                    onChange={handleChange}
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? 'border-red-500' : 'border-gray-200'}`}
                    aria-invalid={!!error}
                    aria-describedby={`${name}-error`}
                >
                    <option value="">Select an option</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
            {error && <span id={`${name}-error`} className="text-red-500 text-xs italic">{error}</span>}
        </div>
    );
};

export default SelectComponent;
