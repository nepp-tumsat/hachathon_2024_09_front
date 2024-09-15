// CommentSection.js
import React from 'react';

const CommentSection = ({ newComment, onCommentChange }) => {
  return (
    <div className="comment-section">
      <textarea
        value={newComment}
        onChange={(e) => onCommentChange(e.target.value)}
        placeholder="コメントを入力..."
        rows="4"
      />
    </div>
  );
};

export default CommentSection;
