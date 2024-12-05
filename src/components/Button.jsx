let Button = ({ onClick, text, icon }) => {
  return (
    <div onClick={onClick}>
      {icon ? icon : null}
      {text}
    </div>
  );
};

export default Button;
