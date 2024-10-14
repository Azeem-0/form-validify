"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidify = exports.useFormData = exports.FormValidifyContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ButtonCompnent_1 = __importDefault(require("./components/ButtonCompnent"));
const InputComponent_1 = __importDefault(require("./components/InputComponent"));
const debouncing_1 = require("./utilities/debouncing");
const validate_1 = require("./utilities/validate");
const SelectComponent_1 = __importDefault(require("./components/SelectComponent"));
const TextAreaComponent_1 = __importDefault(require("./components/TextAreaComponent"));
exports.FormValidifyContext = (0, react_1.createContext)(undefined);
const useFormData = () => {
    const context = (0, react_1.useContext)(exports.FormValidifyContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormValidifyProvider');
    }
    return context;
};
exports.useFormData = useFormData;
const FormValidify = () => {
    const [formValues, setFormValues] = (0, react_1.useState)({});
    const [errors, setErrors] = (0, react_1.useState)({});
    //using debouncing for efficient updates of the formvalues.
    const handleChange = (0, debouncing_1.debounce)((e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [name]: value })));
        // Validate the field
        const error = (0, validate_1.validateField)(e.target);
        setErrors((prevErrors) => (Object.assign(Object.assign({}, prevErrors), { [name]: error })));
    }, 300);
    const handleSubmit = () => {
        console.log('Form submitted with values:', formValues);
    };
    return ((0, jsx_runtime_1.jsxs)(exports.FormValidifyContext.Provider, { value: { handleChange, handleSubmit, errors }, children: [(0, jsx_runtime_1.jsx)(InputComponent_1.default, { name: "username", label: "Username", type: "text", placeholder: "Enter your username", minLength: 6 }), (0, jsx_runtime_1.jsx)(InputComponent_1.default, { name: "email", label: "Email", type: "email", placeholder: "Enter your email" }), (0, jsx_runtime_1.jsx)(InputComponent_1.default, { name: "password", label: "Password", type: "password", placeholder: "Enter your password" }), (0, jsx_runtime_1.jsx)(SelectComponent_1.default, { name: "gender", label: "Gender", options: [
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                ] }), (0, jsx_runtime_1.jsx)(TextAreaComponent_1.default, { name: "bio", label: "Bio", placeholder: "Tell us about yourself" }), (0, jsx_runtime_1.jsx)(ButtonCompnent_1.default, { type: "submit", label: "Submit", onSubmit: handleSubmit })] }));
};
exports.FormValidify = FormValidify;
