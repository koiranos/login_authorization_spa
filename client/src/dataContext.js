import React, { useState, createContext } from "react";
import userData from "./usersData";

export const DataContext = createContext();

export const DataProvider = (props) => {
  // global state of the application
  const [data, setData] = useState({
    table: {
      tableContent: [
        "ID",
        "First Name",
        "Last Name",
        "Creation Date",
        "Administrator",
      ],
      users: userData,
    },
    username: "",
    isLoggedIn: false,
    token: "",
  });

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default userData;
