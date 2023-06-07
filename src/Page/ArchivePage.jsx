import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";
export default function ArchivePage(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨

  const [data, setData] = useState([]); // 기본 데이터 지정
  const [datalist, setDatalist] = useState([]); // Chipfilter에서 받아온 데이터 가져오기
  
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링하기
  const [secfiltered, setsecFiltered] = useState([]);
  const [thirdfiltered, setthirdFiltered] = useState([]);
  const [nodata, setNodata] = useState(false); // 데이터가 있는지 없는지에 대해 판별하기 위한 T/F

  //사용되는 데이터 지정 LNB , Filter
  const category = [
    {
      title: "경진대회 아카이빙",
      secondary: ["과제 경진대회", "포트폴리오 경진대회"],
    },
    { title: "공모전 아카이빙", secondary: ["로고 공모전"] },
  ];

  const year = [2018, 2019, 2020, 2021, 2022];

  const major = ["미디어디자인공학", "산업디자인공학"];

  const grade = ["1", "2", "3", "4"];

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
        setFiltered(Datas);
      });
    // console.log(Datas);
  }, []);


  // Chipfilter에서 props.updatefilter로 제작한 곳

  const updateFilter = (filterdata) => {
    setDatalist(filterdata);
  };

  // 데이터리스트의 배열을 원본 데이터에 필터링을 한 후에 filtered에 넣기
  
  useEffect(() => {
    console.log(datalist);

    if (datalist.length != 0) {
      const filtering = data.filter((obj) => {
        const finding = Object.values(obj).some((value) =>
          datalist.includes(value)
        );

        console.log(Object.values(obj));
        console.log(finding);

        // console.log(finding);

        if (finding === true) {
          setNodata(false);
          // console.log(nodata);
        } else {
          setNodata(true);
        }
        return finding;
      });
      // console.log(filtering);
      setFiltered(filtering);
    } else {
      setFiltered(data);
    }
  }, [datalist]);

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
        <CardList data={filtered} type={"Archive"} />
        {nodata && <div> 아무것도 없어용 </div>}
      </div>
    </div>
  );
}
