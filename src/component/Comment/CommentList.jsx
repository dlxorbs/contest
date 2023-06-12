import React from "react";
import CommentItem from "./CommentItem";
import styles from "./Comment.module.css";

function CommentList(props) {
  const list = props.comments.map(function (item) {
    return <CommentItem key={item.id} content={item.content} />;
  });
  return <div className={styles.CommentList_Wrapper}>{list}</div>;
}
export default CommentList;
