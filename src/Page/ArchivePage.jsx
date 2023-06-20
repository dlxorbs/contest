import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import CardList from "../component/Card/CardList";
import Modal from "./ModalPage";

export default function ArchivePage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [datalist1, setDatalist1] = useState([]); // 첫 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist2, setDatalist2] = useState([]); // 두 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist3, setDatalist3] = useState([]); // 세 번째 ChipFilter에서 받아온 데이터 저장
  const [dataLNB, setDatalistLNB] = useState([]); // LNB 받아온 데이터 저장
  const [lnbfilter, setLnbfilter] = useState(20221);
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [majordata, setMajordata] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [comment, setComment] = useState("");
  const [post, setPost] = useState({
    id: "",
    title: "",
    studentinfo: "",
    grade: "",
    year: "",
    type: "",
    imgscr: "",
    major: "",
    content: "",
    comments: [],
  });
  // 타입 0:과제경진대회 1:포트 2:로고 ...

  // 사용되는 데이터 지정 (LNB, Filter)
  const category = [
    {
      title: "경진대회 아카이빙",
      secondary: [
        "2022과제 경진대회",
        "2022포트폴리오 경진대회",
        "2021과제 경진대회",
        "2021포트폴리오 경진대회",
        "2020과제 경진대회",
        "2020포트폴리오 경진대회",
      ],
      post: "Contest",
    },
    {
      title: "공모전 아카이빙",
      secondary: ["로고 공모전"],
      post: "Competition",
    },
  ];

  // const year = [2018, 2019, 2020, 2021, 2022];
  const major = ["미디어디자인공학", "산업디자인공학"];
  const grade = ["1", "2", "3", "4"];

  // firebase 데이터 가져오기
  useEffect(() => {
    let Datas = [];
    db.collection("Archive")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setData(Datas);
        setFiltered(Datas);
      });
    console.log(data);
  }, []);

  // 선택된 카드의 댓글을 가져오는 useEffect
  useEffect(() => {
    if (selectedCard) {
      db.collection("Archive")
        .doc(selectedCard.id)
        .get()
        .then((doc) => {
          const data = doc.data();
          if (data) {
            console.log(data);
            setPost(data);
            setComments(data.comments);
          }
        });
    }
    console.log(data);
  }, [selectedCard]);

  // 첫 번째 ChipFilter에서 필터링된 데이터 업데이트
  const updateFilter1 = (filterdata) => {
    setDatalist1(filterdata);
  };

  // 두 번째 ChipFilter에서 필터링된 데이터 업데이트
  const updateFilter3 = (filterdata) => {
    setDatalist3(filterdata);
  };

  const handleItemClick = (clickedItem) => {
    // 클릭한 값
    console.log(clickedItem);

    if (clickedItem === category[0].secondary[0]) {
      setLnbfilter(20221);
    }

    if (clickedItem === category[0].secondary[1]) {
      setLnbfilter(20222);
    }

    if (clickedItem === category[0].secondary[2]) {
      setLnbfilter(20211);
    }

    if (clickedItem === category[0].secondary[3]) {
      setLnbfilter(20212);
    }

    if (clickedItem === category[0].secondary[4]) {
      setLnbfilter(20201);
    }

    if (clickedItem === category[0].secondary[5]) {
      setLnbfilter(20202);
    }

    if (clickedItem === category[1].secondary[0]) {
      setLnbfilter(20224);
    }
  };

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
    console.log(data);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
    console.log(data);
  }, [data, lnbfilter]);

  // 데이터 필터링
  useEffect(() => {
    const filtering = dataLNB.filter((obj) => {
      // 첫 번째 ChipFilter 데이터 필터링
      const isFiltered1 =
        datalist1.length === 0 || datalist1.includes(obj.major);

      // 세 번째 ChipFilter 데이터 필터링
      const isFiltered3 =
        datalist3.length === 0 || datalist3.includes(obj.grade);

      return isFiltered1 && isFiltered3;
    });
    console.log(data);
    console.log(datalist1, datalist2, datalist3);
    setFiltered(filtering);
  }, [datalist1, datalist2, datalist3, data, dataLNB, lnbfilter, majordata]);

  // 모달 나타날때 배경없애기
  selectedCard
    ? $("#root").css({ height: "100vh", overflow: "hidden" })
    : $("#root").css({ height: "", overflow: "" });

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };
  return (
    <div className={styles.page_Wrapper}>
      <h3>콘테스트 아카이빙</h3>

      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} onItemClick={handleItemClick} />
        </div>
        <div className={styles.CardCon}>
          <div className={styles.filterContainer}>
            <ChipFilter
              updateFilter={updateFilter1}
              title={"전공"}
              data={major}
              name={"major"}
              onClick={(e) => {
                e.target.checked = true;
              }}
            />
            {/* <ChipFilter
          updateFilter={updateFilter2}
          title={"연도"}
          data={year}
          name={"year"}
          onClick={(e) => {
            e.target.checked = true;
          }}
        /> */}
            <ChipFilter
              updateFilter={updateFilter3}
              title={"학년"}
              data={grade}
              name={"grade"}
              onClick={(e) => {
                e.target.checked = true;
              }}
            />
          </div>
          {filtered.length > 0 ? ( // filtered에 데이터가 있는지 확인
            <CardList data={filtered} type={"Archive"} openModal={openModal} />
          ) : (
            <div className={styles.nothing}> 내용이 없습니다. </div>
          )}
        </div>
      </div>

      {selectedCard && (
        <Modal
          onClick={closeModal}
          title={selectedCard.title}
          studentinfo={selectedCard.studentinfo}
          reply={function () {
            let timestamp = new Date().getTime().toString();
            let tempcomments = post.comments;
            tempcomments.push({
              id: selectedCard.id + "_" + timestamp,
              time: timestamp,
              content: comment,
            });
            db.collection("Archive")
              .doc(selectedCard.id)
              .update({
                comments: tempcomments,
              })
              .then(setComment(""));
          }}
          value={comment}
          onChange={function (e) {
            setComment(e.target.value);
            e.target.style.height = "94px";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
          imgsrc={selectedCard.imgsrc}
          comments={post.comments}
        />
      )}
    </div>
  );
}
