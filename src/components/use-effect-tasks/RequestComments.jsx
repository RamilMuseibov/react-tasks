import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/request-comments.module.css";

export default function RequestComments() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isActive, setIsActive] = useState(null);

  console.log(isActive);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  console.log(posts);

  useEffect(() => {
    if (isActive === null) {
      setComments([]);
      return;
    }

    fetch(`https://dummyjson.com/comments/post/${isActive}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [isActive]);

  return (
    <div className={styles["request-comments"]}>
      <h1>RequestComments</h1>

      {posts.map((post) => {
        return (
          <RenderPosts
            key={post.id}
            comments={comments}
            isActive={isActive}
            post={post}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
}

function RenderPosts({ isActive, post, setIsActive, comments }) {
  return (
    <button
      onClick={() => {
        setIsActive(isActive === post.id ? null : post.id);
      }}
      className={styles["posts-container"]}
    >
      <div>
        <h2 className={styles["post-title"]}>{post.title}</h2>
      </div>
      <p className={styles["post-subtitle"]}>{post.body}</p>
      {isActive === post.id && <RenderComms isActive={isActive} comments={comments} />}
    </button>
  );
}

function RenderComms({ isActive, comments }) {
  const neededComments = comments.filter((comment) => comment.postId === isActive);

  return (
    <div className={styles["comments-container"]}>
      <h2>{isActive !== 0 && "Comments:"}</h2>

      {neededComments.map((neededComment) => {
        return (
          <div key={neededComment.id} className={styles["comments_user-info"]}>
            <h3 className={styles["user-name"]}>{neededComment.user.fullName}: </h3>
            <p key={neededComment.id} className={styles["comment-body"]}>
              {neededComment.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
