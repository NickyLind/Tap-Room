import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const buttonStyle = {
    backgroundColor: "rgb(155, 155, 155)",
    borderRadius: "3px",
    fontSize: "medium",
    borderColor: "white",
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  };

  const inputStyle = {
    backgroundColor: "",
    borderRadius: "5px",

  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Beer Name"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="type"
          placeholder="Beer Type"
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          step=".01"
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content"
          step=".1"
          required
          style={inputStyle}
        />
        <input
          type="hidden"
          name="pintsLeft"
          value="124"
        />
        <button type="submit" style={buttonStyle}>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;