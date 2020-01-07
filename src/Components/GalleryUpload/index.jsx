import React from 'react';
import iconPic from '../../Assets/Images/icon-pic.svg'
import FileUpload from '../FileUpload';
import ImageGallery from '../ImageGalleryUpload';


class GalleryUpload extends React.PureComponent {
    state = {
        avatarUrl: null,
    }
    handleUploadSuccess = url => {
        this.setState({ avatarUrl: url });
    }
    render() {
        return (
            <div className="gallery-upload">
                <label>
                    <div className="gallery-picture-upload__image">
                        {!this.state.avatarUrl && <img width="75" height="49" src={iconPic} alt="" title="" />}
                        {this.state.avatarUrl && <img src={this.state.avatarUrl} alt="" title="" />}
                    </div>
                    <FileUpload handleUploadSuccess={url => this.handleUploadSuccess(url)} />
                </label>

                <ImageGallery />
                <ImageGallery />
            </div>
        )
    }
}


GalleryUpload.defaultProp = {
    images: null,
};

export default GalleryUpload;