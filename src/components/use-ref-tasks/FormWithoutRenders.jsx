import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/form-without-renders.module.css";

export default function FormWithoutRenders() {
  console.log("render");

  const dataUser = useRef({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  });
  console.log(dataUser.current);


  return (
    <div className={styles["form-without-renders"]}>
      <h1>FormWithoutRenders</h1>

      <form className={styles["form-container"]}>
        <label>
          <div>FirstName</div>
          <input
            onChange={(e) => (dataUser.current.firstName = e.target.value)}
            defaultValue={dataUser.current.firstName}
            type="text"
            placeholder="Enter first name..."
          />
        </label>

        <label>
          <div>LastName</div>
          <input
            onChange={(e) => (dataUser.current.lastName = e.target.value)}
            defaultValue={dataUser.current.lastName}
            type="text"
            placeholder="Enter last name..."
          />
        </label>

        <label>
          <div>Login</div>
          <input
            onChange={(e) => (dataUser.current.login = e.target.value)}
            defaultValue={dataUser.current.login}
            type="text"
            placeholder="Enter login..."
          />
        </label>

        <label>
          <div>Password</div>
          <input
            onChange={(e) => (dataUser.current.password = e.target.value)}
            defaultValue={dataUser.current.password}
            type="text"
            placeholder="Enter password..."
          />
        </label>
      </form>

      <button onClick={() => console.log(dataUser.current)} className={styles["btn"]}>
        Send
      </button>
    </div>
  );
}
