import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  let remainingPints = keg.pintsLeft > 0 ? keg.pintsLeft : "Out of Stock";
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - Pints Left: {remainingPints}</h3>
      <h4>{keg.type}</h4>
      <p>{keg.price}$ per pint</p>
      <p>{keg.alcoholContent}% Alcohol Content</p>
      <button onClick={props.onClickingEdit}>Edit Keg</button>
      <button onClick={() => props.onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onBuyPint: PropTypes.func
};

export default KegDetail;