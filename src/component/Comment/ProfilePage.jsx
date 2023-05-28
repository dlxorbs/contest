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

          <Profile StudentName={"sad"}></Profile>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
