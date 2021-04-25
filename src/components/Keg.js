import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  const kegStyle = {
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  };

  const buttonStyle = {
    backgroundColor: "rgb(155, 155, 155)",
    borderRadius: "3px",
    fontSize: "medium",
    borderColor: "white",
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  };

  let remainingPints = props.pintsLeft > 0 ? props.pintsLeft : "Out of Stock";
  return (
    <React.Fragment>
      <div style={kegStyle} onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - Pints Left :{remainingPints}</h3>
      </div>
      <button style={buttonStyle} onClick={() => props.onBuyPint(props.id)}>Sell a Pint</button>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onBuyPint: PropTypes.func
};

export default Keg;