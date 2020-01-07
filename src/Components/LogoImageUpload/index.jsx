import React from 'react';
import iconPic from '../../Assets/Images/icon-pic.svg'
import FileUpload from '../FileUpload';


class LogoImageUpload extends React.PureComponent {
    state = {
        avatarUrl: iconPic,
    }
    handleUploadSuccess = url => {
        this.setState({ avatarUrl: url });
    }
    render() {
        return (
            <div className="logo-image-upload">
                <div className="logo-image-upload__image"><img src={this.state.avatarUrl} alt="" title="" /></div>
                <label className="logo-image-upload__button">
                    <FileUpload handleUploadSuccess={url => this.handleUploadSuccess(url)} />
                </label>
            </div>
        )
    }
}


LogoImageUpload.defaultProp = {
    images: null,
};

export default LogoImageUpload;