import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  let remainingPints = props.pintsLeft > 0 ? props.pintsLeft : "Out of Stock";
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - Pints Left :{remainingPints}</h3>
      </div>
      <button onClick={() => props.onBuyPint(props.id)}>Sell a Pint</button>
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