import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [filterStatus, setFilterStatus] = useState("ALL");

  const navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log("Deleting ID:", id);

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (confirmDelete) {
      deleteEmployee(id)
        .then(() => {
          console.log("Deleted successfully");
          listEmployees()
            .then((response) => {
              setEmployees(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error("Delete error:", error);
        });
    }
  }

  const filteredEmployees =
    filterStatus === "ALL"
      ? employees
      : employees.filter((employee) => employee.status === filterStatus);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <button className="btn btn-primary" onClick={addNewEmployee}>
          Add Employee
        </button>
        <div>
          <label className="form-label me-2">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-select"
            style={{ width: "200px" }}
          >
            <option value="ALL">All</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
      </div>

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.dept}</td>
              <td>
                <span
                  className={
                    employee.status === "ACTIVE"
                      ? "text-success fw-bold"
                      : "text-danger fw-bold"
                  }
                >
                  {employee.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
