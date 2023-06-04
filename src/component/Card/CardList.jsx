import React from "react";
import Card from "./Card";
import styles from "./card.module.css";

export default function CardList(props) {
  const list = props.data.map((item) => {
    return (
      <Card
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        type={props.type}
        major={item.major}
        studentinfo={item.studentinfo}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}
