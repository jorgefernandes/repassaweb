import React from 'react';
import MainLayout from '../../Common/MainLayout';
import CustomLabel from '../../Components/CustomLabel';
import { Link } from 'react-router-dom';


class Guides extends React.PureComponent {
    state = {
        statusInfo: {
            sent: {
                color: '#9DE3C8',
                text: 'Enviado',
            },
            missing: {
                color: '#EFDFB3',
                text: 'Falta Informação',
            },
            not_sent: {
                color: '#E5AFAF',
                text: 'Não Enviado',
            },
        },

        activities: [
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'sent',
            },
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'missing',
            },
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'not_sent',
            },
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'sent',
            },
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'missing',
            },
            {
                examNumber: '22019/18',
                guideName: 'Mormo de Buck',
                lab: 'Veterinária Ministério Arca de Noé',
                veterinary: 'Sophia Melo Santos',
                status: 'not_sent',
            },
        ]
    }
    render() {
        return (
            <MainLayout>
                <div className="main-layout__actions-layout">
                    <div className="main-layout__top-content">
                        <h2 className="main-layout__title">Guias</h2>
                        <div className="search">
                            <form>
                                <h3 className="main-layout__title">Guias cadastrados</h3>
                                <div className="search__field">
                                    <input type="text" placeholder="Pequise por guias, exames" />
                                </div>

                                <div className="search__filter">
                                    <fieldset class="search__filter-fieldset">
                                        <i class="icon-filter"></i>
                                        Filtro
                                            </fieldset>
                                    <div className="search-filter__select">
                                        <label>Animal</label>
                                        <select className="search-filter__select">
                                            <option value="">A-Z</option>
                                        </select>
                                    </div>

                                    <div className="search-filter__select">
                                        <label>Veterinário</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione o veterinário</option>
                                        </select>
                                    </div>

                                    <div className="search-filter__select">
                                        <label>Data</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione a data</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Nº de Exame</th>
                            <th>Nome do Guia</th>
                            <th>Laboratório</th>
                            <th>Veterinário</th>
                            <th>Status</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {this.state.activities.map((item, i) =>
                            <tr>
                                <td>{item.examNumber}</td>
                                <td>{item.guideName}</td>
                                <td>{item.lab}</td>
                                <td>{item.veterinary}</td>
                                <td>
                                    <CustomLabel
                                        name={this.state.statusInfo[item.status].text}
                                        color={this.state.statusInfo[item.status].color}
                                    />
                                </td>
                                <td>
                                    <Link to="/guides/guide01">
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

export default Guides;