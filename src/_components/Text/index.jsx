import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export default function Text({ children }) {
  return <p className="c-text">{ children }</p>;
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
};
