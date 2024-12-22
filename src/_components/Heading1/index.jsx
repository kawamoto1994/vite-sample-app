import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */

import Container from '../Container';

export default function Heading1({ title }) {
  return (
    <div className="py-12 md:py-13 px-5 md:px-8 min-h-200 bg-primary-light rounded-tl-none rounded-tr-none rounded-bl-3xl md:rounded-bl-4xl rounded-br-none flex items-center">
      <Container>
        <h1 className="font-bold text-2xl md:text-4xl text-gray-900">{title}</h1>
      </Container>
    </div>
  );
}

Heading1.propTypes = {
    title: PropTypes.string.isRequired,
};
