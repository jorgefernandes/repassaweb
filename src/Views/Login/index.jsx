import React from "react";
import LogoResenha from '../../Assets/Images/logo_resenha_app_HORIZONTAL@2x.png';
import PasswordField from '../../Components/PasswordField';
import { Link } from 'react-router-dom';
import validateLogin from './validation';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Login extends React.PureComponent {
	handleSubmit = (values, setSubmitting) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
			this.props.history.push('/counters');
		}, 400);
	}
	render() {
		console.log(this.props)
		return (
			<div className="access-view-wrapper">
				<div className="access-view-wrapper__wrapper access-view-wrapper__wrapper--flex">
					<div className="content-full">
						<h1 className="logo-resenha">
							<img src={LogoResenha} width="216" height="74" title="Resenha" alt="logo Resenha" />
						</h1>
						<Formik
							validate={values => validateLogin(values)}
							onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
						>
							<Form className="default-form default-form--space10">
								<div className="default-form__row">
									<label className="form-label">Email:</label>
									<Field type="email" name="email" className="default-input default-input--full" />
									<ErrorMessage className="error-message" name="email" component="div" />
								</div>
								<div className="default-form__row">
									<label className="form-label">Senha:</label>
									<PasswordField />
								</div>
								<div className="wrap-buttons wrap-buttons--spacebottom30">
									<Link className="link">
										<span>Esqueceu a senha?</span>
									</Link>
								</div>
								<div className="wrap-buttons">
									<button type="submit" className="default-button default-button--mariner">Entrar</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
				<div className="access-view-wrapper__wrapper">
					<div className="contain-image"></div>
				</div>
			</div>
		)
	}
}

export default Login;
