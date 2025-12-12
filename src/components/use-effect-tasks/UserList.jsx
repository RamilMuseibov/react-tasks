import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/user-list.module.css";

export default function UserList() {
  console.log("render");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/users?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setIsLoading(false);
      });

    console.log("Сработает только один раз");
  }, []);

  return (
    <div className={styles["fetch-users"]}>
      <h1>UserList</h1>

      <div className={styles["users-card-container"]}>
        {isLoading && <div>Loading...</div>}

        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div>{count}</div>
      <button className={styles["btn"]} onClick={() => setCount(count + 1)}>
        icn
      </button>
    </div>
  );
}

export function UserCard({ user }) {
  return (
    <div key={user.id} className={styles["users-card"]}>
      <img src={user.image} />
      <div className={styles["users-fullname-container"]}>
        <div className={styles["users-firstname"]}>{user.firstName}</div>
        <div className={styles["users-lastname"]}>{user.lastName}</div>
      </div>
    </div>
  );
}
