import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../Common/MainLayout';
import Modal from '../../Components/Modal';
import GalleryUpload from '../../Components/GalleryUpload';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateAnimal from './validation';
import FormField from '../../Components/FormField';

class Animal extends React.PureComponent {
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
                        validate={values => validateAnimal(values)}
                        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                    >
                        <Form>
                            <div className="main-layout__actions-layout main-layout__actions-layout--align-center">
                                <div className="main-layout__top-content">
                                    <div className="breadcrumb">
                                        <h2 className="breadcrumb__title">Animais</h2>
                                        <i className="breadcrumb__arrow breadcrumb__arrow-right"></i>
                                        <h3 className="breadcrumb__title breadcrumb__title--subtitle">{this.props.title}</h3>
                                    </div>
                                </div>
                                <div class="right-space">
                                    <button onClick={this.toggleModalDelete.bind(this, true)} class="default-button default-button--uncolored default-button--thinner">Excluir</button>
                                    <button type="submit" class="default-button default-button--shamrock default-button--thinner">Salvar</button>
                                </div>
                            </div>

                            <div className="half-layout">
                                <div className="half-layout__left">
                                    <Field name="animal_name" label={'Nome do Animal:'} component={FormField} />
                                    <Field name="specie" label={'Espécie:'} component={FormField} />
                                    <Field name="race" label={'Raça:'} component={FormField} />
                                    <Field name="coat" label={'Pelagem:'} component={FormField} />
                                    <Field name="sex" label={'Sexo:'} component={FormField} />
                                    <Field name="birth_year" label={'Ano de Nascimento:'} component={FormField} />


                                    <div className="default-form__row">
                                        <label className="form-label">O animal está em gestação?:</label>
                                        <div className="default-form__row--tworows default-form__row--nofluid">
                                            <div>
                                                <label class="custom-radio">Sim
                                            <           Field type="radio" name="check" />
                                                    <span class="custom-radio__checkmark"></span>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom-radio">Não
                                                        <Field type="radio" name="check" />
                                                    <span class="custom-radio__checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Field name="registration_number" label={'Número do Registro/Microchip:'} component={FormField} />

                                </div>

                                <div className="half-layout__right">
                                    <h4 class="main-layout__title">Foto</h4>

                                    <div className="upload-field">
                                        <GalleryUpload />
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

Animal.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Animal;