import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <ListEmployeeComponent />
    </div>
  );
};

export default App;
