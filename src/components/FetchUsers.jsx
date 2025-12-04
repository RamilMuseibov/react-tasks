import React, { useState } from "react";
import styles from "../styles/fetch-users.module.css";

const arrowPrev = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m11 17-5-5 5-5" />
    <path d="m18 17-5-5 5-5" />
  </svg>
);

const arrowNext = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 17 5-5-5-5" />
    <path d="m13 17 5-5-5-5" />
  </svg>
);

export default function FetchUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  function fetcher(skip, limit) {
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setPage({
          total: data.total,
        });
      });
  }
  const pages = Math.ceil(page?.total / limit);

  function showDownload() {
    setIsLoading(true);

    setTimeout(() => {
      fetcher(skip, limit);

      setIsLoading(false);
    }, 1000);
  }

  function changePage(rewind) {
    const newSkip = skip + (rewind === "Next" ? limit : -limit);
    const newPage = currentPage + (rewind === "Next" ? 1 : -1);
    setSkip(newSkip);
    setCurrentPage(newPage);
    fetcher(newSkip, limit);
  }

  // function nextUsers() {
  //   const newSkip = skip + limit;
  //   setSkip(newSkip);
  //   fetcher(newSkip, limit);
  //   setCurrentPage(currentPage + 1);
  // }

  // function prevUsers() {
  //   const newSkip = skip - limit;
  //   setSkip(newSkip);
  //   fetcher(newSkip, limit);
  //   setCurrentPage(currentPage - 1);
  // }

  function limitUsers(value) {
    const newLimit = +value;
    setLimit(newLimit);
    setSkip(0);
    setCurrentPage(1);
    fetcher(0, newLimit);
  }

  console.log(users);

  return (
    <div className={styles["fetch-users"]}>
      <div className={styles["select-container"]}>
        <h1>FetchUsers</h1>
        <select
          value={limit}
          onChange={(e) => limitUsers(e.target.value)}
          className={styles["select"]}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className={styles["main"]}>
        <button onClick={showDownload} className={styles["btn"]} disabled={isLoading}>
          {isLoading === true ? "Downloading..." : "Request users"}
        </button>
        <div className={styles["users-card-container"]}>
          {users.map((user) => (
            <div key={user.id} className={styles["users-card"]}>
              <img src={user.image} />
              <div className={styles["users-fullname-container"]}>
                <div className={styles["users-firstname"]}>{user.firstName}</div>
                <div className={styles["users-lastname"]}>{user.lastName}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={styles[users.length === 0 ? "hidden" : "pagination_btn-container"]}
        >
          <button
            disabled={skip === 0 ? true : false}
            onClick={() => changePage("Prev")}
            className={styles["pagination_btn-prev"]}
          >
            {arrowPrev}Prev
          </button>
          <div>
            {currentPage} of {pages}
          </div>
          <button
            disabled={skip + limit >= page.total ? true : false}
            onClick={() => changePage("Next")}
            className={styles["pagination_btn-next"]}
          >
            Next{arrowNext}
          </button>
        </div>
      </div>
    </div>
  );
}
