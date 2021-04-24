import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Beer Name"
        />
        <input
          type="text"
          name="type"
          placeholder="Beer Type"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          step=".01"
        />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content"
          step=".1"
        />
        <input
          type="hidden"
          name="pintsLeft"
          value="124"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;