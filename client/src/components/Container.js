import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import PresentationContainer from "./PresentationContainer";

import { DataContext } from "../dataContext";

// Container Component
// handles login status and resolves logout
// fetches token to server to get username
// provides presentational component with username

const Container = () => {
  const history = useHistory();
  const [data, setData] = useContext(DataContext);
  const [user, setUser] = useState("");

  const handleLogout = () => {
    setData((prevData) => ({
      ...prevData,
      username: "",
      isLoggedIn: false,
      token: "",
    }));
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "");
    document.querySelector(".logout-btn").classList.add("invisible");
    history.push("/");
  };

  useEffect(() => {
    const getUserFromToken = async () => {
      const url = "/api/user";
      const headers = {
        Authorization: `Bearer ${data.token}`,
      };
      const response = await axios.post(url, null, {
        headers,
      });
      setUser(response.data.user);
    };

    if (data.isLoggedIn) {
      getUserFromToken();
    }
  }, [data.token]);

  return <PresentationContainer username={user} handleLogout={handleLogout} />;
};
export default Container;
