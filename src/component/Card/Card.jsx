import React from "react";
import CardThumb from "./CardThumb";
import NameTag from "./NameTag";
import Modal from "../../Page/ModalPage";
import Button from "../Button/Button";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card} style={props.style}>
      <CardThumb
        type={props.type}
        thumbnail={props.thumbnail}
        major={props.major}
        title={props.title}
        studentinfo={props.studentinfo}
        onClick={props.onClick}
        display={props.type !== "Archive" && "none"}
      />

      {props.type === "Vote" && (
        <Button className={"round"} title={"투표하기"} />
      )}
      {props.type !== "Vote" && <NameTag title={props.title} />}
    </div>
  );
}
