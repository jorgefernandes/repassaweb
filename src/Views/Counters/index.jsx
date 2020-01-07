import React from 'react';
import MainLayout from '../../Common/MainLayout';


class Counters extends React.PureComponent {

    state = {
        counters: [
            {
                number: '249',
                label: 'Clínicas cadastradas',
            },
            {
                number: '2758',
                label: 'Usuários cadastrados',
            },
            {
                number: '24008',
                label: 'Proprietários',
            },
            {
                number: '1245',
                label: 'Animais cadastrados',
            },
            {
                number: '128',
                label: 'Propriedades cadastradas',
            }
        ],
        activities: [
            {
                dateTime: '17/04/2019 09:27:48',
                typeOfRegistration: 'Laboratório',
                identification: 'Vether Hospital Veterinário',
                code: 'VET-5689',
            },
            {
                dateTime: '17/04/2019 09:27:48',
                typeOfRegistration: 'Laboratório',
                identification: 'Vether Hospital Veterinário',
                code: 'VET-5689',
            },
            {
                dateTime: '17/04/2019 09:27:48',
                typeOfRegistration: 'Laboratório',
                identification: 'Vether Hospital Veterinário',
                code: 'VET-5689',
            },
        ]
    }

    render() {
        return (
            <MainLayout>
                <div className="main-layout__top-content">
                    <h2 className="main-layout__title">Contadores</h2>

                    <div className="counters-wrapper">
                        {this.state.counters.length > 0 &&
                            this.state.counters.map(item => <div className="box-counter">
                                <span className="box-counter__number">{item.number}</span> <br />
                                <span className="box-counter__text">{item.label}</span>
                            </div>)
                        }
                    </div>

                    <h3 className="main-layout__title">Últimas atividades</h3>
                </div>
                {this.state.activities.length > 0 &&
                    <table className="main-table">
                        <tr>
                            <th>Data e Hora</th>
                            <th>Tipo de Cadastro</th>
                            <th>Identificação</th>
                            <th>Código</th>
                            <th>Visualização</th>
                        </tr>
                        {this.state.activities.map(item =>
                            <tr>
                                <td>{item.dateTime}</td>
                                <td>{item.typeOfRegistration}</td>
                                <td>{item.identification}</td>
                                <td>{item.code}</td>
                                <td>
                                    <button class="custom-button01 custom-button01--white custom-button01--icon">
                                        <i className="icon-eye"></i>
                                        Visualizar
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

export default Counters;