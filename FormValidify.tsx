import React, { createContext, useContext, useState, ReactNode } from 'react';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import { debounce } from './utilities/debouncing';
import { validateField } from './utilities/validate';
import SelectComponent from './components/SelectComponent';
import TextAreaComponent from './components/TextAreaComponent';


interface FormDataContextType {
    formValues: Record<string, string>;
    errors: Record<string, string | undefined>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
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

    const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name, value);

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));


        // Validate the field
        const error = validateField(e.target);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));

    }, 300);

    const handleSubmit = (callback: (values: typeof formValues) => void) => {
        callback(formValues);
    };

    return (
        <FormValidifyContext.Provider value={{ formValues, handleChange, handleSubmit, errors }}>
            {children}
        </FormValidifyContext.Provider>
    );
};
