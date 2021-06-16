import React from "react";
import { useHistory } from "react-router-dom";

// displays a message when route is inaccessible

const Inaccessible = () => {
  const history = useHistory();
  const handleButton = () => {
    history.push("/");
  };
  return (
    <div className="wrapper bg-light rounded p-5">
      <h4 className="text-center">Home Page Inaccessible</h4>
      <hr />
      <p>You reached a protected page please go back to login first</p>
      <div className="col-12">
        <button
          className="my-btn btn btn-primary"
          type="button"
          onClick={handleButton}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Inaccessible;
