import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Page.module.css";
import Button from "../component/Button/Button";
import data from "../data/data.json";
export default function NoticeViewPage() {
  const nav = useNavigate();
  const postId = useParams().id;
  console.log(postId);

  return (
    <div className={styles.noticeWrapper}>
      <div className={styles.noticeCon}>
        <div className={styles.head}>
          <div className={styles.goback}>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                nav("/Notice");
              }}
            >
              arrow_back
            </span>
          </div>
          <h3>{data[postId].title}</h3>
        </div>

        <div className={styles.ContentCon}>
          {data[postId].imgsrc && <img src={data[postId].imgsrc} alt="" />}
          <div className={styles.content}>{data[postId].inform}</div>
        </div>
      </div>
      <div className={styles.floatCon}>
        <div className={styles.infoWrapper}>
          <div className={styles.wrapper}>
            <span>제목</span>
            <p>{data[postId].title}</p>
          </div>
          <div className={styles.wrapper}>
            <span>기간</span>
            <p>{data[postId].Period}</p>
          </div>
          <div className={styles.wrapper}>
            <span>참여대상</span>
            <p>{data[postId].target}</p>
          </div>
        </div>
        <Button
          title={"신청하기"}
          onClick={() => {
            console.log("글쓰기 이동");
          }}
          disabled={data[postId].Progress === "마감" && true}
        ></Button>
      </div>
    </div>
  );
}
