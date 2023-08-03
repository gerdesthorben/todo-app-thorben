import React from "react";

import styles from "./LandingPage.module.css";

interface Props {}

const LandingPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h1>LandingPage</h1>
    </div>
  );
};

export default LandingPage;
