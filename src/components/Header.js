import React from "react";
import pints from "./../img/Pints.jpg";


function Header() {
  const headerStyling = {
    backgroundImage: `url(${pints})`,
    backgroundSize: "contain",
    color: "rgb(255, 255, 255)",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  }
  return (
    <React.Fragment>
      {/* <div style="container"> */}
      <div style={headerStyling}>
        <h1>Nick's Tap Room</h1>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Header;