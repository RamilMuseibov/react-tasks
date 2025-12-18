import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/request-comments.module.css";

export default function RequestComments() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [activePostId, setActivePostId] = useState(null);

  console.log(activePostId);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  console.log(posts);

  useEffect(() => {
    if (activePostId === null) {
      setComments([]);
      return;
    }

    fetch(`https://dummyjson.com/comments/post/${activePostId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [activePostId]);

  return (
    <div className={styles["request-comments"]}>
      <h1>RequestComments</h1>

      {posts.map((post) => {
        return (
          <Posts
            key={post.id}
            comments={comments}
            activePostId={activePostId}
            post={post}
            setActivePostId={setActivePostId}
          />
        );
      })}
    </div>
  );
}

function Posts({ activePostId, post, setActivePostId, comments }) {
  return (
    <button
      onClick={() => {
        setActivePostId(activePostId === post.id ? null : post.id);
      }}
      className={styles["posts-container"]}
    >
      <div>
        <h2 className={styles["post-title"]}>{post.title}</h2>
      </div>
      <p className={styles["post-subtitle"]}>{post.body}</p>
      {activePostId === post.id && (
        <Comments activePostId={activePostId} comments={comments} />
      )}
    </button>
  );
}

function Comments({ activePostId, comments }) {
  return (
    <div className={styles["comments-container"]}>
      <h2>{activePostId !== 0 && "Comments:"}</h2>

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
