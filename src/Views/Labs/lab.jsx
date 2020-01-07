import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MainLayout from '../../Common/MainLayout';
import Modal from '../../Components/Modal';
import PasswordField from '../../Components/PasswordField';
import LogoImageUpload from '../../Components/LogoImageUpload';
import SinglePictureUpload from '../../Components/SinglePictureUpload';
import validateLab from './validation';
import MaskedInput from "react-text-mask";
import { phone, cnpj, cellphone, cep } from '../../Common/TextMask';
import FormField from '../../Components/FormField';

class Lab extends React.PureComponent {
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
            this.toggleModalSave(true)
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
                            <button className="default-button default-button--mariner default-button--modal-default">Salvar</button>
                            <button className="default-button default-button--modal-mariner-transparent default-button--modal-default" onClick={this.toggleModalDelete.bind(this, false)}>Não</button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.isSaveDeleteOpen}
                >
                    <div className="modal-content">
                        <i className="modal-content__icon icon-modal-alert"></i>
                        <div className="modal-content__message">
                            Salvo com sucesso!
                        </div>
                        <div className="modal-content__action">
                            <button className="default-button default-button--modal-grey-transparent default-button--modal-default" onClick={this.toggleModalSave.bind(this, false)}>Voltar</button>
                        </div>
                    </div>
                </Modal>
                <MainLayout>
                    <Formik
                        validate={values => validateLab(values)}
                        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                    >
                        <Form>
                            <div className="main-layout__actions-layout main-layout__actions-layout--align-center">
                                <div className="main-layout__top-content">
                                    <div className="breadcrumb">
                                        <h2 className="breadcrumb__title">Laboratório</h2>
                                        <i className="breadcrumb__arrow breadcrumb__arrow-right"></i>
                                        <h3 className="breadcrumb__title breadcrumb__title--subtitle">{this.props.title}</h3>
                                    </div>
                                </div>
                                <div className="right-space">
                                    <button onClick={this.toggleModalDelete.bind(this, true)} className="default-button default-button--uncolored default-button--thinner">Excluir</button>
                                    <button type="submit" className="default-button default-button--shamrock default-button--thinner">Salvar</button>
                                </div>
                            </div>

                            <div className="half-layout">
                                <div className="half-layout__left">
                                    <h4 className="main-layout__title">Dados do laboratórios</h4>

                                    <Field name="lab_name" label={'Nome do laboratório:'} component={FormField} />
                                    <Field name="cnpj" label={'CNPJ:'} mask={cnpj} component={FormField} />
                                    <Field name="email" type="email" label={'Email:'} component={FormField} />
                                    <Field name="phone" label={'Telefone:'} mask={phone} component={FormField} />
                                    <Field name="cellphone" label={'Celular:'} mask={cellphone} component={FormField} />
                                    <Field name="incharge" label={'Responsável:'} component={FormField} />
                                    <Field name="incharge_email" type="email" label={'Email do responsável:'} component={FormField} />
                                    <Field name="incharge_phone" label={'Contato do responsável:'} component={FormField} />

                                    <h4 className="main-layout__title">Endereço</h4>

                                    <Field name="cep" mask={cep} label={'CEP:'} component={FormField} />


                                    <div className="default-form__row default-form__row--tworows">
                                        <Field name="number" label={'Número:'} component={FormField} />
                                        <Field name="complement" label={'Complemento:'} component={FormField} />
                                    </div>

                                    <Field name="neighborhood" label={'Bairro:'} component={FormField} />
                                    <Field name="city" label={'Cidade:'} component={FormField} />
                                    <Field name="state" label={'Estado:'} component={FormField} />



                                    <h4 className="main-layout__title">Senha</h4>

                                    <PasswordField label={'Criar senha:'} name="create_password" />
                                    <PasswordField label={'Confirmar nova senha:'} name="confirm_password" />


                                    <div className="wrap-buttons--center">
                                        <button type="button" className="default-button default-button--fluid default-button--thinner default-button--mariner">Confirmar senha</button>
                                    </div>
                                </div>

                                <div className="half-layout__right">
                                    <h4 className="main-layout__title">Logotipo do laboratório</h4>

                                    <div className="upload-field">
                                        <LogoImageUpload />
                                    </div>

                                    <h4 className="main-layout__title">foto do laboratório</h4>

                                    <SinglePictureUpload />
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </MainLayout>
            </>
        )
    }
}

Lab.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Lab;