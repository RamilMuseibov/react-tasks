import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/request-comments2.module.css";

export default function RequestComments2() {
  const [activePostId, setActivePostId] = useState(null);

  return (
    <div className={styles["request-comments"]}>
      <h1>RequestComments</h1>
      <div className={styles["container"]}>
        <Posts setActivePostId={setActivePostId} activePostId={activePostId} />

        <Comments activePostId={activePostId} />
      </div>
    </div>
  );
}

function Posts({ setActivePostId, activePostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?delay=1000`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className={styles["posts-container"]}>
      {posts.map((post) => {
        return (
          <button
            key={post.id}
            onClick={() => {
              setActivePostId(activePostId === post.id ? null : post.id);
            }}
            className={styles["post-card"]}
          >
            <div>
              <h2 className={styles["post-title"]}>{post.title}</h2>
            </div>
            <p className={styles["post-subtitle"]}>{post.body}</p>
          </button>
        );
      })}
    </div>
  );
}

function Comments({ activePostId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setComments([]);

    if (activePostId === null) {
      return;
    }

    setIsLoading(true);

    fetch(`https://dummyjson.com/comments/post/${activePostId}?delay=1000`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePostId]);

  return (
    <div className={styles["comments-container"]}>
      <h2>{comments.length !== 0 && "Comments:"}</h2>
      {isLoading && <h2>Loading comments...</h2>}
      {comments.map((comment) => {
        return (
          <div key={comment.id} className={styles["comments_user-info"]}>
            <h3 className={styles["user-name"]}>{comment.user.fullName}: </h3>
            <p key={comment.id} className={styles["comment-body"]}>
              {comment.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
