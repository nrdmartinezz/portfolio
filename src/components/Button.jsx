import PropTypes from "prop-types";

const Button = ({ icon, text, onClick, ...props }) => (
  <div
    onClick={onClick}
    {...props}
    className={"btn-standard" + (props.className ? ` ${props.className}` : "")}
  >
    {icon && <span className="btn-icon">{icon}</span>}
    {text && <span className="btn-text">{text}</span>}
  </div>
);

Button.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
