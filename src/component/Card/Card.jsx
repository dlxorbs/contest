import React from "react";
import CardThumb from "./CardThumb";
import NameTag from "./NameTag";
import Modal from "../../Page/ModalPage";
import Button from "../Button/Button";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <CardThumb
        thumbnail={props.thumbnail}
        title={props.title}
        onClick={props.onClick}
      />
      {props.type === "Archive" && (
        <NameTag major={props.major} studentinfo={props.studentinfo} />
      )}
      {props.type === "Vote" && (
        <Button className={"round"} title={"투표하기"} />
      )}
      {props.type === "Now" && <NameTag major={props.major} display={"none"} />}
    </div>
  );
}
