import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import lnb from "./component/LNB/Categoty";
import Button from "./component/Button/Button";
import CardThumb from "./component/Card/CardThumb";
import Profile from "./component/Comment/Profile";
import ProfilePage from "./component/Comment/ProfilePage";
import Category from "./component/LNB/Categoty";
import NowContest from "./Page/NowContest";
import Header from "./component/Comment/Header";
import Chips from "./component/Input/Chips";
import Tab from "./component/Input/Tab";
import FloatButton from "./component/Button/FloatButton";
import CommentInput from "./component/Comment/CommentInput";
import TextInput from "./component/Comment/TextInput";
import NameTag from "./component/Card/NameTag";
import Card from "./component/Card/Card";
import ContentButton from "./component/Button/ContentButton";
import ChipFilter from "./component/Input/ChipFilter";
import ArchivePage from "./Page/ArchivePage";
function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <ArchivePage></ArchivePage>
      {/* <Button disabled={false}></Button>

      <Button className={"round"} disabled={false}></Button>

      <Button className={"medium"} disabled={false}></Button>

      <Button className={"large"} disabled={false}></Button>

      <Button className={"line"} disabled={false}></Button> */}
      {/* 
      <ProfilePage></ProfilePage>

      <Header></Header>

      <Profile
        StudentName={"이태균"}
        StudentID={"2018194031"}
        major={"미디어디자인공학"}
        mail={"taegyun98@naver.com"}
        src={
          "https://velog.velcdn.com/images/heelieben/post/87bbb462-dbd5-49a5-a9e9-70ed2007cdaf/image.png"
        }
      ></Profile>

      <FloatButton icon={"arrow_forward_ios"}></FloatButton>

      <FloatButton icon={"arrow_back_ios"}></FloatButton>

      <ContentButton icon={"text_fields"}></ContentButton>

      <ContentButton icon={"image"}></ContentButton>

      <ContentButton icon={"Folder"}></ContentButton>

      <ContentButton icon={"smart_display"}></ContentButton> */}

      {/* <ProfilePage /> */}
      {/* 
      <Card type={"Vote"}></Card>

      <Card
        type={"Archive"}
        major={"미디어디자인공학"}
        studentinfo={"이태균"}
      ></Card>

      <Card type={"Now"} major={"산업디자인공학"}></Card>

      <NowContest />

      <Tab text={"tab"} name={"grade"}></Tab>

      <Tab text={"tab"} name={"grade"}></Tab>

      <Tab text={"tab"} name={"grade"}></Tab>

      <Chips text={"check"} name={"grade"}></Chips>

      <Chips text={"check"} name={"grade"}></Chips> */}

      {/* <TextInput
        height={44}
        minheight={116}
        fontsize={36}
        fontweight={700}
        placeholder={"제목 없음"}
        lineheight={100}
        value={title}
        margin="24px 0px 0px"
        onChange={function (e) {
          setTitle(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
      <TextInput
        height={20}
        minheight={62}
        fontsize={20}
        fontweight={500}
        lineheight={150}
        placeholder={"내용 없음"}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          e.target.style.height = "30px";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
        
      <CommentInput></CommentInput> */}
{/* 
      <ChipFilter data={major} name={"major"} />
      <ChipFilter data={year} name={"year"} /> */}
    </div>
  );
}

export default App;
