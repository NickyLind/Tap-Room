import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const buttonStyle = {
    backgroundColor: "rgb(155, 155, 155)",
    borderRadius: "3px",
    fontSize: "medium",
    borderColor: "white",
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  };

  return (
    <React.Fragment>
      <button
        onClick={props.handleClick} style={buttonStyle} >{props.buttonText}</button>
      <p>&copy; 2021 Nick Lindau</p>
    </React.Fragment>
  );
};

Footer.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string
};

export default Footer;