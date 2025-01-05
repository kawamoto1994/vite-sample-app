import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export default function GridItem({ children }) {
    return <div className="c-grid__item">{ children }</div>;
}

GridItem.propTypes = {
    children: PropTypes.node.isRequired,
};
