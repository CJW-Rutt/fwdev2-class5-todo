import React from "react";

function Todo({ task, toggleComplete, deleteTask }) {
  const isCompleted = task.completed;

  const toggleTaskCompletion = () => {
    toggleComplete(task.id);
  };

  return (
    <div className={`todo ${isCompleted ? "completed" : ""}`}>
      {isCompleted ? (
        <span className="completed-text">DONE! {task.text}</span>
      ) : (
        <div className="task-line">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={toggleTaskCompletion}
          />
          <span className="task-text">{task.text}</span>
        </div>
      )}
      <div className="button-container">
        <button onClick={() => deleteTask(task.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
