import React, { createContext, useContext, useState, ReactNode } from 'react';
import { debounce } from '../utilities/debouncing';
import { defaultValidation } from '../utilities/validate';


interface FormDataContextType {
    formValues: Record<string, string>;
    errors: Record<string, string | undefined>;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>,
        validate?: (value: string) => string | null // Optional validation function
    ) => void;
    handleSubmit: (callback: (values: Record<string, string>) => void) => void;
}

export const FormValidifyContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormData = () => {
    const context = useContext(FormValidifyContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormValidifyProvider');
    }
    return context;
};

interface FormValidifyProps {
    children: ReactNode;
}

export const FormValidify: React.FC<FormValidifyProps> = ({ children }) => {

    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    //using debouncing for efficient updates of the formvalues.

    const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>, validate?: (value: string) => string | null) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));


        // Validate the field

        const error = validate ? validate(value) : defaultValidation(e.target);


        setErrors((prevErrors) => {
            // Create a new object with all previous errors
            const updatedErrors = {
                ...prevErrors,
                [name]: error ?? undefined,
            };

            // Remove attributes with undefined values
            return Object.fromEntries(
                Object.entries(updatedErrors).filter(([_, value]) => value !== undefined)
            );
        });
    }, 300);


    const handleSubmit = (callback: (values: typeof formValues) => void) => {
        callback(formValues);
    };

    return (
        <FormValidifyContext.Provider value={{ formValues, handleChange, handleSubmit, errors }}>
            <div className='flex flex-col items-center justify-center w-full p-20'>
                {children}
            </div>
        </FormValidifyContext.Provider>
    );
};
