import React from 'react';
import MainLayout from '../../Common/MainLayout';
import { Link } from 'react-router-dom';

class Animals extends React.PureComponent {
    state = {
        activities: [
            {
                animalName: 'Dakota Sioux',
                veterinaryName: 'Lavinia Pereira Sousa',
                species: 'Equus ferus',
                race: 'Puro-sangue inglês',
                coat: 'Zaino negro',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                animalName: 'Dakota Sioux',
                veterinaryName: 'Lavinia Pereira Sousa',
                species: 'Equus ferus',
                race: 'Puro-sangue inglês',
                coat: 'Zaino negro',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                animalName: 'Dakota Sioux',
                veterinaryName: 'Lavinia Pereira Sousa',
                species: 'Equus ferus',
                race: 'Puro-sangue inglês',
                coat: 'Zaino negro',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                animalName: 'Dakota Sioux',
                veterinaryName: 'Lavinia Pereira Sousa',
                species: 'Equus ferus',
                race: 'Puro-sangue inglês',
                coat: 'Zaino negro',
                registrationDate: '02/04/2019 16:27:48',
            },
            {
                animalName: 'Dakota Sioux',
                veterinaryName: 'Lavinia Pereira Sousa',
                species: 'Equus ferus',
                race: 'Puro-sangue inglês',
                coat: 'Zaino negro',
                registrationDate: '02/04/2019 16:27:48',
            },
        ]
    }
    render() {
        return (
            <MainLayout>
                <div className="main-layout__actions-layout">
                    <div className="main-layout__top-content">
                        <h2 className="main-layout__title">Animais</h2>
                        <div className="search">
                            <form>
                                <h3 className="main-layout__title">Animais cadastrados</h3>
                                <div className="search__field">
                                    <input type="text" placeholder="Pequise por animais" />
                                </div>

                                <div className="search__filter">
                                    <fieldset class="search__filter-fieldset">
                                        <i class="icon-filter"></i>
                                        Filtro
                                            </fieldset>
                                    <div className="search-filter__select">
                                        <label>Espécie</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione a espécie</option>
                                        </select>
                                    </div>

                                    <div className="search-filter__select">
                                        <label>Animal</label>
                                        <select className="search-filter__select">
                                            <option value="">A-Z</option>
                                        </select>
                                    </div>
                                    <div className="search-filter__select">
                                        <label>Raça</label>
                                        <select className="search-filter__select">
                                            <option value="">Selecione a raça</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="right-space">
                        <Link to="/animals/new-animal">
                            <button class="default-button default-button--mariner default-button--fluid default-button--thin">
                                + Cadastrar novo animal
                            </button>
                        </Link>
                    </div>
                </div>

                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Nome do Animal</th>
                            <th>Veterinário</th>
                            <th>Espécie</th>
                            <th>Raça</th>
                            <th>Pelagem</th>
                            <th>Data de Registro</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {this.state.activities.map((item, i) =>
                            <tr>
                                <td>{item.animalName}</td>
                                <td>{item.veterinaryName}</td>
                                <td>{item.species}</td>
                                <td>{item.race}</td>
                                <td>{item.coat}</td>
                                <td>{item.registrationDate}</td>
                                <td>
                                    <Link to="/animals/animal01">
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

export default Animals;