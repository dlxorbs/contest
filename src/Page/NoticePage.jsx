import React, { useState, useEffect } from "react";
import $ from "jquery";
import Category from "../component/LNB/Categoty";
import styles from "./Page.module.css";
import NoticeList from "../component/Notice/NoticeList";
// import { db } from "../firebase.js";
import data from "../data/data.json";

export default function NoticePage(props) {
  const [lnbfilter, setLnbfilter] = useState("");
  const [dataLNB, setDatalistLNB] = useState([]); // LNB 받아온 데이터 저장
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const category = [
    { title: "전체", secondary: [] },
    { title: "경진대회", secondary: [] },
    { title: "공모전", secondary: [] },
  ];

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type == lnbfilter);
    setDatalistLNB(filteredData);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type == lnbfilter);
    setDatalistLNB(filteredData);
  }, [data, lnbfilter]);

  const handleItemClick = (clickedItem) => {
    // 클릭한 값
    console.log(clickedItem);

    if (clickedItem === category[0]) {
      setLnbfilter("");
    }

    if (clickedItem === category[1]) {
      setLnbfilter(0);
    }

    if (clickedItem === category[2]) {
      setLnbfilter(1);
    }
  };

  return (
    <div className={styles.page_Wrapper}>
      <h3>콘테스트 정보</h3>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} onItemClick={handleItemClick} />
        </div>
        <div className={styles.CardCon}>
          <NoticeList
            type={"notice"}
            data={lnbfilter === "" ? data : dataLNB}
          />
        </div>
      </div>
    </div>
  );
}
