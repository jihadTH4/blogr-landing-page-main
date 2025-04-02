import PhonesIll from "../assets/images/illustration-phones.svg";
import styles from "./InfrastructureSection.module.css";

export default function InfrastructureSection() {
  return (
    <section>
      <div className={styles.phonesContainer}>
        <div className={styles.imgWrapper}>
          <img src={PhonesIll} alt="Phones" />
        </div>
        <div className={styles.textWrapper}>
          <h1>State of the Art Infrastructure</h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
