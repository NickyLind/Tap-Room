import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const buttonStyle = {
    backgroundColor: "rgb(135, 135, 135)",

  };

  return (
    <React.Fragment>
      <button
        onClick={props.handleClick} style={buttonStyle}>{props.buttonText}</button>
      <p>&copy; 2021 Nick Lindau</p>
    </React.Fragment>
  );
};

Footer.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string
};

export default Footer;