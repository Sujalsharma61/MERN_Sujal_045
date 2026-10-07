const Student = require("../models/Student");

// ADD STUDENT
const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};


// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({
      createdAt: -1
    });

    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};


// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(updated);

  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};


// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};


module.exports = {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
};