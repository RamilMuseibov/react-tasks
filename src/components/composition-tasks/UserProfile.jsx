import React from "react";

const projects = [
  { id: 1, name: "Интернет-магазин", status: "Завершен" },
  { id: 2, name: "Мобильное приложение", status: "В процессе" },
  { id: 3, name: "Админ-панель", status: "Планируется" },
];

export default function UserProfile() {
  return (
    <div className="app">
      <UserProfile
        user={{
          name: "Анна Иванова",
          age: 28,
          profession: "Frontend разработчик",
          location: "Москва",
          email: "anna@example.com",
          avatar: "https://i.pravatar.cc/150?img=1",
        }}
      />
      <SkillsList skills={["JavaScript", "React", "CSS", "TypeScript"]} />
      <ProjectsList projects={projects} />
      <Statistics projects={projects} />
    </div>
  );

  function UserProfile({ user }) {
    return (
      <div className="profile">
        <img src={user.avatar} alt="Аватар" className="avatar" />
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>Возраст: {user.age}</p>
          <p>Профессия: {user.profession}</p>
          <p>Город: {user.location}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    );
  }

  function SkillsList({ skills }) {
    return (
      <div className="skills">
        <h3>Навыки:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

  function ProjectsList({ projects }) {
    return (
      <div className="projects">
        <h3>Проекты:</h3>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h4>{project.name}</h4>
            <p>Статус: {project.status}</p>
          </div>
        ))}
      </div>
    );
  }

  function Statistics({ projects }) {
    return (
      <div className="statistics">
        <h3>Статистика:</h3>
        <p>Всего проектов: {projects.length}</p>
        <p>Завершенных: {projects.filter((p) => p.status === "Завершен").length}</p>
      </div>
    );
  }
}
function map(array) {
  const newArr = [];

  function mapper(item) {
    return item ** 2;
  }

  let i = 0;
  while (i < array.length) {
    newArr.push(mapper(array[i]));
    i++;
  }

  return newArr;
}

const arr = [1, 2, 3, 4, 5];
const arr1 = [6, 7, 9, 3, 3, 4, 9, 1];
const arr2 = [5, 7, 9];

const mapper = (item) => {
  return item + 5;
};

arr.map(() => {});

const newArr = map(arr, mapper);

() => {};

const newArr1 = map(arr1, function mapper(item) {
  return item + 5;
});
const newArr3 = map(arr2, function mapper(item) {
  return Math.sqrt(item);
});

function pifagor(a, b) {
  const c = Math.sqrt(a ** 2 + b ** 2);

  return c;
}
pifagor(a, b);
