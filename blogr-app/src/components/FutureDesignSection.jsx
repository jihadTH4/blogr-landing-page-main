import EditroIllusDesktop from "../assets/images/illustration-editor-desktop.svg";
import EditroIllusMobile from "../assets/images/illustration-editor-mobile.svg";
import styles from "./FutureDesignSection.module.css";

export default function FutureDesignSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Designed for the future</h1>
      <div className={styles.designContainer}>
        <div className={styles.editroIllWrapper}>
          <picture>
            <source media="(min-width: 768px)" srcset={EditroIllusDesktop} />
            <source media="(max-width: 768px)" srcset={EditroIllusMobile} />
            <img src={EditroIllusDesktop} alt="Editor" />
          </picture>
        </div>
        <div className={styles.designDesc}>
          <div>
            <h3 className={styles.title}>Introducing an extensible editor</h3>
            <p className={styles.description}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className={styles.title}>Robust content management</h3>
            <p className={styles.description}>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
