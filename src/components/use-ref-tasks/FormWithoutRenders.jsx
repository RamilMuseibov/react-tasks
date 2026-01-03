import React, { useRef } from "react";
import styles from "../../styles/use-ref-tasks/form-without-renders.module.css";

export default function FormWithoutRenders() {
  console.log("render");

  const form = useRef();

  console.log(new FormData());

  return (
    <div className={styles["form-without-renders"]}>
      <h1>FormWithoutRenders</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(Object.fromEntries(new FormData(form.current)));
        }}
        ref={form}
        className={styles["form-container"]}
      >
        <label>
          <div>FirstName</div>
          <input name="firstName" type="text" placeholder="Enter first name..." />
        </label>

        <label>
          <div>LastName</div>
          <input name="lastName" type="text" placeholder="Enter last name..." />
        </label>

        <label>
          <div>Login</div>
          <input name="login" type="text" placeholder="Enter login..." />
        </label>

        <label>
          <div>Password</div>
          <input name="password" type="password" placeholder="Enter password..." />
        </label>

        <div>
          <button type="submit" className={styles["btn"]}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
