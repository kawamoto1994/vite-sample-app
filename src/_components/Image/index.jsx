import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {string} props.src
 * @param {string} [props.alt]
 * @param {number} [props.width]
 * @param {number} [props.height]
 * @returns {JSX.Element}
 */

export default function Image({ src, alt, width, height }) {
    return (
        <img src={ src } alt={ alt || '' } className="rounded-lg" width={ width || '' } height={ height || '' } />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};
