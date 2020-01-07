import React from 'react';
import PropTypes from 'prop-types';

const UserGreeting = ({ userName }) => (
    <div className="greeting-user">
        <div className="greeting-user__photo">

        </div>
        <div className="greeting-user__username">
            Olá, {userName}
        </div>
    </div>
);

UserGreeting.propTypes = {
    userName: PropTypes.string.isRequired,
}

export default UserGreeting;