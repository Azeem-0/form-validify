"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FormValidify_1 = require("../FormValidify");
const SelectComponent = ({ name, label, options, error, style }) => {
    const { handleChange } = (0, FormValidify_1.useFormData)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-6 w-fit", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: name, className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2", children: label }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsxs)("select", { style: style, name: name, onChange: handleChange, className: `appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 pr-20 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? 'border-red-500' : 'border-gray-200'}`, "aria-invalid": !!error, "aria-describedby": `${name}-error`, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select an option" }), options.map(option => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, option.value)))] }), (0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700", children: (0, jsx_runtime_1.jsx)("svg", { className: "fill-current h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: (0, jsx_runtime_1.jsx)("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" }) }) })] }), error && (0, jsx_runtime_1.jsx)("span", { id: `${name}-error`, className: "text-red-500 text-xs italic", children: error })] }));
};
exports.default = SelectComponent;
