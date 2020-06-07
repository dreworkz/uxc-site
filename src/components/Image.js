import React from "react";
import propTypes from "prop-types";

const Image = (props) => {
  const { height, width, src, alt } = props;
  return <img src={src} height={height} width={width} alt={alt} />;
};

export default Image;

Image.defaultProps = {
  height: "auto",
  width: "100%",
  alt: "alt text",
};

Image.propTypes = {
  height: propTypes.string,
  width: propTypes.string,
  src: propTypes.string.isRequired,
  alt: propTypes.string,
};
