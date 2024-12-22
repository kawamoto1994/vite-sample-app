export default function Heading4({ title }) {
  return (
    <h4 className="font-bold text-lg md:text-xl text-gray-900 mt-9 md:mt-11 mb-8">
      <span className="relative inline-block pl-6 md:pl-8">
        <span className="absolute top-1 md:top-0 left-0 w-2 md:w-3 h-6 md:h-8 bg-gradient-to-b from-yelow-light to-primary-light2 rounded"></span><span className="block">{title}</span>
      </span>
    </h4>
  );
}