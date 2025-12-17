import React, { useEffect, useState } from "react";
import styles from "../../styles/use-effect-tasks/request-comments.module.css";

export default function RequestComments() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  console.log(posts);

  useEffect(() => {
    fetch(`https://dummyjson.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

  const neededComments = comments.filter((comment) => comment.postId === selectedPostId);

  return (
    <div className={styles["request-comments"]}>
      <h1>RequestComments</h1>

      {posts.map((post) => {
        return (
          <RenderPosts
            key={post.id}
            isActive={isActive}
            neededComments={neededComments}
            post={post}
            selectedPostId={selectedPostId}
            setIsActive={setIsActive}
            setSelectedPostId={setSelectedPostId}
          />
        );
      })}
    </div>
  );
}

function RenderPosts({
  isActive,
  neededComments,
  post,
  selectedPostId,
  setIsActive,
  setSelectedPostId,
}) {
  return (
    <button
      onClick={() => {
        setIsActive(isActive === false && true);
        setSelectedPostId(selectedPostId === post.id ? null : post.id);
        console.log(neededComments);
      }}
      className={styles["posts-container"]}
    >
      <div>
        <h2 className={styles["post-title"]}>{post.title}</h2>
      </div>
      <p className={styles["post-subtitle"]}>{post.body}</p>
      {selectedPostId === post.id && neededComments.length !== 0 && (
        <RenderComms neededComments={neededComments} />
      )}
    </button>
  );
}

function RenderComms({ neededComments }) {
  return (
    <div className={styles["comments-container"]}>
      <h2>{neededComments.length !== 0 && "Comments:"}</h2>

      {neededComments.map((neededComment) => {
        return (
          <p key={neededComment.id} className={styles["comment-body"]}>
            {neededComment.body}
          </p>
        );
      })}
    </div>
  );
}
