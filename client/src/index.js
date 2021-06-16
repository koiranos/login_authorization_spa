import React from "react";
import ReactDom from "react-dom";

import { DataProvider } from "./dataContext"; // state management provider

import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";

import "./style.css";

const App = () => {
  return (
    //DataProvider wraps the application in order to revial state to all children components
    <DataProvider>
      <Router>
        <Container />
      </Router>
    </DataProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
