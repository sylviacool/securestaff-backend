import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// GET ALL
export const listEmployees = () => axios.get(REST_API_BASE_URL);

// CREATE
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

//GET ONE
export const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE_URL + "/" + employeeId);

// UPDATE
export const updateEmployee = (employeeId, employee) =>
  axios.put(REST_API_BASE_URL + "/" + employeeId, employee);

// DELETE
export const deleteEmployee = (employeeId) =>
  axios.delete(REST_API_BASE_URL + "/" + employeeId);
