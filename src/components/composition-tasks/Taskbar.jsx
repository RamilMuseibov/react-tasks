import React, { useState } from "react";

export default function Taskbar() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Изучить React компоненты", completed: true, priority: "high" },
    { id: 2, text: "Создать ToDo приложение", completed: false, priority: "high" },
    { id: 3, text: "Написать тесты", completed: false, priority: "medium" },
    {
      id: 4,
      text: "Оптимизировать производительность",
      completed: false,
      priority: "low",
    },
    { id: 5, text: "Изучить Redux", completed: true, priority: "medium" },
  ]);

  const [filter, setFilter] = useState("all"); // all, active, completed
  const [sortBy, setSortBy] = useState("priority"); // priority, name

  const getPriorityValue = (priority) => {
    const values = { high: 3, medium: 2, low: 1 };
    return values[priority] || 0;
  };

  let filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "priority") {
      return getPriorityValue(b.priority) - getPriorityValue(a.priority);
    }
    return a.text.localeCompare(b.text);
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const highPriority = tasks.filter((t) => t.priority === "high").length;

    return { total, completed, highPriority };
  };

  const stats = getStats();

  return (
    <div className="app">
      <h1>Управление задачами</h1>

      <Controls tasks={tasks} setFilter={setFilter} setSortBy={setSortBy} />
      <TaskForm addTask={addTask} />

      <TaskList
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <Stats stats={stats} />
    </div>
  );
}

function Controls({ tasks, sortBy, setFilter, setSortBy }) {
  return (
    <div className="controls">
      <div className="filters">
        <button onClick={() => setFilter("all")}>Все ({tasks.length})</button>
        <button onClick={() => setFilter("active")}>
          Активные ({tasks.filter((t) => !t.completed).length})
        </button>
        <button onClick={() => setFilter("completed")}>
          Завершенные ({tasks.filter((t) => t.completed).length})
        </button>
      </div>

      <div className="sort">
        <label>Сортировать по:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Приоритету</option>
          <option value="name">Названию</option>
        </select>
      </div>
    </div>
  );
}

function TaskForm({ addTask }) {
  return (
    <div className="task-form">
      <input type="text" id="newTask" placeholder="Новая задача..." />
      <select id="priority">
        <option value="high">Высокий</option>
        <option value="medium">Средний</option>
        <option value="low">Низкий</option>
      </select>
      <button
        onClick={() => {
          const input = document.getElementById("newTask");
          const select = document.getElementById("priority");
          if (input.value.trim()) {
            addTask(input.value.trim(), select.value);
            input.value = "";
          }
        }}
      >
        Добавить задачу
      </button>
    </div>
  );
}

function TaskList({ filteredTasks, toggleTask, deleteTask }) {
  return (
    <div className="tasks-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

function TaskItem({ toggleTask, deleteTask, task }) {
  return (
    <div className={`task-item ${task.priority} ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span className="task-text">{task.text}</span>
      <span className={`priority-badge ${task.priority}`}>
        {task.priority === "high"
          ? "Высокий"
          : task.priority === "medium"
          ? "Средний"
          : "Низкий"}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Удалить
      </button>
    </div>
  );
}

function Stats({ stats }) {
  return (
    <div className="stats">
      <StatCard stats={stats} />
    </div>
  );
}

function StatCard({ stats }) {
  return (
    <>
      <div className="stat-card">
        <h3>Всего задач</h3>
        <p className="stat-number">{stats.total}</p>
      </div>
      <div className="stat-card">
        <h3>Выполнено</h3>
        <p className="stat-number">{stats.completed}</p>
        <p className="stat-percent">
          {Math.round((stats.completed / stats.total) * 100)}%
        </p>
      </div>
      <div className="stat-card">
        <h3>Высокий приоритет</h3>
        <p className="stat-number">{stats.highPriority}</p>
      </div>
    </>
  );
}
