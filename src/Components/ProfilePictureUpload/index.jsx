import React from 'react';
import iconPic from '../../Assets/Images/icon-pic.svg'
import FileUpload from '../FileUpload';


class ProfilePictureUpload extends React.PureComponent {
    state = {
        avatarUrl: null,
    }
    handleUploadSuccess = url => {
        this.setState({ avatarUrl: url });
    }
    render() {
        return (
            <div className="profile-picture-upload">
                <div className="profile-picture-upload__image">
                    {!this.state.avatarUrl && <img width="75" height="49" src={iconPic} alt="" title="" />}
                    {this.state.avatarUrl && <img src={this.state.avatarUrl} alt="" title="" />}
                </div>
                <label className="default-button default-button--modal-grey-transparent profile-picture-upload__button">
                    Inserir foto
                    <FileUpload handleUploadSuccess={url => this.handleUploadSuccess(url)} />
                </label>
            </div>
        )
    }
}


ProfilePictureUpload.defaultProp = {
    images: null,
};

export default ProfilePictureUpload;