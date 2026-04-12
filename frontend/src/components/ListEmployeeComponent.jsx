import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>

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
          {employees.map((employee) => (
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
