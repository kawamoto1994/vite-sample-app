export default function Image({ src, alt, width, height }) {
    return (
        <img src={ src } alt={ alt || '' } className="rounded-lg" width={ width || '' } height={ height || '' } />
    );
}