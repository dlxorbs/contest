import React, { useEffect, useRef } from "react";
import styles from "./Notice.module.css";
import Tag from "./Tag";
import NoticeThumb from "./NoticeThumb";
import Button from "../Button/Button";
import $ from "jquery";
function Notice(props) {
  const noticeData = [
    { infotext: "기간", text: props.Period || "Period" },
    { infotext: "참여대상", text: props.Target || "Target" },
    { infotext: "진행상황", text: props.Progress || "Progress" },
  ];
  // props.type = info / notice 타입선택
  // props.title = 제목선택
  // props.Period props.Target props.Progress
  const list = noticeData.map((item, index) => {
    return (
      <div
        className={
          props.type == "notice" ? styles.noticeData : styles.noticeInfoData
        }
        key={index}
      >
        <span
          className={
            props.type == "notice" ? styles.infotext : styles.noticeInfoText
          }
        >
          {item.infotext}
        </span>
        <span
          className={props.type == "notice" ? styles.text : styles.noticeText}
        >
          {item.text}
        </span>
      </div>
    );
  });

  return (
    <div
      className={
        props.type == "notice" ? styles.noticeBox : styles.stickyNoticebox
      }
    >
      {props.type == "notice" && <NoticeThumb src={props.thumbnail} />}

      <div
        className={styles.titleBox}
        style={
          props.type == "notice"
            ? { "--padding": 30 + "px " + 24 + "px", "--minwidth": 484 + "px" }
            : { "--padding": 20 + "px" }
        }
      >
        <div className={styles.tagcon}>
          <Tag
            className={
              props.progress == "마감" ? styles.disabled : styles.default
            }
            text={props.Progress}
          />
          <Tag className={styles.default} text={props.contest} />
        </div>
        <span> {props.title || "Title"}</span>
        {props.type == "info" && (
          <div className={styles.noticeInfoList}>{list}</div>
        )}
      </div>

      {props.type == "notice" && (
        <div className={styles.contnetBox}>
          <div className={styles.noticeList}>{list}</div>
        </div>
      )}

      {props.type == "info" && (
        <div className={styles.Btncon}>
          <Button />
          <Button />
        </div>
      )}
    </div>
  );
}

export default Notice;
