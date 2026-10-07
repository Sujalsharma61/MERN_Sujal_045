const express = require("express");

const router = express.Router();

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");


// ADD
router.post("/", addStudent);

// GET ALL
router.get("/", getStudents);

// UPDATE
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);


module.exports = router;