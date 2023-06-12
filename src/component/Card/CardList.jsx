import React from "react";
import Card from "./Card";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

export default function CardList(props) {
  const nav = useNavigate();

  const handleCardClick = (item) => {
    props.openModal(item);
  };

  const list = props.data.map((item) => {
    return (
      <Card
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        type={props.type}
        major={item.major}
        studentinfo={item.studentinfo}
        onClick={() => handleCardClick(item)}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}
