import { ImageGalleryItem } from './ImageGalleryItem';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ images, largeImage }) => (
    <ul className={ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => largeImage(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onClick={handleItemClick}
          />
        );
      })}
    </ul>
  );

// ImageGallery.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           webformatURL: PropTypes.string,
//           tags: PropTypes.string,
//         })
//     ),
// };