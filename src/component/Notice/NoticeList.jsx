import React from "react";
import Notice from "./Notice";
import styles from "./Notice.module.css";

export default function NoticeList(props) {
  const list = props.data.map((item) => {
    return (
      <Notice
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        type={props.type}
        Period={item.Period}
        Target={item.target}
        contest={item.contest}
        Progress={item.Progress}
      />
    );
  });

  return (
    <div
      className={styles.noticeContainer}
    >
      {list}
    </div>
  );
}
