import React from "react";
import "./App.css";
import Body from "./components/body";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="left">
            <h1>Predictor</h1>
          </div>
          <div className="right">
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">SIGN-UP</a>
            </li>
            <li>
              <a href="#">LOG-IN</a>
            </li>
          </div>
        </div>
        <Body />
      </div>
    </>
  );
};

export default App;
