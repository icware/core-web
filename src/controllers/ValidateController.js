

export function validField (value) {
    if (!value) {
        throw new Error('Campo obrigatório!');
    }
    return true;
}

export function compareField(first, last) {
    if (first != last) {
        throw new Error('Os campos não confere');
    }
    return true;
}

export function validEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
        throw new Error('não é um endereço de e-mail válido.');
    }
    return true;
}