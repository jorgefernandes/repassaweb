import React from 'react';
import MainLayout from '../../Common/MainLayout';

class Notifications extends React.PureComponent {
    state = {
        notifications: [
            {
                title: 'Nova Guia Cadastrada',
                dateTime: '07/03/2019 às 08:07',
            },
            {
                title: 'Nova Guia Cadastrada',
                dateTime: '07/03/2019 às 08:07',
            },
            {
                title: 'Nova Guia Cadastrada',
                dateTime: '07/03/2019 às 08:07',
            },
            {
                title: 'Nova Guia Cadastrada',
                dateTime: '07/03/2019 às 08:07',
            },
            {
                title: 'Nova Guia Cadastrada',
                dateTime: '07/03/2019 às 08:07',
            },
        ]
    }

    render() {
        return (
            <MainLayout>
                <div className="main-layout__top-content">
                    <div className="search">
                        <form>
                            <div className="search__filter search__filter-checkbox">
                                <fieldset class="search__filter-fieldset">
                                    <i class="icon-filter"></i>
                                    Filtro
                                </fieldset>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Laboratórios</label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Guias</label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Veterinários</label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Proprietários</label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Animais</label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" />
                                    <label>Propriedade</label>
                                </div>

                            </div>
                            <div className="search__field search__field--space">
                                <input type="text" placeholder="Pequise por proprietário" />
                            </div>
                        </form>
                    </div>
                    <div className="notification-wrapper">
                        {this.state.notifications.length > 0 &&
                            this.state.notifications.map(item =>
                                (
                                    <div className="notification-box">
                                        <div className="notification-box__title">{item.title}</div>
                                        <div className="notification-box__datetime">{item.dateTime}</div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export default Notifications;