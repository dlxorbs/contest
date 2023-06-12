import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Category from "../component/LNB/Categoty";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import dummy from "../data/data.json";
import CardList from "../component/Card/CardList";
import Notice from "../component/Notice/Notice";
import Modal from "./ModalPage";

export default function NowContest(props) {
  const [data, setData] = useState([]);
  const [dataform, setDataform] = useState([dummy[0]]);
  const [scrolled, setScrolled] = useState("");
  const category = [
    {
      title: "진행중인 경진대회",
      secondary: ["2023과제 경진대회", "2023포트폴리오 경진대회"],
    },
    { title: "진행중인 공모전", secondary: ["로고 공모전"] },
    { title: "투표중인 경진대회", secondary: [] },
    { title: "투표중인 공모전", secondary: [] },
  ];

  // firebase 데이터 가져오기
  useEffect(() => {
    let Datas = [];
    db.collection("Now")
      .get()
      .then((qs) => {
        const Datas = qs.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setData(Datas);
      });
  }, []);

  const list = dataform.map((item) => {
    return (
      <Notice
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        type={"info"}
        Period={item.Period}
        Target={item.target}
        contest={item.contest}
        Progress={item.Progress}
      />
    );
  });
  const handleItemClick = (clickedItem) => {
    // 클릭한 값
    console.log(clickedItem);
  };

  return (
    <div className={styles.page_Wrapper}>
      <h3>진행중인 경진대회</h3>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} onItemClick={handleItemClick} />
        </div>
        <div className={styles.CardCon}>
          {list}
          <CardList data={data} type={"Now"} />
        </div>
      </div>
    </div>
  );
}
