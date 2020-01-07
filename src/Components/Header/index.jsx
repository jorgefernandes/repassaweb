import React from 'react';
import { Link } from 'react-router-dom';
import LogoResenha from '../../Assets/Images/logo_resenha_app_HORIZONTAL@2x.png';
import NotificationsContainer from '../../Containers/NotificationsContainer';
import UserGreetingContainer from '../../Containers/UserGreetingContainer';


const Header = () => (
    <div className="header">
        <h1 className="header__logo logo-resenha">
            <img src={LogoResenha} width="134" height="47" title="Resenha" alt="logo Resenha" />
        </h1>

        <div className="header__right-content">

            <UserGreetingContainer />
            <NotificationsContainer />

            <div className="logout">
                <Link to="/">
                    <button className="logout__button">
                        <i className="icon-logout"></i><span>Sair</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
export default Header;