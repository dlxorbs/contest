import React from "react";
import styles from "./Comment.module.css";

export default function CommentItem(props) {
  return (
    <div className={styles.Comment_Wrapper}>
      <div className={styles.profile}>
        <div className={styles.imgcon}></div>

        <div className={styles.textcon}>
          <p> wksehs123 </p>
        </div>
      </div>

      <p className={styles.Comment_Content}>{props.content}</p>
    </div>
  );
}
