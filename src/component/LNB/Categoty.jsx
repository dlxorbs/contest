import React, { useState } from "react";
import styles from "./Lnb.module.css";

export default function Category(props) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [clickedsecIndex, setClickedsecIndex] = useState(0);

  const list = props.data.map((item, index) => {
    const categoryClassName = clickedIndex === index ? styles.clicked : "";
    const display = clickedIndex === index ? styles.display : "";
    const lists = item.secondary.map((items, index2) => {
      // 선택된 개별 리스트에 대해 bold 클래스 적용
      const bold = clickedsecIndex === index2 ? styles.bold : "";

      console.log(bold);
      return (
        <li
          className={` ${bold}`}
          onClick={(e) => {
            setClickedsecIndex(index2);
          }}
        >
          {items}
        </li>
      );
    });

    return (
      <div key={item.id} className={styles.categoryWrapper}>
        <li
          className={categoryClassName}
          onClick={(e) => {
            setClickedIndex(index);
            // nav()형식으로 제작
          }}
        >
          {item.title}
        </li>
        <div className={`${display} ${styles.innerCategory}`}>
          <ul>{lists}</ul>
        </div>
      </div>
    );
  });

  return <div className={styles.cateCon}>{list}</div>;
}
