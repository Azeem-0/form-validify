"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ButtonComponent = ({ type = 'button', onSubmit, label, disabled = false, style }) => {
    return ((0, jsx_runtime_1.jsx)("button", { type: type, style: style, onClick: onSubmit, disabled: disabled, className: `mt-4 p-2 rounded w-full ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white`, children: label }));
};
exports.default = ButtonComponent;
