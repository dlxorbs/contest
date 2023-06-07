import React, { useState, useEffect } from "react";
import $ from "jquery";
import Category from "../component/LNB/Categoty";
import styles from "./Page.module.css";
import NoticeList from "../component/Notice/NoticeList";
// import { db } from "../firebase.js";
import data from "../data/data.json";

export default function NoticePage(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const category = [
    { title: "전체", secondary: [] },
    { title: "경진대회", secondary: [] },
    { title: "공모전", secondary: [] },
  ];

  // firebase 데이터 가져오기
  //   useEffect(function () {
  //     let Datas = [];
  //     db.collection("Now")
  //       .get()
  //       .then(function (qs) {
  //         qs.forEach((doc) => {
  //           Datas.push(doc.data());
  //         });

  //         setData(Datas);
  //       });
  //   }, []);

  useEffect(() => {
    $(window).on("scroll", function () {
      const scrollPos = $(window).scrollTop();
      console.log(scrollPos);
      if (scrollPos > 100) {
        $("stickyNoticeBox").addClass("scrolled");
      } else {
        $("stickyNoticeBox").removeClass("scrolled");
      }
    });
  }, []);

  return (
    <div className={styles.page_Wrapper}>
      <h3>공지사항</h3>
      {/* <Notice
        type={"notice"}
        Target={"나"}
        Period={" rlrks"}
        Prgress={"asdasd"}
      ></Notice> */}

      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} />
        </div>
        <div className={styles.CardCon}>
          <NoticeList type={"notice"} data={data} />
        </div>
      </div>
    </div>
  );
}
