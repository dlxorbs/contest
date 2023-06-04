import React from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
export default function ArchivePage(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const category = [
    {
      title: "진행중인 경진대회",
      secondary: ["2023과제 경진대회", "2023포트폴리오 경진대회"],
    },
    { title: "진행중인 공모전", secondary: ["로고 공모전"] },
    { title: "투표중인 경진대회", secondary: [] },
    { title: "투표중인 경진대회", secondary: [] },
  ];

  const year = [2018, 2019, 2020, 2021, 2022, 2023];

  const major = ["미디어디자인공학", "산업디자인공학"];

  const grade = ["1학년", "2학년", "3학년", "4학년"];

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.filterContainer}>
        <ChipFilter title={"전공"} data={major} name={"major"} />
        <ChipFilter title={"연도"} data={year} name={"year"} />
        <ChipFilter title={"학년"} data={grade} name={"grade"} />
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} />
        </div>
      </div>
    </div>
  );
}
