import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const USER_ID = "6a48be2d19a4dc3d6788b0df";

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    user: USER_ID,
  });

  const [editingId, setEditingId] = useState(null);

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(
        `http://localhost:5000/api/tasks/${editingId}`,
        formData
      );

      alert("Task Updated Successfully");
    } else {
      await axios.post(
        "http://localhost:5000/api/tasks/add",
        formData
      );

      alert("Task Added Successfully");
    }

    setFormData({
      title: "",
      description: "",
      user: USER_ID,
    });

    setEditingId(null);

    loadTasks();
  };

  const editTask = (task) => {
    setEditingId(task._id);

    setFormData({
      title: task.title,
      description: task.description,
      user: USER_ID,
    });
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    loadTasks();
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Task Dashboard</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Task Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          {editingId ? "Update Task" : "Add Task"}
        </button>

      </form>

      <hr />

      {tasks.map((task) => (

        <div
          className="card p-3 mb-3"
          key={task._id}
        >

          <h4>{task.title}</h4>

          <p>{task.description}</p>

          <p>
            <b>Status:</b> {task.status}
          </p>

          <button
            className="btn btn-warning me-2"
            onClick={() => editTask(task)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default Dashboard;