
export const defaultValidation = (target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string | undefined => {
    const { type, name, value, required } = target;

    if (required && !value) {
        return `${name} is required.`;
    }

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value) && value !== '') {
        return 'Email is not valid.';
    }

    if (type === 'number') {
        const { minLength, maxLength } = target;
        if (minLength > Number.parseInt(value)) {
            return `${name} must be more than ${minLength}`;
        }
        else if (maxLength < Number.parseInt(value)) {
            return `${name} must be less than ${maxLength}`;
        }
    }


    if ((type == 'text' || type === 'password') && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {

        const { minLength, maxLength } = target;

        // Check for minLength and maxLength

        if (minLength && value.length < minLength && value !== '') {
            return `${name} must be at least ${minLength} chars.`;
        }
        else if (maxLength && value.length > maxLength && maxLength !== -1 && value !== '') {
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
