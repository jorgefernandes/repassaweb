import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../Common/MainLayout';
import Modal from '../../Components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { noexam } from '../../Common/TextMask';
import validateGuide from './validation';
import FormField from '../../Components/FormField';
import SelectField from '../../Components/SelectField';
import MaskedInput from "react-text-mask";

class Guide extends React.PureComponent {
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
                        validate={values => validateGuide(values)}
                        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                    >
                        <Form>
                            <div className="main-layout__actions-layout main-layout__actions-layout--align-center">
                                <div className="main-layout__top-content">
                                    <div className="breadcrumb">
                                        <h2 className="breadcrumb__title">Guias</h2>
                                        <i className="breadcrumb__arrow breadcrumb__arrow-right"></i>
                                        <h3 className="breadcrumb__title breadcrumb__title--subtitle">{this.props.title}</h3>
                                    </div>
                                </div>
                                <div class="right-space">
                                    <button onClick={this.toggleModalDelete.bind(this, true)} class="default-button default-button--uncolored default-button--thinner">Excluir</button>
                                    <button type="submit" className="default-button default-button--shamrock default-button--thinner">Salvar</button>
                                </div>
                            </div>

                            <div className="half-layout">
                                <div className="half-layout__left">
                                    <h4 class="main-layout__title">Dados do Exame</h4>

                                    <Field name="noexam" mask={noexam} label={'Número do exame:'} component={FormField} />

                                    <Field name="disease" label={'Doença:'} component={SelectField}>
                                        <option value="Mormo">Mormo</option>
                                    </Field>

                                    <Field label={'Finalidade:'} name="goal" component={SelectField}>
                                        <option value="Trânsito Nacional">Trânsito Nacional</option>
                                    </Field>

                                    <Field label={'Laboratório:'} name="lab" component={SelectField}>
                                        <option value="Zoogene Laboratório Animal">Zoogene Laboratório Animal</option>
                                    </Field>

                                    <Field label={'Veterinário:'} name="veterinary" component={SelectField}>
                                        <option value="Sophia Melo Santos">Sophia Melo Santos</option>
                                    </Field>

                                    <Field label={'Proprietário:'} name="owner" component={SelectField}>
                                        <option value="Julia Fernandes Costa">Julia Fernandes Costa</option>
                                    </Field>

                                    <Field label={'Propriedade:'} name="propertie" component={SelectField}>
                                        <option value="Julia Fernandes Costa">Julia Fernandes Costa</option>
                                    </Field>

                                    <Field label={'Animal:'} name="animal" component={SelectField}>
                                        <option value="Impetuoso">Impetuoso</option>
                                    </Field>


                                    <div className="wrap-buttons--center wrap-buttons--flex-fluid">
                                        <button type="button" className="default-button default-button--withicon default-button--fluid default-button--thinner default-button--mariner">
                                            <i className="icon-share"></i>
                                            Compartilhar
                                            </button>
                                        <button type="button" className="default-button default-button--withicon default-button--fluid default-button--thinner default-button--uncolored">
                                            <i className="icon-pdf"></i>
                                            Baixar PDF
                                            </button>
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

Guide.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Guide;