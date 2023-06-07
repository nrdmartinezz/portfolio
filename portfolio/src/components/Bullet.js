import React from "react";

const Bullet = (props) => {
  return (
      <div className="bullet-container">
        <div className="bullet-image"></div>
        <p className="bullet-text">{props.text}</p>
      </div>
  );
};


export default Bullet;