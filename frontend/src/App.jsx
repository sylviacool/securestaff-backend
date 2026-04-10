import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*//http://localhost:3000 */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>

          {/*//http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>

          {/*//http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          {/*//http://localhost:3000/edit-employee */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
