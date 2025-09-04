import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Carousel = ({ children, autoStep = false, stepInterval = 4000, className }) => {
  const items = React.Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("forward");
  const intervalRef = useRef(null);

  const handleDotClick = (index) => {
    if (index !== current) {
      setDirection(index > current ? "forward" : "backward");
      setPrev(current);
      setCurrent(index);
    }
  };

  useEffect(() => {
    if (autoStep && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setDirection("forward");
        setPrev(current);
        setCurrent((prevIdx) => (prevIdx + 1) % items.length);
      }, stepInterval);
      return () => clearInterval(intervalRef.current);
    }
    return () => {};
  }, [autoStep, stepInterval, items.length, current]);

  return (
    <div className={"carousel-container" + (className ? ` ${className}` : "")}>
      <div className="carousel-slide">
        {items.map((item, idx) => { 
          let classNames = "carousel-item";
          if (idx === current) classNames += direction === "forward" ? " active-forward" : " active-backward";
          if (idx === prev) classNames += direction === "forward" ? " prev-forward" : " prev-backward";
          return (
            <div key={idx} className={classNames}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="carousel-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoStep: PropTypes.bool,
  stepInterval: PropTypes.number,
  className: PropTypes.string,
};

export default Carousel;