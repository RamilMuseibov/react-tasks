import React, { useState } from "react";
import styles from "../../styles/use-state-tasks/fetch-users.module.css";

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

export default function PaginatedList(props) {
  const entity = props.entity;
  const EntityCard = props.entityCard;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  function fetcher(skip, limit) {
    setIsLoading(true);

    fetch(`https://dummyjson.com/${entity}?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data[entity]);
        setTotal(data.total);
      });
  }
  const pages = Math.ceil(total / limit);

  function nextPage() {
    const newSkip = skip + limit;
    setSkip(newSkip);
    fetcher(newSkip, limit);
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    const newSkip = skip - limit;
    setSkip(newSkip);
    fetcher(newSkip, limit);
    setCurrentPage(currentPage - 1);
  }

  function setPageSize(value) {
    const newLimit = +value;
    setLimit(newLimit);
    setSkip(0);
    setCurrentPage(1);
    fetcher(0, newLimit);
  }

  return (
    <div className={styles["fetch-users"]}>
      <div className={styles["select-container"]}>
        <h1>PaginatedList</h1>
        <select
          disabled={isLoading}
          value={limit}
          onChange={(e) => setPageSize(e.target.value)}
          className={styles["select"]}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className={styles["main"]}>
        <button
          onClick={() => fetcher(skip, limit)}
          className={styles["btn"]}
          disabled={isLoading}
        >
          {isLoading ? "Downloading..." : "Request users"}
        </button>
        <div className={styles["users-card-container"]}>
          {data.map((item) => (
            <EntityCard key={item.id} data={item} />
          ))}
        </div>
        <div
          className={styles[data.length === 0 ? "hidden" : "pagination_btn-container"]}
        >
          <button
            disabled={skip === 0 || isLoading}
            onClick={prevPage}
            className={styles["pagination_btn-prev"]}
          >
            {arrowPrev}Prev
          </button>
          <div>
            {currentPage} of {pages}
          </div>
          <button
            disabled={skip + limit >= total || isLoading}
            onClick={nextPage}
            className={styles["pagination_btn-next"]}
          >
            Next{arrowNext}
          </button>
        </div>
      </div>
    </div>
  );
}

export function UserCard(props) {
  const user = props.data;

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

export function ProductCard(props) {
  const product = props.data;

  return (
    <div key={product.id} className={styles["users-card"]}>
      <img src={product.images[0]} />
      <div className={styles["users-fullname-container"]}>
        <div className={styles["users-firstname"]}>{product.title}</div>
      </div>
    </div>
  );
}
