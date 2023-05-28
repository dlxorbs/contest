import React from "react";
import Category from "../component/LNB/Categoty";

export default function NowContest(props) {
  // 이거는 각 페이지마다 정보가 다르게 들어갈 수 있도록 제작해야됨
  const category = [
    {
      title: "진행중인 경진대회",
      Info: ["2023과제 경진대회", "2023포트폴리오 경진대회"],
    },
    { title: "진행중인 공모전", Info: ["로고 공모전"] },
    { title: "투표중인 경진대회", Info: [] },
    { title: "투표중인 경진대회", Info: [] },
  ];

  return <Category data={category} />;
}
