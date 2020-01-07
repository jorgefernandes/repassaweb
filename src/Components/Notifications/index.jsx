import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.PureComponent {
    state = {
        showNotifications: false,
    }

    toggleNotifications() {
        this.setState({ showNotifications: !this.state.showNotifications})
    }

    render() {
        return (
            <div className="notifications">
                <button className="notifications__button" onClick={this.toggleNotifications.bind(this)}>
                    <span className="notifications__length">{this.props.length}</span>
                    <i className="bell-icon"></i>
                </button>

                {this.state.showNotifications && <div className="notifications__list-wrapper">
                    <div className="notifications__list-wrapper-title">Notificações</div>
                    <ul className="notifications__list-wrapper-list">
                        {this.props.list.map(item =>
                            <li className="notifications__list-wrapper-list-item">
                                <span className="title">{item.title}</span><br />
                                <span className="locale">{item.locale}</span>
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
        )
    }
}

Notifications.propTypes = {
    length: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
};

export default Notifications;