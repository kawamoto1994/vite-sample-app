import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export default function Container({ children }) {
  return <div className="container mx-auto">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
