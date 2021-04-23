import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <h5>{keg.type}</h5>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
      <button onClick={props.onClickingEdit}>Edit Keg</button>
      <button onClick={() => props.onClickingDelete}>Remove Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;