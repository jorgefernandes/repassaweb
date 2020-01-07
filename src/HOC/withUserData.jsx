import React from 'react';

function withUserData(BaseComponent) {
    return class UserData extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                userData: null,
            }
        }
    
        componentWillMount() {
            console.log('call api and update state');
    
            this.setState({
                userData: {
                    userName: 'Mônica Costa',
                    avatar: 'avatar.jpg'
                }
            })
        }
    
        render() {
            return (
                <BaseComponent {...this.props} {...this.state.userData} />
            )
        }
    }
}

export default withUserData;