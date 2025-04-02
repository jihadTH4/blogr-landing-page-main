import { useState, useEffect, useCallback } from "react";
import LogoImage from "../assets/images/logo.svg";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import styles from "./NavBar.module.css";

const linksData = [
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

const MOBILE_BREAKPOINT = 768; // Adjust as needed

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  const toggleDropdown = useCallback((id) => {
    setOpenDropdown((prevOpenId) => (prevOpenId === id ? null : id));
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(`.${styles.navItem}`) &&
        !event.target.closest(`.${styles.mobileToggle}`)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleResize = () => {
      const currentlyMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (currentlyMobile !== isMobileView) {
        setIsMobileView(currentlyMobile);
        if (!currentlyMobile) {
          setIsMobileMenuOpen(false);
          setOpenDropdown(null);
        }
      }
    };

    handleResize(); // Run on initial mount

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  const navContainerClasses = `${styles.navContainer} ${
    isMobileMenuOpen ? styles.navContainerActive : ""
  }`;

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <a href="/" className={styles.logo}>
        <img src={LogoImage} alt="Blogr Homepage" />
      </a>

      <div className={navContainerClasses}>
        <ul className={styles.navLinks}>
          {linksData.map((category) => (
            <li key={category.id} className={styles.navItem}>
              <button
                className={`${styles.dropdownToggle} ${
                  openDropdown === category.id
                    ? styles.dropdownToggleActive
                    : ""
                }`}
                onClick={() => toggleDropdown(category.id)}
                aria-expanded={openDropdown === category.id}
                aria-haspopup="true"
                aria-controls={`menu-${category.id}`}
              >
                {category.title}
              </button>
              <ul
                id={`menu-${category.id}`}
                className={`${styles.dropdownMenu} ${
                  openDropdown === category.id ? styles.dropdownMenuActive : ""
                }`}
                role="menu"
                aria-hidden={openDropdown !== category.id}
              >
                {category.links.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <hr className={styles.hr} />
        <div className={styles.authButtons}>
          <button className={`${styles.btn} ${styles.login}`}>Login</button>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Sign Up
          </button>
        </div>
      </div>

      <button
        className={styles.mobileToggle} 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <img
          src={isMobileMenuOpen ? CloseIcon : HamburgerIcon}
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}
