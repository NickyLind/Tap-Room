import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";


function App() {
  const container = {
    width: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  }

  return (
    <div style={container}>
      <React.Fragment>
        <Header />
        <KegControl />
      </React.Fragment>
    </div>
  );
}

export default App;
