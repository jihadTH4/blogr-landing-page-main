import NavBar from "./NavBar";
import styles from "./Header.module.css";
import navBarStyles from "./NavBar.module.css";

export default function Header() {
  return (
    <header id="page-top" className={styles.header}>
      <div className={styles.headerWrapper}>
        <NavBar />
        <div className={styles.headerContent}>
          <div className={styles.title}>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
          </div>
          <div className={styles.ctaBtns}>
            <button
              className={`${navBarStyles.btn} ${styles.primaryButton}`}
            >
              Start for Free
            </button>
            <button className={`${navBarStyles.btn} ${styles.learnBtn}`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
