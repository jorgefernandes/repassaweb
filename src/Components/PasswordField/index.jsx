import React from 'react';
import { Field, ErrorMessage } from 'formik';

class PasswordField extends React.PureComponent {
    state = {
        showPassoword: false,
    }
    
    handleShowPassword = () => {
        this.setState({
            showPassoword: !this.state.showPassoword,
        })
    }

    render() {
        return (
            <div className="default-form__row">
                <label className="form-label">{this.props.label}</label>
                <div className="password-field">
                    <button onClick={this.handleShowPassword.bind(this)} type="button" className="password-field__show">
                        <i className="icon-eye-darker"></i>
                    </button>
                    <Field type={this.state.showPassoword ? 'text' : 'password'} name={this.props.name} class="default-input default-input--full" />
                </div>
                <ErrorMessage className="error-message" name={this.props.name} component="div" />
            </div>
        );
    }
}

PasswordField.defaultProps = {
    name: 'password',
}

export default PasswordField;

