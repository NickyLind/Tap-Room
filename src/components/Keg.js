import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  let remainingPints = props.pintsLeft > 0 ? props.pintsLeft : "Out of Stock";
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - Pints Left :{remainingPints}</h3>
        <button onClick={() => props.onBuyPint(props.id)}>Sell a Pint</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onBuyPint: PropTypes.func
};

export default Keg;