import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "../Button/Button";
import styles from "./TextInput.module.css";

export default function CommentInput() {
  const [comment, setComment] = useState("");
  return (
    <div className={styles.Comment_Container}>
      <TextInput
        height={102}
        minheight={102}
        fontsize={16}
        value={comment}
        placeholder={`댓글을 작성해주세요.`}
        onChange={function (e) {
          setComment(e.target.value);
          e.target.style.height = "94px";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />

      <Button
        margin="0 24px 20px"
        title="댓글 작성하기"
        onClick={function () {
          comment == ""
            ? alert("댓글을 작성해주세요.")
            : console.log("작성됨!");
        }}
      />
    </div>
  );
}
