import { useState, useEffect } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";

import {
  getAllStudents,
  deleteStudent
} from "./api/studentApi";

import "./App.css";


function App() {

  const [students, setStudents] = useState([]);

  const [editingStudent, setEditingStudent] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");


  const fetchStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };


  useEffect(() => {
    fetchStudents();
  }, []);


  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };


  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="container">

      <h1>Student Management System</h1>


      <StudentForm
        onStudentAdded={fetchStudents}
        editingStudent={editingStudent}
        clearEdit={() => setEditingStudent(null)}
      />


      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />


      <StudentList
        students={filteredStudents}
        onEdit={setEditingStudent}
        onDelete={handleDelete}
      />

    </div>
  );
}


export default App;