import React from "react";
import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.welcome}>
        Welcome to OWB pets! This is a spot to archive the lives of our family’s
        spoiled Maltipoos, Buddy & Qutie.
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.qutieImg}>
          <Image
            className={styles.mainImgs}
            src="/img/qutie.webp"
            alt="Qutie, a Maltipoo"
            layout="responsive"
            width={50}
            height={100}
          />
          <p>
            Qutie loves sun bathing and being on lookout duty. (She’s mainly
            looking for cats)
          </p>
          <button className={styles.seeMoreBtn}>See more of Qutie</button>
        </div>
        <div>
          <Image
            className={styles.mainImgs}
            src="/img/buddy.webp"
            alt="Buddy, a Maltipoo"
            layout="responsive"
            width={50}
            height={100}
          />
          <p>
            Buddy loves to run around and play fetch. He is a tough guy (not
            really)
          </p>
          <button className={styles.seeMoreBtn}>See more of Buddy</button>
        </div>
      </div>
      <div className={styles.welcome}>
        Why not both?
        <br />
        <br />
        <button className={styles.seeMoreBtn}>See more of Buddy & Qutie</button>
      </div>
    </>
  );
};

export default Home;
