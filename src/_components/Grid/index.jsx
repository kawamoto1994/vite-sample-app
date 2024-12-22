import PropTypes from 'prop-types';
/**
 * @param {Object} props
 * @param {number} [props.column]
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */

export default function Grid({ children, column }) {
    const columnClass = (() => {
        switch (column) {
            case 1:
            return "grid-cols-1";
            case 2:
            return "grid-cols-1 md:grid-cols-2";
            case 3:
            return "grid-cols-3 md:grid-cols-2 lg:grid-cols-3";
            case 4:
            return "grid-cols-4 md:grid-cols-2 lg:grid-cols-4";
            default:
            return "grid-cols-1"; // デフォルト値
        }
    })();

    return (
        <div className={`c-grid mt-8 md:mt-10 grid ${columnClass} gap-8 md:gap-10`}>
            { children }
        </div>
    );
}

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    column: PropTypes.number,
};
