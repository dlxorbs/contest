import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "../Button/Button";
import styles from "./TextInput.module.css";

export default function CommentInput(props) {
  return (
    <div className={styles.Comment_Container}>
      <TextInput
        height={102}
        minheight={102}
        fontsize={16}
        value={props.value}
        placeholder={`댓글을 작성해주세요.`}
        onChange={props.onChange}
      />

      <Button
        margin="0 24px 20px"
        title="댓글 작성하기"
        onClick={function () {
          props.value == "" ? alert("댓글을 작성해주세요.") : props.reply();
        }}
      />
    </div>
  );
}
