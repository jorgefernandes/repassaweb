import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Menu = ({ match: { path }}) => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className={`menu__list-item ${path === '/counters' ? 'menu__list-item--active': ''}`}>
                    <Link to="/counters"><i className="icon icon-counters"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/labs' ? 'menu__list-item--active': ''}`}>
                    <Link to="/labs"><i className="icon icon-labs"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/guides' ? 'menu__list-item--active': ''}`}>
                    <Link to="/guides"><i className="icon icon-guides"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/professionals' ? 'menu__list-item--active': ''}`}>
                    <Link to="/professionals"><i className="icon icon-professionals"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/owners' ? 'menu__list-item--active': ''}`}>
                    <Link to="/owners"><i className="icon icon-owners"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/animals' ? 'menu__list-item--active': ''}`}>
                    <Link to="/animals"><i className="icon icon-horse"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/properties' ? 'menu__list-item--active': ''}`}>
                    <Link to="/properties"><i className="icon icon-fence"></i></Link>
                </li>
    
            </ul>
            <ul className="menu__list">
            <li className={`menu__list-item ${path === '/notifications' ? 'menu__list-item--active': ''}`}>
                    <Link to="/notifications"><i className="icon icon-bell-white"></i></Link>
                </li>
                <li className={`menu__list-item ${path === '/profile' ? 'menu__list-item--active': ''}`}>
                    <Link to="/profile"><i className="icon icon-user"></i></Link>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Menu);