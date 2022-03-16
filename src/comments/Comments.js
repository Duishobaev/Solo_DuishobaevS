import React, { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from "../api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./comments.css";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commendId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commendId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  return (
    <div className="comments">
      <h3 className="comments-title">Отзывы</h3>
      <div className="comment-form-title">Добавь свой комментарий</div>
      <CommentForm submitLabel="Опубликовать" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
