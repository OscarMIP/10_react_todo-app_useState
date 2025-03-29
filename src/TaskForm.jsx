import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both title and description are required.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
    };

    onAddTask(newTask); 
    setTitle(""); 
    setDescription("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Task Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Task Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="status">Task Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}