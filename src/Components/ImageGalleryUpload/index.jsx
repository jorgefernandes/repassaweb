import React from 'react';
import iconPlus from '../../Assets/Images/icon-plus.svg'
import FileUpload from '../FileUpload';


class ImageGallery extends React.PureComponent {
    state = {
        avatarUrl: null,
    }
    handleUploadSuccess = url => {
        this.setState({ avatarUrl: url });
    }
    render() {
        return (
            <div className="image-gallery-upload">
                <label>
                    <div className="image-gallery-upload__image">
                        {!this.state.avatarUrl && <img width="18" height="18" src={iconPlus} alt="" title="" />}
                        {this.state.avatarUrl && <img src={this.state.avatarUrl} alt="" title="" />}
                    </div>
                    <FileUpload handleUploadSuccess={url => this.handleUploadSuccess(url)} />
                </label>
            </div>
        )
    }
}


ImageGallery.defaultProp = {
    images: null,
};

export default ImageGallery;