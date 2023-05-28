import React from "react";
import styles from "./Header.module.css";
import logo from "../images/logo.png";

function Nav(props) {
  return (
    <div className={styles.nav} onClick={props.onClick}>
      {props.title || "Navigation"}
    </div>
  );
}

function UserProfile(props) {
  return (
    <div className={styles.profWrapper} onClick={props.onClick}>
      <div>{props.UserID || "UserID"}</div>
      <div>{props.UserName || "UserName"}</div>
      <div>
        <img src={props.userImage}></img>
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.navWrapper}>
          <img src={logo}></img>
          <Nav
            title="진행중인 콘테스트"
            onClick={function () {
              console.log("진행중인 콘테스트로 이동");
            }}
          />
          <Nav
            title="콘테스트 아카이빙"
            onClick={function () {
              console.log("콘테스트 아카이빙로 이동");
            }}
          />
          <Nav
            title="콘테스트 공지사항"
            onClick={function () {
              console.log("콘테스트 공지사항로 이동");
            }}
          />
        </div>
        <UserProfile
          onClick={function () {
            console.log("유저 프로필로 이동");
          }}
        ></UserProfile>
      </div>
    </div>
  );
}

export default Header;
