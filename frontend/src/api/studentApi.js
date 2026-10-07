import axios from "axios";

const API_URL = "http://localhost:5000/api/students";


// GET ALL STUDENTS
export const getAllStudents = () => {
  return axios.get(API_URL);
};


// ADD STUDENT
export const createStudent = (data) => {
  return axios.post(API_URL, data);
};


// UPDATE STUDENT
export const updateStudent = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};


// DELETE STUDENT
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};