import React, { useContext } from "react";

import { DataContext } from "../dataContext";

import Home from "./Home";
import Inaccessible from "./Inaccessible";

// Container Component
// provides presentational components with the correct data from state

const HomeContainer = (props) => {
  const [data, setData] = useContext(DataContext);

  return data.isLoggedIn ? (
    <Home content={data.table.users} columnNames={data.table.tableContent} />
  ) : (
    <Inaccessible />
  );
};

export default HomeContainer;
