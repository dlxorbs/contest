import React from "react";
import styles from "./Profile.module.css";

function ProfInfo(props) {
  const Space = { marginLeft: "24px" };
  return (
    <div className={styles.profileInfo}>
      {props.infotext}:<span style={Space} />
      {props.text}
    </div>
  );
}

function Profile(props) {
  const profileData = [
    { infotext: "이름", text: props.StudentName || "StudentName" },
    { infotext: "학번", text: props.StudentId || "StudentID" },
    { infotext: "전공", text: props.major || "Major" },
    { infotext: "메일", text: props.mail || "e-mail" },
  ];

  const list = profileData.map((item, index) => {
    return (
      <ProfInfo
        key={index}
        infotext={item.infotext}
        info={item.info}
        text={item.text}
      />
    );
  });
  return (
    <div className={styles.profile}>
      {props.profileImage ? (
        <div className={styles.profile_image}>
          <img src={props.profileImage} alt="Profile" />
        </div>
      ) : (
        <div className={styles.profile_image_default}></div>
      )}
      <div className={styles.profileList}>{list}</div>
    </div>
  );
}

export default Profile;
