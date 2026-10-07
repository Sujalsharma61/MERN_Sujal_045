function StudentList({
  students,
  onEdit,
  onDelete
}) {

  return (
    <div className="student-list">

      <h2>Student Records</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Year</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {students.map((s) => (

            <tr key={s._id}>

              <td>{s.name}</td>

              <td>{s.rollNo}</td>

              <td>{s.course}</td>

              <td>{s.year}</td>

              <td>{s.email}</td>

              <td>

                <button
                  onClick={() => onEdit(s)}
                >
                  Edit
                </button>


                <button
                  onClick={() => onDelete(s._id)}
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
}


export default StudentList;