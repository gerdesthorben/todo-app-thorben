import React from "react";

import profilePicture from "../../assets/Graphmasters_logo.png";
import styles from "./Profile.module.css";

interface Props {}

const Profile: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={profilePicture} alt="Profile" className={styles.img} />
      </div>
      <div>
        <h1 className={styles.user}>Test User</h1>
      </div>
    </div>
  );
};

export default Profile;
