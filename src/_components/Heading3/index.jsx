export default function Heading3({ title }) {
  return (
    <h3 className="font-bold text-lg md:text-3xl text-gray-900 text-center mt-9 md:mt-11 mb-8">
      <span className="block">{title}</span>
      <span className="inline-block	w-8 h-3 mt-5 md:mt-8 bg-gradient-to-r from-yelow-light to-primary-light2 rounded"></span>
    </h3>
  );
}