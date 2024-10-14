
export const validateField = (target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string | undefined => {
    const { type, name, value, required } = target;

    if (required && !value) {
        return `${name} is required.`;
    }

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value) && value !== '') {
        return 'Email is not valid.';
    }

    if ((type == 'text' || type === 'password') && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {

        const { minLength, maxLength } = target;

        // Check for minLength
        if (minLength && value.length < minLength && value !== '') {
            return `${name} must be at least ${minLength} chars.`;
        }

        // Check for maxLength
        if (maxLength && value.length > maxLength && maxLength !== -1 && value !== '') {
            return `${name} must be at most ${maxLength} chars.`;
        }


        if (target instanceof HTMLInputElement) {
            const { pattern } = target;
            if (pattern) {
                const regex = new RegExp(pattern);
                if (!regex.test(value)) {
                    return `${name} does not match the required format. Expected: ${pattern}`;
                }
            }
        }
    }

    return undefined; // No error
};
