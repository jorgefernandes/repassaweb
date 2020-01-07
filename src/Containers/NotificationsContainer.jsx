import React from 'react';
import Notifications from '../Components/Notifications';

class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications_list: []
        }
    }

    componentWillMount() {
        console.log('call api and update state');

        this.setState({
            notifications_list: [
                {
                    title: 'Notificação xyz',
                    locale: 'Guia',
                },
                {
                    title: 'Notificação xyz',
                    locale: 'Guia',
                },
                {
                    title: 'Notificação xyz',
                    locale: 'Guia',
                }, {
                    title: 'Notificação xyz',
                    locale: 'Guia',
                }
            ],
        })
    }

    render() {
        return (
            <Notifications
                list={this.state.notifications_list}
                length={this.state.notifications_list.length}
            />
        )
    }
}

export default NotificationsContainer;