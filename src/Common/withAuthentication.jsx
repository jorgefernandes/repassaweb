import React from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import LoadingScreen from "react-loading-screen";

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor (props) {
            super(props);

            this.state = {
                authUser: {},
                userData: {},
                loading: true,
            };
        }

        getChildContext () {
            return {
                authUser: this.state.authUser,
                userData: this.state.userData,
            };
        }

        async componentDidMount () {
            this.setState({loading: false})
        }
        render () {
            const { loading } = this.state;

            if (loading) {
                return (
                    <LoadingScreen
                        loading={loading}
                        bgColor="#fff"
                        spinnerColor="#669933"
                        textColor="#000"
                        logoSrc={""}
                        text="Iniciando plataforma ..."
                    />
                );
            }

            return <Component {...this.props} />;
        }
    }

    WithAuthentication.childContextTypes = {
        authUser: PropTypes.object,
        userData: PropTypes.object,
    };

    return WithAuthentication;
};

export default withAuthentication;
