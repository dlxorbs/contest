import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";

export default function ArchivePage(props) {
  // 각 페이지마다 정보를 저장할 state들을 설정합니다.
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [datalist1, setDatalist1] = useState([]); // 첫 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist2, setDatalist2] = useState([]); // 두 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist3, setDatalist3] = useState([]); // 세 번째 ChipFilter에서 받아온 데이터 저장
  const [dataLNB, setDatalistLNB] = useState([]); // LNB 받아온 데이터 저장
  const [lnbfilter, setLnbfilter] = useState(0);
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [nodata, setNodata] = useState(false); // 데이터가 있는지 없는지 판별을 위한 변수

  // 타입 0:과제경진대회 1:포트 2:로고 ...

  // 사용되는 데이터 지정 (LNB, Filter)
  const category = [
    {
      title: "경진대회 아카이빙",
      secondary: ["과제 경진대회", "포트폴리오 경진대회"],
      post: "Contest",
    },
    {
      title: "공모전 아카이빙",
      secondary: ["로고 공모전"],
      post: "Competition",
    },
  ];

  const year = [2018, 2019, 2020, 2021, 2022];
  const major = ["미디어디자인공학", "산업디자인공학"];
  const grade = ["1", "2", "3", "4"];

  // firebase 데이터 가져오기
  useEffect(() => {
    db.collection("Archive")
      .get()
      .then((qs) => {
        const Datas = qs.docs.map((doc) => doc.data());
        setData(Datas);
        setFiltered(Datas);
      });
  }, []);

  // 첫 번째 ChipFilter에서 필터링된 데이터 업데이트
  const updateFilter1 = (filterdata) => {
    setDatalist1(filterdata);
  };

  // 두 번째 ChipFilter에서 필터링된 데이터 업데이트
  const updateFilter2 = (filterdata) => {
    setDatalist2(filterdata);
  };

  // 세 번째 ChipFilter에서 필터링된 데이터 업데이트
  const updateFilter3 = (filterdata) => {
    setDatalist3(filterdata);
  };

  const handleItemClick = (clickedItem) => {
    // 클릭한 값
    console.log(clickedItem);

    if (clickedItem === category[0].secondary[0]) {
      setLnbfilter(0);
    }

    if (clickedItem === category[0].secondary[1]) {
      setLnbfilter(1);
    }

    if (clickedItem === category[1].secondary[0]) {
      setLnbfilter(2);
    }
  };

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
    setNodata(filteredData.length === 0);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
    setNodata(filteredData.length === 0);
  }, [lnbfilter]);

  // 데이터 필터링
  useEffect(() => {
    const filtering = dataLNB.filter((obj) => {
      // 첫 번째 ChipFilter 데이터 필터링
      const isFiltered1 =
        datalist1.length === 0 || datalist1.includes(obj.major);
      // 두 번째 ChipFilter 데이터 필터링
      const isFiltered2 =
        datalist2.length === 0 || datalist2.includes(obj.year);
      // 세 번째 ChipFilter 데이터 필터링
      const isFiltered3 =
        datalist3.length === 0 || datalist3.includes(obj.grade);
      console.log(isFiltered2);
      return isFiltered1 && isFiltered2 && isFiltered3;
    });

    console.log(datalist1, datalist2, datalist3);
    setFiltered(filtering);
    setNodata(filtering.length === 0);
  }, [datalist1, datalist2, datalist3, data]);

  return (
    <div className={styles.page_Wrapper}>
      <h3>콘테스트 아카이빙</h3>
      <div className={styles.filterContainer}>
        <ChipFilter
          updateFilter={updateFilter1}
          title={"전공"}
          data={major}
          name={"major"}
          onClick={(e) => {
            setNodata(false);
            e.target.checked = true;
          }}
        />
        <ChipFilter
          updateFilter={updateFilter2}
          title={"연도"}
          data={year}
          name={"year"}
          onClick={(e) => {
            setNodata(false);
            e.target.checked = true;
          }}
        />
        <ChipFilter
          updateFilter={updateFilter3}
          title={"학년"}
          data={grade}
          name={"grade"}
          onClick={(e) => {
            setNodata(false);
            e.target.checked = true;
          }}
        />
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} onItemClick={handleItemClick} />
        </div>
        <div className={styles.CardCon}>
          <CardList data={filtered} type={"Archive"} />
          {nodata && <div className={styles.nothing}> 아무것도 없어용!! </div>}
        </div>
      </div>
    </div>
  );
}
