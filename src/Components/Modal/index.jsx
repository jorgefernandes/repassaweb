import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        zIndex: '9999',
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        borderRadius: '10px',
        border: '1px solid #707070',
    }
};

class ModalDefault extends React.PureComponent {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onAfterOpen={() => this.props.onAfterOpen()}
                onAfterClose={() => this.props.onAfterClose()}
                onRequestClose={() => this.props.onRequestClose()}
                style={customStyles}
                shouldCloseOnOverlayClick
            >
                <div className="modal__content">
                    {this.props.children}
                </div>
            </Modal>
        );
    }
}

ModalDefault.defaultProps = {
    onAfterOpen: () => { },
    onAfterClose: () => { },
    onRequestClose: () => { },
}

export default ModalDefault;
