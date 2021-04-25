import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const buttonStyle = {
    backgroundColor: "rgb(155, 155, 155)",
    borderRadius: "3px",
    fontSize: "medium",
    borderColor: "white",
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  };
  const detailStyle = {
    fontFamily: "'Indie Flower', cursive",
    color: "white",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
  }
  const { keg } = props;
  let remainingPints = keg.pintsLeft > 0 ? keg.pintsLeft : "Out of Stock";
  return (
    <React.Fragment >
      <div style={detailStyle}>
        <h1>Keg Detail</h1>
        <h3>{keg.name} - Pints Left: {remainingPints}</h3>
        <h4>{keg.type}</h4>
        <p>{keg.price}$ per pint</p>
        <p>{keg.alcoholContent}% Alcohol Content</p>
        <button onClick={props.onClickingEdit} style={buttonStyle}>Edit Keg</button>
        <button onClick={() => props.onClickingDelete(keg.id)} style={buttonStyle}>Remove Keg</button>
        <hr />
      </div>
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