import React from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../Components/ToggleSwitch';
import MainLayout from '../../Common/MainLayout';

class Labs extends React.PureComponent {
    state = {

        activities: [
            {
                registrationNumber: 'CLN-9865',
                labName: 'Hospital Veterinário São Francisco de Assis',
                email: 'email@provedor.com.br',
                phone: '(31) 3333-3333',
                city: 'Belo Horizonte',
            },
            {
                registrationNumber: 'CLN-9865',
                labName: 'Hospital Veterinário São Francisco de Assis',
                email: 'email@provedor.com.br',
                phone: '(31) 3333-3333',
                city: 'Belo Horizonte',
            },
            {
                registrationNumber: 'CLN-9865',
                labName: 'Hospital Veterinário São Francisco de Assis',
                email: 'email@provedor.com.br',
                phone: '(31) 3333-3333',
                city: 'Belo Horizonte',
            },
            {
                registrationNumber: 'CLN-9865',
                labName: 'Hospital Veterinário São Francisco de Assis',
                email: 'email@provedor.com.br',
                phone: '(31) 3333-3333',
                city: 'Belo Horizonte',
            },
            {
                registrationNumber: 'CLN-9865',
                labName: 'Hospital Veterinário São Francisco de Assis',
                email: 'email@provedor.com.br',
                phone: '(31) 3333-3333',
                city: 'Belo Horizonte',
            },
        ]
    }
    handleChangeCallback = (i) => {
        console.log(`handle change call back ${i}`)
    }
    render() {
        return (
            <MainLayout>
                <div className="main-layout__actions-layout">
                    <div className="main-layout__top-content">
                        <h2 className="main-layout__title">Laboratórios</h2>
                        <div className="search">
                            <form>
                                <h3 className="main-layout__title">Laboratorios cadastrados</h3>
                                <div className="search__field">
                                    <input type="text" placeholder="Pequise por laboratório" />
                                </div>

                                <div className="search__filter">
                                    <fieldset class="search__filter-fieldset">
                                        <i class="icon-filter"></i>
                                        Filtro
                                    </fieldset>
                                    <div className="search-filter__select">
                                        <label>Cidade</label>
                                        <select className="search-filter__select">
                                            <option value="">nome da cidade</option>
                                        </select>
                                    </div>

                                    <div className="search-filter__select">
                                        <label>Estado</label>
                                        <select className="search-filter__select">
                                            <option value="">nome da cidade</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="right-space">
                        <Link to="/labs/new-lab">
                            <button class="default-button default-button--mariner default-button--fluid default-button--thin">
                                + Cadastrar novo laboratório
                        </button>
                        </Link>
                    </div>
                </div>
                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Nº de Registro</th>
                            <th>Nome do Laboratório</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>Cidade</th>
                            <th>Ativação</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {this.state.activities.map((item, i) =>
                            <tr>
                                <td>{item.registrationNumber}</td>
                                <td>{item.labName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
                                <td>
                                    <ToggleSwitch changeCallack={() => this.handleChangeCallback(i)} />
                                </td>
                                <td>
                                    <Link to="/labs/lab01">
                                        <button class="custom-button02">
                                            <i className="icon-edit"></i>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button class="custom-button02">
                                        <i className="icon-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </table>
                }
            </MainLayout>
        );
    }
}

export default Labs;