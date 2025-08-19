import PropTypes from "prop-types";

const Heading = ({ level = 2, children, ...props }) => {
  const Tag = `h${level}`;
  return (
    
    <Tag {...props}>
      <span className="deco-text-heading">{children}</span>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Heading;
