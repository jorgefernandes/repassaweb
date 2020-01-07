import React from 'react';
import MainLayout from '../../Common/MainLayout';
import { Link } from 'react-router-dom';

class Owners extends React.PureComponent {
    state = {
        activities: [
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
            {
                veterinaryName: 'Bianca Dias Ferreira',
                email: 'email@provedor.com.br',
                state: 'Minas Geriais',
                phone: '(31) 99999-9999',
                registrationData: '08/04/2019 08:52:48',
            },
        ]
    }
    render() {
        return (
            <MainLayout>
                <div className="main-layout__actions-layout">
                    <div className="main-layout__top-content">
                        <h2 className="main-layout__title">Proprietários</h2>
                        <div className="search">
                            <form>
                                <h3 className="main-layout__title">Proprietários cadastrados</h3>
                                <div className="search__field">
                                    <input type="text" placeholder="Pequise por proprietário" />
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
                                            <option value="">Selecione a cidade</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="right-space">
                        <Link to="/owners/new-owner">
                            <button class="default-button default-button--mariner default-button--fluid default-button--thin">
                                + Cadastrar novo proprietário
                            </button>
                        </Link>
                    </div>
                </div>
                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Nome do Proprietário</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>Contato</th>
                            <th>Data de Cadastro</th>
                            <th>Editart</th>
                            <th>Excluir</th>
                        </tr>
                        {this.state.activities.map((item, i) =>
                            <tr>
                                <td>{item.veterinaryName}</td>
                                <td>{item.email}</td>
                                <td>{item.state}</td>
                                <td>{item.phone}</td>
                                <td>{item.registrationData}</td>
                                <td>
                                    <Link to="/owners/owner01">
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
}

export default Owners;