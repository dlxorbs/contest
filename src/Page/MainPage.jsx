import React, { useState, useEffect } from "react";
import Category from "../component/LNB/Categoty";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import FloatButton from "../component/Button/FloatButton";
import Card from "../component/Card/Card";
import banner from "../img/banner.png";
import Modal from "./ModalPage";
import data from "../data/data.json";
import NoticeList from "../component/Notice/NoticeList";
import Carousel from "react-simply-carousel";
import Slider from "infinite-react-carousel";

function MainPage() {
  const [ndata, setNData] = useState([]);
  const [nfilterdata, setNfilterData] = useState([]);
  const [adata, setAData] = useState([]);
  const [selectedACard, setSelectedACard] = useState(null);
  const [selectedNCard, setSelectedNCard] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
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

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  const handleSlideChange = (newActiveSlideIndex) => {
    setActiveSlideIndex(newActiveSlideIndex);
  };

  const handleSlideChange2 = (newActiveSlideIndex2) => {
    setActiveSlideIndex2(newActiveSlideIndex2);
  };

  useEffect(() => {
    let Datas = [];
    db.collection("Now")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setNData(Datas);
        setNfilterData(Datas);
      });
  }, []);

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = nfilterdata.filter((obj) => obj.type.includes(20231));
    setNfilterData(filteredData);
  }, []);
  useEffect(() => {
    const filteredData = nfilterdata.filter((obj) => obj.type.includes(20231));
    setNfilterData(filteredData);
  }, [ndata]);

  useEffect(() => {
    let Datas = [];
    db.collection("Archive")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setAData(Datas);
        console.log(adata);
      });
  }, []);

  // 선택된 카드의 댓글을 가져오는 useEffect
  useEffect(() => {
    if (selectedNCard) {
      db.collection("Now")
        .doc(selectedNCard.id)
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
  }, [selectedNCard]);

  useEffect(() => {
    if (selectedACard) {
      db.collection("Archive")
        .doc(selectedACard.id)
        .get()
        .then((doc) => {
          const data = doc.data();
          if (data) {
            console.log(data);
            setPost(data);
            setComments(data.comments);
          }
          console.log(ndata);
        });
    }
  }, [selectedACard]);

  const openModal = (card) => {
    setSelectedNCard(card);
  };

  const closeModal = () => {
    setSelectedNCard(null);
  };

  // 모달 나타날때 배경없애기
  selectedNCard
    ? $("#root").css({ height: "100vh", overflow: "hidden" })
    : $("#root").css({ height: "", overflow: "" });

  const settings = {
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    swipe: false,
  };
  return (
    <div className={styles.outer_Wrapper}>
      <Slider {...settings}>
        <div className={styles.banner} />
        <div className={styles.banner} />
      </Slider>
      <div className={styles.page_Wrapper}>
        <h3>현재 진행중인 콘테스트</h3>
        <Carousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={handleSlideChange}
          itemsToShow={4}
          itemsToScroll={4}
          containerProps={{
            style: {
              position: "relative",
            },
          }}
          forwardBtnProps={{
            children: <FloatButton icon={"arrow_forward_ios"} />,
            style: {
              position: "absolute",
              right: "0px",
              top: "118px",
              display: "flex",
              padding: 0,
              border: "none",

              height: 64,
              width: 64,
              backgroundColor: "transparent",
            },
          }}
          backwardBtnProps={{
            children: <FloatButton icon={"arrow_back_ios"} />,
            style: {
              position: "absolute",
              left: "0px",
              top: "118px",
              zIndex: "10",
              display: "flex",
              padding: 0,
              border: "none",

              height: 64,
              width: 64,
              backgroundColor: "transparent",
            },
          }}
          dotsNav={{
            show: false,
          }}
        >
          {ndata.length > 0 ? ( // filtered에 데이터가 있는지 확인
            nfilterdata.map((item) => {
              return (
                <Card
                  style={{ padding: "0px 10px" }}
                  key={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  type={"Now"}
                  major={item.major}
                  studentinfo={item.studentinfo}
                  onClick={() => {
                    openModal(item);
                    console.log(item);
                  }}
                />
              );
            })
          ) : (
            <div className={styles.nothing}> 내용이 없습니다. </div>
          )}
        </Carousel>
        <h3>아카이빙 된 콘테스트</h3>
        <Carousel
          activeSlideIndex={activeSlideIndex2}
          onRequestChange={handleSlideChange2}
          itemsToShow={4}
          itemsToScroll={4}
          containerProps={{
            style: {
              position: "relative",
            },
          }}
          forwardBtnProps={{
            children: <FloatButton icon={"arrow_forward_ios"} />,
            style: {
              position: "absolute",
              right: "0px",
              top: "118px",
              display: "flex",
              padding: 0,
              border: "none",

              height: 64,
              width: 64,
              backgroundColor: "transparent",
            },
          }}
          backwardBtnProps={{
            children: <FloatButton icon={"arrow_back_ios"} />,
            style: {
              position: "absolute",
              left: "0px",
              top: "118px",
              zIndex: "10",
              display: "flex",
              padding: 0,
              border: "none",

              height: 64,
              width: 64,
              backgroundColor: "transparent",
            },
          }}
          dotsNav={{
            show: false,
          }}
        >
          {adata.length > 0 ? ( // filtered에 데이터가 있는지 확인
            adata.map((item) => {
              return (
                <Card
                  style={{ padding: "0px 10px" }}
                  key={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  type={"Archive"}
                  major={item.major}
                  studentinfo={item.studentinfo}
                  onClick={() => {
                    openModal(item);
                  }}
                />
              );
            })
          ) : (
            <div className={styles.nothing}> 내용이 없습니다. </div>
          )}
        </Carousel>
        <h3>콘테스트 정보</h3>
        <NoticeList type={"notice"} data={data.slice(0, 4)} />
      </div>
      {selectedNCard && (
        <Modal
          onClick={closeModal}
          title={selectedNCard.title}
          studentinfo={selectedNCard.studentinfo}
          reply={function () {
            let timestamp = new Date().getTime().toString();
            let tempcomments = post.comments;
            tempcomments.push({
              id: selectedNCard.id + "_" + timestamp,
              time: timestamp,
              content: comment,
            });
            db.collection("Now")
              .doc(selectedNCard.id)
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
          imgsrc={selectedNCard.imgsrc}
          comments={post.comments}
        />
      )}
      {selectedACard && (
        <Modal
          onClick={closeModal}
          title={selectedACard.title}
          studentinfo={selectedACard.studentinfo}
          reply={function () {
            let timestamp = new Date().getTime().toString();
            let tempcomments = post.comments;
            tempcomments.push({
              id: selectedACard.id + "_" + timestamp,
              time: timestamp,
              content: comment,
            });
            db.collection("Now")
              .doc(selectedACard.id)
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
          imgsrc={selectedACard.imgsrc}
          comments={post.comments}
        />
      )}
    </div>
  );
}

export default MainPage;
