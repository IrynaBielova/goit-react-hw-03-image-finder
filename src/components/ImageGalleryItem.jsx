import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, onClick}) => {
    return(  

        <ImageGalleryItem onClick={onClick}>
            <ImageGalleryItem src={webformatURL} alt={tags} />
        </ImageGalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };