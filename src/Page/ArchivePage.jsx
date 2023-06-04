import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";
export default function ArchivePage(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const [data, setData] = useState([]);
  const [datalist, setDatalist] = useState([]);
  // firebase 데이터 가져오기
  useEffect(function () {
    let Datas = [];
    db.collection("Archive")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });

        setData(Datas);
      });
    // console.log(Datas);
  }, []);

  const updateFilter = (filterdata) => {
    setDatalist(filterdata);
  };
  useEffect(() => {
    console.log(datalist);
  });

  const category = [
    {
      title: "경진대회 아카이빙",
      secondary: ["과제 경진대회", "포트폴리오 경진대회"],
    },
    { title: "공모전 아카이빙", secondary: ["로고 공모전"] },
  ];

  const year = [2018, 2019, 2020, 2021, 2022];

  const major = ["미디어디자인공학", "산업디자인공학"];

  const grade = ["1학년", "2학년", "3학년", "4학년"];

  return (
    <div className={styles.page_Wrapper}>
      <h3>콘테스트 아카이빙</h3>
      <div className={styles.filterContainer}>
        <ChipFilter
          updateFilter={updateFilter}
          title={"전공"}
          data={major}
          name={"major"}
        />
        <ChipFilter
          updateFilter={updateFilter}
          title={"연도"}
          data={year}
          name={"year"}
        />
        <ChipFilter
          updateFilter={updateFilter}
          title={"학년"}
          data={grade}
          name={"grade"}
        />
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} />
        </div>
        <CardList data={data} type={"Archive"} />
      </div>
    </div>
  );
}
