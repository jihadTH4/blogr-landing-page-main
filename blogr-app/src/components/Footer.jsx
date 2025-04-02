import LogoImage from "../assets/images/logo.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  const links = [
    {
      id: 0,
      title: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    },
    {
      id: 1,
      title: "Company",
      links: ["About", "Team", "Blog", "Careers"],
    },
    {
      id: 2,
      title: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];
  return (
    <footer>
      <div className={styles.footerContainer}>
        <a
          className={styles.logoImageWrapper}
          href="#page-top"
          aria-label="Logo"
        >
          <img src={LogoImage} alt="Logo" />
        </a>
        <nav className={styles.navBar} aria-label="Footer-nav">
          <div className={styles.navListWrapper}>
            <ul className={styles.navList}>
              {links.map((category) => (
                <li className={styles.title} key={category.id}>
                  <a>{category.title}</a>
                  <ul className={styles.linksList}>
                    {category.links.map((link, index) => (
                      <li className={styles.links} key={index}>
                        <a>{link}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
