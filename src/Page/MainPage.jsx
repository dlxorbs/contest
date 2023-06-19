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
  const [selectedCard, setSelectedCard] = useState(null);

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
      });
  }, []);
  useEffect(() => {
    let Datas = [];
    db.collection("Now")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setNData(Datas);
      });
  }, [ndata]);

  // 초기 필터링을 수행하는 useEffect
  useEffect(() => {
    const filteredData = ndata.filter((obj) => obj.type.includes(20231));
    setNfilterData(filteredData);
  }, []);
  useEffect(() => {
    const filteredData = ndata.filter((obj) => obj.type.includes(20231));
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
            // setPost(data);
            // setComments(data.comments);
          }
        });
    }
  }, [selectedCard]);

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

  const settings = {
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
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
                  onClick={() => openModal}
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
                  onClick={() => openModal}
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
    </div>
  );
}

export default MainPage;
