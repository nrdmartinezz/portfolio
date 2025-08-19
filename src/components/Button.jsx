import PropTypes from "prop-types";
import ArrowRight from "../assets/icon/arrow-circle-right.svg?react";
import Menu from "../assets/icon/apps.svg?react";
import Send from "../assets/icon/paper-plane-top.svg?react";
import { Link } from "react-router-dom";

const Button = ({ icon, text, onClick, link, ...props }) => {
  let IconElement;
  switch (icon) {
    case "arrow":
      IconElement = <ArrowRight />;
      break;
    case "menu":
      IconElement = <Menu />;
      break;
    case "send":
      IconElement = <Send />;
      break;
    default:
      IconElement = null;
  }

  const buttonContent = (
    <div
      onClick={onClick}
      {...props}
      className={
        "btn-standard" + (props.className ? ` ${props.className}` : "")
      }
    >
      {text && <span className="btn-text">{text}</span>}
      {icon && <span className="btn-icon">{IconElement}</span>}
    </div>
  );

  if (link) {
    return (
      <Link
        to={link}
        className={
          "btn-standard-link" + (props.className ? ` ${props.className}` : "")
        }
      >
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

Button.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
