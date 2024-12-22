import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {React.ReactNode} props.title
 * @returns {JSX.Element}
 */

export default function CatchCopy({ title }) {
  return (
    <p className="c-catch font-bold text-lg md:text-3xl text-primary text-center mt-9 md:mt-11 mb-8">
      <span className="block">{title}</span>
    </p>
  );
}

CatchCopy.propTypes = {
    title: PropTypes.node.isRequired,
};
