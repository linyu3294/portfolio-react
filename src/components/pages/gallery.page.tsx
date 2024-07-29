import React, { useEffect } from "react";
import Gallery from "react-photo-gallery";

interface Content {
  id: string;
  src: string;
  width: number;
  height: number;
}

const Lightbox = React.memo(({ content, photoIndex, onClose, setPhotoIndex }: {
  content: Content[];
  photoIndex: number;
  onClose: (newIndex: number | null) => void;
  setPhotoIndex: (newIndex: number) => void;
}) => {

  const handlePrev = () => {
    setPhotoIndex(photoIndex === 0 ? content.length - 1 : photoIndex - 1);
  };

  const handleNext = () => {
    setPhotoIndex(photoIndex === content.length - 1 ? 0 : photoIndex + 1);
  };

  return (
    <div className="lightbox-overlay"
      onClick={() => onClose(null)}
    >
      <div className="lightbox-content">
        {photoIndex !== null && (
          <img
            src={content[photoIndex].src}
            alt={`Photo ${photoIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
          &lt;
        </button>
        <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          &gt;
        </button>
      </div>
    </div>
  );
});



const GalleryView = () => {
  const [photoIndex, setPhotoIndex] = React.useState<number | null>(null);
  const [content, setContent] = React.useState<Content[]>([]);

  useEffect(() => {
    const getGalleryItems = async () => {
      // ## Upload JPGs in S3 Folder
      // Make sure to add the following meta-data for each image
      //     * x-amz-meta-width
      //     * x-amz-meta-width
      // Use Postman to debug. Look into CloudWatch > Log groups > /aws/lambda/kxf-lambda-gallery for any error handling. Sometimes the response can be null or not return the image if the key does not match the name of the file.
      try {
        const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/kxf-lambda-gallery`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
            'x-api-key': `${import.meta.env.VITE_API_KEY}`,
          },
        });
        
        if (response) {
          if (response.ok) {
            const rawItemsInJson = await response.json();
            const items = rawItemsInJson.map((item: any) => {
              return {
                src: item.url,
                width: parseInt(item.width),
                height: parseInt(item.height),
                id: item.id
              };
            });
            setContent(items);
          }
        } else {
          console.error('Failed to created checkout session');
        }
      } catch (error) {
        console.error('Transaction Error:', error);
      }
    };
    getGalleryItems();
  }, []);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setPhotoIndex(null); // Set photoIndex to null to close the lightbox
  };

  return (
    <div className="page-container">
      <h1 className="title">Gallery</h1>
      {!photoIndex && photoIndex !== 0 && (
        <Gallery photos={content} onClick={(_e, { index }) => handleOpenLightbox(index)} />
      )}
      {photoIndex !== null && (
        <div className="lightbox-backdrop" onClick={handleCloseLightbox}>
          <Lightbox
            content={content}
            photoIndex={photoIndex}
            onClose={handleCloseLightbox}
            setPhotoIndex={setPhotoIndex}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryView;
