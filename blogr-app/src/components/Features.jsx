import LaptopIllDesktop from "../assets/images/illustration-laptop-desktop.svg";
import LaptopIllMobile from "../assets/images/illustration-laptop-mobile.svg";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.FeaturesContainer}>
        <div className={styles.laptopIllWrapper}>
          <picture>
            <source media="(min-width: 768px)" srcset={LaptopIllDesktop} />
            <source media="(max-width: 768px)" srcset={LaptopIllMobile} />
            <img src={LaptopIllDesktop} alt="Laptop" />
          </picture>
        </div>
        <div className={styles.FeaturesTextContent}>
          <div>
            <h3 className={styles.title}>Free, open, simple</h3>
            <p className={styles.description}>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3 className={styles.title}>Powerful tooling</h3>
            <p className={styles.description}>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
