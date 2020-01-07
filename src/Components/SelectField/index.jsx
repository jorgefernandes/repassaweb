import React from 'react';
import MaskedInput from 'react-text-mask';

const SelectField = ({
    field,
    form: { touched, errors },
    label,
    children,
    ...props,
}) => {
    return (
        <div className="default-form__row">
            <>
                <label className="form-label">{label}</label>
                <select type="text" {...field} {...props} className="search-filter__select search-filter__select--large search-filter__select--full">
                    {children}
                </select>
            </>
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );
}

export default SelectField;