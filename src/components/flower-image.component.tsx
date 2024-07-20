import React from 'react';

const ImageComponent = ({ imageSrc }: { imageSrc: string }) => {
  const imageStyle: React.CSSProperties = {
    maxWidth: '20%',
    maxHeight: '100%',
    objectFit: 'cover' // This ensures the image maintains its aspect ratio while fitting within the specified dimensions
  };

    return (
        <img
        src={imageSrc}
        alt="Flower"
        style={{ ...imageStyle }}
        />
    );
};

export default ImageComponent;