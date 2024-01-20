import React from "react";
import Image from "next/image";
import styles from "./home.module.css";
import buddy from "../public/img/buddy.webp";
import qutie6 from "../public/img/qutie6.webp";

const Home = () => {
  return (
    <>
      <section
        style={{
          display: "grid",
          gridGap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px,600px))",
          marginLeft: "8px",
          marginRight: "8px",
          marginTop: "24px",
          justifyContent: "center",
        }}
      >
        <article style={{ position: "relative", height: "600px" }}>
          <Image
            src={qutie6}
            alt="Qutie, a Maltipoo"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </article>
        <article style={{ position: "relative", height: "600px" }}>
          <Image
            src={buddy}
            alt="Buddy, a Maltipoo"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </article>
      </section>
      <div className={styles.welcome}>
        <h1>Welcome to OWB Pets!</h1>
        <p>
          This is a media archive for our family’s Maltipoos, Qutie & Buddy.
        </p>
      </div>
      <div className={styles.about}>
        <h2>About</h2>
        <p>
          Qutie (pictured left) loves sun bathing, taking naps, and watching for
          cats. Buddy (pictured right) loves to run around and play fetch. He is
          a <s>wannabe</s> tough guy.
        </p>
        <button className={`${styles.seeMoreBtn} ${styles.bothBtn}`}>
          See more of Qutie & Buddy!
        </button>
      </div>
    </>
  );
};

export default Home;
