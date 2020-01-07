import React from 'react';
import MaskedInput from 'react-text-mask';

const FormField = ({
    field,
    form: { touched, errors },
    label,
    mask,
    ...props,
}) => {
    return (
        <div className="default-form__row">
            <label className="form-label">{label}</label>
            {!mask && <input type="text" className="default-input default-input--full"  {...field} {...props} />}
            {mask && <MaskedInput type="text" mask={mask} {...field} {...props} className="default-input default-input--full" />}
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );
}

FormField.defaultProps = { 
    mask: undefined,    
}


export default FormField;