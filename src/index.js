import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import NowContest from "./Page/NowContest";
import Header from "./component/Header/Header";
import ArchivePage from "./Page/ArchivePage";
import NoticePage from "./Page/NoticePage";
import MainPage from "./Page/MainPage";
import NoticeViewPage from "./Page/NoticeViewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header></Header>

    <Routes>
      <Route index element={<MainPage />}></Route>
      <Route path="Now" element={<NowContest />}></Route>
      <Route path="Archive" element={<ArchivePage />}></Route>
      <Route path="Notice" element={<NoticePage />}></Route>
      <Route path="Notice/:id" element={<NoticeViewPage />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
