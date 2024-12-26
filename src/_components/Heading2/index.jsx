import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */

export default function Heading2({ title }) {
  return (
    <h2 className="font-bold text-2xl md:text-4xl text-gray-900 text-center mt-12 md:mt-11 mb-11 md:mb-10">
      <span className="block">{title}</span>
      <span className="block flex justify-center mt-6">
        <picture>
          <source srcSet="/assets/images/i_circle.svg" media="(min-width: 768px)" width={40} height={40} />
          <img src="/assets/images/i_circle.svg" alt="" width={24} height={24} />
        </picture>
      </span>
    </h2>
  );
}

Heading2.propTypes = {
    title: PropTypes.string.isRequired,
};
