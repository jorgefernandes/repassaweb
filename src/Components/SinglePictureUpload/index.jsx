import React from 'react';
import iconPic from '../../Assets/Images/icon-pic.svg'
import FileUpload from '../FileUpload';


class SinglePictureUpload extends React.PureComponent {
    state = {
        avatarUrl: null,
    }
    handleUploadSuccess = url => {
        this.setState({ avatarUrl: url });
    }
    render() {
        return (
            <div className="single-picture-upload">
                <div className="single-picture-upload__image">
                    {!this.state.avatarUrl && <img width="75" height="49" src={iconPic} alt="" title="" />}
                    {this.state.avatarUrl && <img src={this.state.avatarUrl} alt="" title="" />}
                </div>
                <label className="default-button default-button--modal-grey-transparent single-picture-upload__button">
                    Inserir foto
                    <FileUpload handleUploadSuccess={url => this.handleUploadSuccess(url)} />
                </label>
            </div>
        )
    }
}


SinglePictureUpload.defaultProp = {
    images: null,
};

export default SinglePictureUpload;