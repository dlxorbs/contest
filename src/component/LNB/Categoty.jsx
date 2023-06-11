import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Lnb.module.css";

export default function Category(props) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [clickedsecIndex, setClickedsecIndex] = useState(0);
  const navigate = useNavigate();

  const handleItemClick = (clickedItem) => {
    // 부모 컴포넌트로 클릭한 값 전달
    props.onItemClick(clickedItem);
  };

  const list = props.data.map((item, index) => {
    const categoryClassName = clickedIndex === index ? styles.clicked : "";
    const display = clickedIndex === index ? styles.display : "";
    const lists = item.secondary.map((items, index2) => {
      const bold = clickedsecIndex === index2 ? styles.bold : "";

      return (
        <li
          key={index2}
          className={bold}
          onClick={(e) => {
            setClickedsecIndex(index2);
            handleItemClick(items); // 클릭한 값을 전달
          }}
        >
          {items}
        </li>
      );
    });

    const handleCategoryClick = () => {
      if (lists.length > 0) {
        setClickedIndex(index);
        setClickedsecIndex(0);
        handleItemClick(lists[0].props.children);
      } else {
        console.log("a");
      }
    };

    return (
      <div key={item.id} className={styles.categoryWrapper}>
        <li className={categoryClassName} onClick={handleCategoryClick}>
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
