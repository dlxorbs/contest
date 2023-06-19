import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

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
      <div
        className={styles.user}
        style={{ "--back": "url(" + props.src + ")" }}
      ></div>
    </div>
  );
}

function Header(props) {
  const nav = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.navWrapper}>
          <img
            className={styles.logo}
            src={
              "https://www.tukorea.ac.kr/sites/en/images/common/logo_footer.png"
            }
            onClick={() => {
              nav("/");
            }}
          ></img>
          <Nav
            title="진행중인 콘테스트"
            onClick={function () {
              console.log("진행중인 콘테스트로 이동");
              nav("/Now");
            }}
          />
          <Nav
            title="콘테스트 아카이빙"
            onClick={function () {
              console.log("콘테스트 아카이빙로 이동");
              nav("/Archive");
            }}
          />
          <Nav
            title="콘테스트 정보"
            onClick={function () {
              console.log("콘테스트 공지사항로 이동");
              nav("/Notice");
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
