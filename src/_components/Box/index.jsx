import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export default function Box({ children }) {
    return <div className="mx-auto px-8 pt-10 pb-11 max-w-780 shadow rounded-lg">{ children }</div>;
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
};
