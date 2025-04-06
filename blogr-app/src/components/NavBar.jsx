import { useState, useEffect } from "react"; // Removed useCallback from import
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

  // Simplified: Directly define the function without useCallback
  const toggleDropdown = (id) => {
    // If the clicked dropdown (id) is already open (=== openDropdown),
    // set openDropdown to null (close it).
    // Otherwise, set openDropdown to the clicked id (open it).
    setOpenDropdown((prevOpenId) => (prevOpenId === id ? null : id));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle the mobile menu state
    setOpenDropdown(null); // Close any open dropdown when toggling the mobile menu
  };

  // useEffect remains largely the same, as its core logic wasn't tied to useCallback
  useEffect(() => {
    // Function to close dropdown if click happens outside relevant nav areas
    const handleClickOutside = (event) => {
      // Check if the click target is NOT inside an element with class .navItem
      // AND also NOT inside the mobile menu toggle button
      if (
        !event.target.closest(`.${styles.navItem}`) &&
        !event.target.closest(`.${styles.mobileToggle}`)
      ) {
        setOpenDropdown(null); // If click is outside, close dropdown
      }
    };

    // Function to check window size and update mobile view status
    const handleResize = () => {
      const currentlyMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      // Only update state if the mobile view status actually changed
      if (currentlyMobile !== isMobileView) {
        setIsMobileView(currentlyMobile);
        // If resizing TO desktop view, close the mobile menu and dropdowns
        if (!currentlyMobile) {
          setIsMobileMenuOpen(false);
          setOpenDropdown(null);
        }
      }
    };

    handleResize(); // Initial check when component mounts

    // Add event listeners
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove listeners when component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]); // Dependency array: Re-run effect logic related to resize only if isMobileView changes

  // Calculate classes for the navigation container based on mobile menu state
  const navContainerClasses = `${styles.navContainer} ${
    isMobileMenuOpen ? styles.navContainerActive : ""
  }`;

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <a href="/" className={styles.logo}>
        <img src={LogoImage} alt="Blogr Homepage" />
      </a>

      {/* The main navigation container (links + auth buttons) */}
      <div className={navContainerClasses}>
        {/* List of navigation links/dropdowns */}
        <ul className={styles.navLinks}>
          {linksData.map((category) => (
            <li key={category.id} className={styles.navItem}>
              {/* Button to toggle each dropdown */}
              <button
                className={`${styles.dropdownToggle} ${
                  openDropdown === category.id
                    ? styles.dropdownToggleActive
                    : ""
                }`}
                onClick={() => toggleDropdown(category.id)} // Use the simplified function
                aria-expanded={openDropdown === category.id}
                aria-haspopup="true"
                aria-controls={`menu-${category.id}`}
              >
                {category.title}
              </button>
              {/* The dropdown menu itself */}
              <ul
                id={`menu-${category.id}`}
                className={`${styles.dropdownMenu} ${
                  openDropdown === category.id ? styles.dropdownMenuActive : ""
                }`}
                role="menu"
                aria-hidden={openDropdown !== category.id}
              >
                {/* Links within the dropdown */}
                {category.links.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <hr className={styles.hr} /> {/* Separator line */}
        {/* Login/Sign Up buttons */}
        <div className={styles.authButtons}>
          <button className={`${styles.btn} ${styles.login}`}>Login</button>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu toggle button (Hamburger/Close icon) */}
      <button
        className={styles.mobileToggle}
        onClick={toggleMobileMenu} // Use the mobile menu toggle function
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <img
          src={isMobileMenuOpen ? CloseIcon : HamburgerIcon}
          alt={isMobileMenuOpen ? "Close Icon" : "Hamburger Icon"} // Decorative image, alt is empty
          aria-hidden="true" // Hide decorative image from screen readers
        />
      </button>
    </nav>
  );
}
