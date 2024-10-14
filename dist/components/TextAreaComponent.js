"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FormValidify_1 = require("../FormValidify");
const TextAreaComponent = ({ name, label, error, placeholder = "Write your text here...", rows = 10, cols = 22, disabled = false, autoComplete, autoFocus = false, ariaLabel, ariaDescribedby, style }) => {
    const { handleChange } = (0, FormValidify_1.useFormData)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-4 w-fit", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2", children: label }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1", children: (0, jsx_runtime_1.jsx)("textarea", { name: name, onChange: handleChange, className: `appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? 'border-red-500' : 'border-gray-200'}`, "aria-invalid": !!error, "aria-describedby": ariaDescribedby || `${name}-error`, rows: rows, cols: cols, placeholder: placeholder, disabled: disabled, autoComplete: autoComplete, autoFocus: autoFocus, "aria-label": ariaLabel, style: style }) }), error && (0, jsx_runtime_1.jsx)("span", { id: `${name}-error`, className: "text-red-500 text-xs italic", children: error })] }));
};
exports.default = TextAreaComponent;
