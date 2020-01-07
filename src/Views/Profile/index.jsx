import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../Common/MainLayout';
import Modal from '../../Components/Modal';
import validateProfile from './validation';
import LogoImageUpload from '../../Components/LogoImageUpload';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PasswordField from '../../Components/PasswordField';
import FormField from '../../Components/FormField';

class Profile extends React.PureComponent {
    state = {
        isModalDeleteOpen: false,
        isSaveDeleteOpen: false,
        imageUrl: null,
    }

    toggleModalDelete = (value) => {
        this.setState({ isModalDeleteOpen: value });
    }

    toggleModalSave = (value) => {
        this.setState({ isSaveDeleteOpen: value });
    }

    handleSubmit = (values, setSubmitting) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            this.toggleModalSave(true);
        }, 400);
    }


    render() {
        return (
            <>
                <Modal
                    isOpen={this.state.isModalDeleteOpen}
                >
                    <div className="modal-content">
                        <i className="modal-content__icon icon-modal-delete"></i>
                        <div className="modal-content__message">Deseja mesmo excluir esse laboratório?</div>
                        <div className="modal-content__action">
                            <button class="default-button default-button--mariner default-button--modal-default">Salvar</button>
                            <button class="default-button default-button--modal-mariner-transparent default-button--modal-default" onClick={this.toggleModalDelete.bind(this, false)}>Não</button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.isSaveDeleteOpen}
                >
                    <div className="modal-content">
                        <i className="modal-content__icon icon-modal-alert"></i>
                        <div className="modal-content__message">Laboratório excluído com sucesso!</div>
                        <div className="modal-content__action">
                            <button class="default-button default-button--modal-grey-transparent default-button--modal-default" onClick={this.toggleModalSave.bind(this, false)}>Voltar</button>
                        </div>
                    </div>
                </Modal>
                <MainLayout>
                    <Formik
                        validate={values => validateProfile(values)}
                        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                    >
                        <Form>
                            <div className="main-layout__actions-layout main-layout__actions-layout--align-center">
                                <div className="main-layout__top-content">
                                    <div className="breadcrumb">
                                        <h2 className="breadcrumb__title">Perfil</h2>
                                    </div>
                                </div>
                                <div class="right-space">
                                    <button type="submit" class="default-button default-button--shamrock default-button--thinner">Salvar</button>
                                </div>
                            </div>

                            <div className="half-layout">
                                <div className="half-layout__left">
                                    <div className="upload-field">
                                        <LogoImageUpload />
                                    </div>

                                    <h4 class="main-layout__title">Dados Pessoais</h4>

                                    <Field name="name" label={'Nome:'} component={FormField} />
                                    <Field name="name" label={'Nome:'} component={FormField} />
                                    <Field name="email" type="email" label={'Email:'} component={FormField} />
                                    <Field name="contact" label={'Contato:'} component={FormField} />
                                    <Field name="state" label={'Estado:'} component={FormField} />
                                    <Field name="city" label={'Cidade:'} component={FormField} />

                                    <h4 class="main-layout__title">Senha</h4>

                                    <PasswordField label={'Criar senha:'} name="create_password" />
                                    <PasswordField label={'Confirmar nova senha:'} name="confirm_password" />

                                    <div className="wrap-buttons--center">
                                        <button className="default-button default-button--fluid default-button--thinner default-button--mariner">Confirmar senha</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </MainLayout>
            </>
        )
    }
}

Profile.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Profile;