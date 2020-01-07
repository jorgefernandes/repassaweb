import React from 'react';
import Switch from 'react-switch';

class ToggleSwitch extends React.Component {
    state ={
        checked: false,
    }


    handleChange = (checked) => {
        this.setState({ checked });
        return this.props.changeCallack();
    }

    render() {
        return (
            <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                onColor="#8FB5DD"
                onHandleColor="#1F6CBC"
                offHandleColor="#8F8F8F"
                offColor="#E2E2E2"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 1px rgba(0, 0, 0, 0.4)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={35}
                className="react-switch"
                id="material-switch"
            />
        )
    }
}

export default ToggleSwitch;