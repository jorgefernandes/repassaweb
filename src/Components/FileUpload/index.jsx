import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import FileUploader from 'react-firebase-file-uploader';

class FileUpload extends React.Component {

    handleUploadError = error => {
        console.log(error);
    }

    handleUploadSuccess = filename => {
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(url => {
                return this.props.handleUploadSuccess(url);
            });
    }

    render() {
        return (
            <FileUploader
                hidden
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref('images')}
                onUploadStart={() => { }}
                onUploadError={this.handleUploadError.bind(this)}
                onUploadSuccess={this.handleUploadSuccess.bind(this)}
                onProgress={() => { }}
            />
        )
    }
}

FileUpload.propTypes = {
    handleUploadSuccess: PropTypes.func.isRequired,
}

export default FileUpload;

