import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [quickTasks, setQuickTasks] = useState(
    JSON.parse(localStorage.getItem("quickTasks") || "[]")
  );
  const [newTask, setNewTask] = useState("");

  // タスクの保存
  useEffect(() => {
    localStorage.setItem("quickTasks", JSON.stringify(quickTasks));
  }, [quickTasks]);

  // 新しいタスクを追加
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setQuickTasks([
        ...quickTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // タスクの完了状態を切り替え
  const toggleTaskComplete = (id) => {
    setQuickTasks(
      quickTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // タスクを削除
  const deleteTask = (id) => {
    setQuickTasks(quickTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          ></path>
        </svg>
        タスク
      </h2>
      <form onSubmit={addTask} className="mb-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="新しいタスクを追加..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-r-md transition-colors"
        >
          追加
        </button>
      </form>
      <div className="overflow-y-auto max-h-64">
        <ul className="space-y-2">
          {quickTasks.length === 0 ? (
            <li className="text-gray-400 text-center py-2">
              タスクがありません
            </li>
          ) : (
            quickTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-2 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskComplete(task.id)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 rounded mr-2"
                  />
                  <span
                    className={
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
