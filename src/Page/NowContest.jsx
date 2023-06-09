import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Category from "../component/LNB/Categoty";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import dummy from "../data/data.json";
import CardList from "../component/Card/CardList";
import Notice from "../component/Notice/Notice";
import Modal from "./ModalPage";
import { useNavigate } from "react-router-dom";

export default function NowContest(props) {
  const [data, setData] = useState([]);
  const [dataform, setDataform] = useState([dummy[0]]);
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [lnbfilter, setLnbfilter] = useState(20231);
  const [dataLNB, setDatalistLNB] = useState([]); // LNB 받아온 데이터 저장
  const [selectedCard, setSelectedCard] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [type, setType] = useState("Now");
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
  const nav = useNavigate();
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
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setData(Datas);
        setFiltered(Datas);
      });
  }, []);
  // 선택된 카드의 댓글을 가져오는 useEffect
  useEffect(() => {
    if (selectedCard) {
      db.collection("Now")
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
  }, [selectedCard]);

  const handleItemClick = (clickedItem) => {
    // 클릭한 값
    console.log(clickedItem);

    if (clickedItem === category[0].secondary[0]) {
      setLnbfilter(20231);
      setType("Now");
    }

    if (clickedItem === category[0].secondary[1]) {
      setLnbfilter(20232);
      setType("Now");
    }

    if (clickedItem === category[1].secondary[0]) {
      setLnbfilter(20233);
      setType("Now");
    }
    if (clickedItem === category[2]) {
      setLnbfilter(20234);
      setType("Vote");
    }
    if (clickedItem === category[3]) {
      setLnbfilter(20235);
      setType("Vote");
    }
  };

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((obj) => obj.type.includes(lnbfilter));
    setDatalistLNB(filteredData);
    setFiltered(filteredData);
  }, [data, lnbfilter]);

  const openModal = (card) => {
    setSelectedCard(card);
    console.log(selectedCard);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  // 모달 나타날때 배경없애기
  selectedCard
    ? $("#root").css({ height: "100vh", overflow: "hidden" })
    : $("#root").css({ height: "", overflow: "" });

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
        onInfoClick={() => {
          nav("/Notice/" + item.id);
        }}
      />
    );
  });

  return (
    <div className={styles.page_Wrapper}>
      <h3>진행중인 경진대회</h3>
      <div className={styles.InnerContainer}>
        <div className={styles.navCon}>
          <Category data={category} onItemClick={handleItemClick} />
        </div>
        <div className={styles.CardCon}>
          {list}
          {filtered.length > 0 ? ( // filtered에 데이터가 있는지 확인
            <CardList data={filtered} type={type} openModal={openModal} />
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
            db.collection("Now")
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
