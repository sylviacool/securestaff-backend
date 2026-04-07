import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
