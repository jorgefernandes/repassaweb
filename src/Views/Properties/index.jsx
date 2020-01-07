import React from 'react';
import MainLayout from '../../Common/MainLayout';
import { Link } from 'react-router-dom';

class Properties extends React.PureComponent {
    state = {
        activities: [
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                propertieName: 'Fazenda Chegando a Roça',
                phone: '(31) 3333-3333',
                propertieType: 'FAZENDA',
                city: 'Brumadinho/MG',
                registrationDate: '02/04/2019 16:27:48',
            },
        ]
    }
    render() {
        return (
            <MainLayout>
                <div className="main-layout__actions-layout">
                    <div className="main-layout__top-content">
                        <h2 className="main-layout__title">Propriedades</h2>
                        <div className="search">
                            <form>
                                <h3 className="main-layout__title">Propriedades cadastradas</h3>
                                <div className="search__field">
                                    <input type="text" placeholder="Pequise por propriedade" />
                                </div>

                                <div className="search__filter">
                                    <fieldset class="search__filter-fieldset">
                                        <i class="icon-filter"></i>
                                        Filtro
                                            </fieldset>
                                    <div className="search-filter__select">
                                        <label>Cidade</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione a cidade</option>
                                        </select>
                                    </div>

                                    <div className="search-filter__select">
                                        <label>Estado</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione o estado</option>
                                        </select>
                                    </div>
                                    <div className="search-filter__select">
                                        <label>Tipo de Propriedade</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione o tipo</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="right-space">
                        <Link to="/properties/new-propertie">
                            <button class="default-button default-button--mariner default-button--fluid default-button--thin">
                                + Cadastrar novo proprietário
                            </button>
                        </Link>
                    </div>
                </div>

                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Nome da Propriedade</th>
                            <th>Contato</th>
                            <th>Tipo de Propriedade</th>
                            <th>Município/UF</th>
                            <th>Data de Cadastro</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {this.state.activities.map((item, i) =>
                            <tr>
                                <td>{item.propertieName}</td>
                                <td>{item.phone}</td>
                                <td>{item.propertieType}</td>
                                <td>{item.city}</td>
                                <td>{item.registrationDate}</td>
                                <td>
                                    <Link to="/properties/properties01">
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
    };
};

export default Properties;