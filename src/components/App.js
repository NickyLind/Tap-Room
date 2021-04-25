import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";


function App() {
  const container = {
    width: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(125, 125, 125)",
    borderRadius: "12px",
    boxShadow: "0 10px 8px rgba(0, 0, 0, 0.25)"
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
