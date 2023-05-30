import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import styles from "./Profile.module.css";

function ProfilePage(props) {
  return (
    <div className={styles.profilePage}>
      <Header />

      <div className={styles.pfpageWrapper}>
        <div className={styles.pfpageContainer}>
          <h1>프로필</h1>

          <Profile
            StudentName={"이태균"}
            StudentID={"2018194031"}
            major={"미디어디자인공학"}
            mail={"taegyun98@naver.com"}
            src={
              "https://velog.velcdn.com/images/heelieben/post/87bbb462-dbd5-49a5-a9e9-70ed2007cdaf/image.png"
            }
          ></Profile>

          
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
