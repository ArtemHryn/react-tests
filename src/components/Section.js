import PropTypes from "prop-types";

export default function Sectiion({ title, children }) {
    return <section>
        {title && <h2>{title}</h2>}
        {children}
    </section>;
}

Sectiion.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}