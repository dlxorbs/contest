import React from "react";
import Notice from "./Notice";
import styles from "./Notice.module.css";
import { useNavigate } from "react-router-dom";
export default function NoticeList(props) {
  const nav = useNavigate();
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
        onNoticeClick={function () {
          console.log(item.id);
          nav("/Notice/" + item.id);
        }}
      />
    );
  });

  return <div className={styles.noticeContainer}>{list}</div>;
}
