import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../dataContext";

// Presentational Component
// displays the login form and provides visual representation of
// input errors

const Login = (props) => {
  const [data, setData] = useContext(DataContext);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    e.target.name === "user"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  const handleButton = (e) => {
    if (!data.isLoggedIn) {
      const result = props.handleButtonClick(username, password);
      if (result.status) {
        history.push("/home");
      } else {
        // provide user with error information
        const element = document.querySelector(".information-text");
        element.classList.add("information-text-error");
        element.textContent = result.message;
      }
    } else {
      history.push("/home");
    }
  };

  const content = !data.isLoggedIn ? (
    <form className="p-4">
      <span className="text-center">
        <h4 className="">Login Form</h4>
        <hr />
        <p className="information-text">
          Enter Username and Password to login. <br />
          Spaces are not allowed.
        </p>
      </span>

      <div className="mb-3">
        <label className="form-label" htmlFor="user-name">
          <p>Username</p>
        </label>
        <div className="input-group">
          <input
            id="user-name"
            className="form-control"
            type="text"
            name="user"
            value={username}
            onChange={handleInput}
            required
          />
        </div>
        <div className="invalid-feedback">Please choose a username.</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="pass-word">
          <p>Password</p>
        </label>
        <input
          id="pass-word"
          className="form-control"
          type="password"
          name="pass"
          value={password}
          onChange={handleInput}
          required
        />
      </div>
      <div className="col-12">
        <button
          className="my-btn btn btn-primary"
          type="button"
          onClick={handleButton}
        >
          Login
        </button>
      </div>
    </form>
  ) : (
    <form className="p-4">
      <span className="text-center">
        <h4 className="">Login Form</h4>
        <hr />
        <p className="information-text">
          There is no need to login again, you are already in.
        </p>
      </span>
      <div className="col-12">
        <button
          className="my-btn btn btn-primary"
          type="button"
          onClick={handleButton}
        >
          Go to Home Page
        </button>
      </div>
    </form>
  );

  return <div className="wrapper bg-light rounded">{content}</div>;
};

export default Login;
