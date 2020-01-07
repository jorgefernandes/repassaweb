function validateLab(values) {
    const errors = {}

    if (!values.lab_name) {
        errors.lab_name = 'O nome não está preenchido';
    }

    return errors;
}

export default validateLab;