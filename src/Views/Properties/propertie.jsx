import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../Common/MainLayout';
import Modal from '../../Components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { cpf, phone } from '../../Common/TextMask';
import validateProperties from './validation';
import FormField from '../../Components/FormField';
import SelectField from '../../Components/SelectField';

class Properties extends React.PureComponent {
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
                        validate={values => validateProperties(values)}
                        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                    >
                        <Form>
                            <div className="main-layout__actions-layout main-layout__actions-layout--align-center">
                                <div className="main-layout__top-content">
                                    <div className="breadcrumb">
                                        <h2 className="breadcrumb__title">Propriedades</h2>
                                        <i className="breadcrumb__arrow breadcrumb__arrow-right"></i>
                                        <h3 className="breadcrumb__title breadcrumb__title--subtitle">{this.props.title}</h3>
                                    </div>
                                </div>
                                <div class="right-space">
                                    <button onClick={this.toggleModalDelete.bind(this, true)} class="default-button default-button--uncolored default-button--thinner">Excluir</button>
                                    <button onClick={this.toggleModalSave.bind(this, true)} class="default-button default-button--shamrock default-button--thinner">Salvar</button>
                                </div>
                            </div>

                            <div className="half-layout">
                                <div className="half-layout__left">
                                    <h4 class="main-layout__title">Dados</h4>
                                    <Field name="propertie_name" label={'Nome da Propriedade:'} component={FormField} />
                                    <Field name="state_registration_number" label={'Nº Cadastro Estadual:'} component={FormField} mask={cpf} />
                                    <Field name="phone" label={'Telefone:'} component={FormField} mask={phone} />
                                    <Field name="city" label={'Cidade:'} component={SelectField}>
                                        <option value="">Selecione a cidade</option>
                                    </Field>
                                    <Field name="state" label={'Estado:'} component={SelectField}>
                                        <option value="">Selecione a estado</option>
                                    </Field>
                                    <Field name="state" label={'Tipo de Propriedade:'} component={SelectField}>
                                        <option value="">Selecione a propriedade</option>
                                    </Field>
                                    <Field
                                        name="number_of_animals"
                                        className="default-input default-input--third"
                                        label={'Nº de Equídeos existentes:'}
                                        component={FormField}
                                    />
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </MainLayout>
            </>
        )
    }
}

Properties.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Properties;