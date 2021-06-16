import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import LoginContainer from "../pages/LoginContainer";
import Home from "../pages/HomeContainer";

// Presentational Component
// displays navigation bar to pages

const PresentationContainer = (props) => {
  const Location = useLocation();

  return (
    <div className="container-fluid ">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <span className=" nav-link">
            {Location.pathname === "/home"
              ? `Welcome ${props.username}`
              : "Login SPA"}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {Location.pathname === "/home" && props.username !== "" ? (
            <button
              className="btn btn-success logout-btn"
              onClick={props.handleLogout}
            >
              Logout
            </button>
          ) : (
            ``
          )}
        </nav>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <LoginContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default PresentationContainer;
