import React, { useContext, useEffect } from "react";
import axios from "axios";

import Login from "./Login";

import { DataContext } from "../dataContext";

// Container Component
// handles the fetching user input to server and receiving respective token
// provides presentational component with username

const LoginContainer = () => {
  const [data, setData] = useContext(DataContext);

  const getToken = async (username, password) => {
    const url = "/api/login";
    const params = {
      username,
      password,
    };
    const dataRecieved = await axios.post(url, null, {
      params,
    });

    setData((prevData) => ({
      ...prevData,
      token: dataRecieved.data.token,
    }));
    localStorage.setItem("token", dataRecieved.data.token);
  };

  const handleButtonClick = (username, password) => {
    let tempUser = username.trim();
    let tempPass = password.trim();

    // handling of different situations
    if (tempUser !== "" && tempPass !== "") {
      getToken(username, password);
      setData((prevData) => ({
        ...prevData,
        isLoggedIn: true,
      }));
      localStorage.setItem("isLoggedIn", "true");
      const obj = {
        status: true,
        error: "none",
      };
      return obj;
    } else if (tempUser === "" && tempPass !== "") {
      const obj = {
        status: false,
        error: "username",
        message: "Warning! There is an error with username",
      };
      return obj;
    } else if (tempUser !== "" && tempPass === "") {
      const obj = {
        status: false,
        error: "password",
        message: "Warning! There is an error with password",
      };
      return obj;
    } else {
      const obj = {
        status: false,
        error: "both",
        message: "Warning! There is an error with username and password",
      };
      return obj;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setData((prevData) => ({
        ...prevData,
        isLoggedIn: true,
        token: localStorage.getItem("token"),
      }));
    }
  }, []);

  return (
    <Login username={data.username} handleButtonClick={handleButtonClick} />
  );
};

export default LoginContainer;
