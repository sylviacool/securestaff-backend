import axios from "axios";

const REST_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// GET ALL
export const listEmployees = () => axios.get(REST_API_BASE_URL);

// CREATE
export const createEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

//GET ONEclear

export const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE_URL + "/" + employeeId);

// UPDATE
export const updateEmployee = (employeeId, employee) =>
  axios.put(REST_API_BASE_URL + "/" + employeeId, employee);

// DELETE
export const deleteEmployee = (employeeId) =>
  axios.delete(REST_API_BASE_URL + "/" + employeeId);
