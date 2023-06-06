import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";
import Notice from "../component/Notice/Notice";

export default function NowContest(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const [data, setData] = useState([]); // 기본 데이터 지정
  const category = [
    {
      title: "진행중인 경진대회",
      secondary: ["2023과제 경진대회", "2023포트폴리오 경진대회"],
    },
    { title: "진행중인 공모전", secondary: ["로고 공모전"] },
    { title: "투표중인 경진대회", secondary: [] },
    { title: "투표중인 경진대회", secondary: [] },
  ];

  // firebase 데이터 가져오기
  useEffect(function () {
    let Datas = [];
    db.collection("Now")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });

        setData(Datas);
      });
  }, []);

  return (
    <div className={styles.page_Wrapper}>
      <h3>진행중인 경진대회</h3>
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
          <Notice
            type={"info"}
            Target={"나"}
            Period={" rlrks"}
            Prgress={"asdasd"}
          />
          <CardList data={data} type={"Now"} />
        </div>
      </div>
    </div>
  );
}
