import React from 'react';

import Header from '../Components/Header';
import Menu from '../Components/Menu';

class MainLayout extends React.PureComponent {

    render() {
        return (
            <>
                <Header />
                <Menu />
                <div className="main-layout">
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default MainLayout;