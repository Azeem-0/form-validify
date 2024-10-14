"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
