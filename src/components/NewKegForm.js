import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation(
      {
        name: event.target.name.value,
        type: event.target.type.value,
        price: event.target.price.value,
        alcoholContent: event.target.alcoholContent.value,
        pintsLeft: event.target.pintsLeft.value,
        id: v4()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg"
      />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

// need reuseable form, keg, keg details 
// add  keg, keg details, reuseable form