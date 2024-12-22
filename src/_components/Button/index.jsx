import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.className]
 * @param {Function} [props.event]
 * @returns {JSX.Element}
 */

export default function Button({ title, className, ...event }) {
    return <button className={`mt-5 md:mt-8 py-4 px-5 md:px-8 bg-secondary text-white rounded-xl hover:bg-secondary-dark text-md md:text-lg font-medium${ ' ' + className || '' }`}{...event}>{ title }</button>
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    event: PropTypes.func,
};
