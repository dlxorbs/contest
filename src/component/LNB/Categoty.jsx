import React, { useState } from "react";
import styles from "./Lnb.module.css";
import $ from "jquery";

export default function Category(props) {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [clickedsecIndex, setClickedsecIndex] = useState(-1);

  const handleClick = (index) => {
    setClickedIndex(index); // 클릭한 항목의 인덱스로 선택 상태 변경
  };

  const sechandleClick = (index) => {
    setClickedsecIndex(index); // 클릭한 개별 리스트의 인덱스로 선택 상태 변경
  };

  const list = props.data.map((item, index) => {
    const isClicked = clickedIndex === index;
    const categoryClassName = isClicked ? styles.clicked : "";

    const lists = item.Info.map((items, index2) => {
      const bold = clickedsecIndex === index2 ? styles.bold : ""; // 선택된 개별 리스트에 대해 bold 클래스 적용
      return (
        <li
          className={bold}
          onClick={(e) => {
            console.log(index2);
            sechandleClick(index2);
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
            console.log(index);
            handleClick(index); // 클릭한 항목의 인덱스를 전달
          }}
        >
          {item.title}
        </li>
        <div className={styles.innerCategory}>
          <ul>{lists}</ul>
        </div>
      </div>
    );
  });

  return <div className={styles.cateCon}>{list}</div>;
}
