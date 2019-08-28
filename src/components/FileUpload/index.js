// @flow
import * as React from 'react';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};
type FileUploadType = {
  theme?: Theme,
  handleScroll?: () => any,
  order?: number,
};

export const FileUpload = ({ theme, handleScroll, order }: FileUploadType) => {
  const { dispatch } = React.useContext(FormContext);
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && handleScroll) {
      handleScroll();
    }
  };

  const openWidget = e => {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'typeform-clone',
        uploadPreset: 'hmlxymen',
      },
      (error, result) => {
        if (result.event === 'success') {
          dispatch({
            type: 'ADD__ANSWER',
            payload: { order, value: [result.info.secure_url] },
          });
          console.log(result.info.secure_url);
        }
      }
    );
  };

  return (
    <div
      id={order}
      className="fileupload"
      style={theme}
      role="button"
      onClick={openWidget}
      tabIndex={0}
      onDragEnter={openWidget}
      onKeyPress={handleKeyPress}
    >
      <div className="fileupload--icon"></div>
      <div>
        <div className="fileupload__text">Choose file </div>
        or drag here
      </div>
      Size limit: 10MB
    </div>
  );
};

export default FileUpload;
