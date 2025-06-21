import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface navItemsProps {
  id: number;
  name: string;
}

const navItems: navItemsProps[] = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
  { id: 3, name: "resume" },
  { id: 4, name: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.name);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 py-2 sm:py-2 z-30 transition-colors duration-200 ${
        scrolled
          ? "bg-background shadow-md dark:shadow-black"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl whitespace-nowrap lg:text-2xl"
          >
            {t("web_developer")}
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={toggleNav}
          className="cursor-pointer text-2xl hidden md:block"
          aria-label="nav-button-open"
        >
          <HiMenu size={25} />
        </button>

        {/* Navigation list */}
        <ul
          className={`duration-200 flex items-center lg:space-x-5 space-x-11 ${
            !isOpen ? "md:flex" : "md:right-[0%]"
          } md:flex-col md:absolute  md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-background`}
        >
          {/* Close icon in mobile menu */}
          <li className="text-3xl hidden md:block relative right-0 top-4 container mx-auto">
            <button onClick={toggleNav} aria-label="nav-button-close">
              <RxCross2 size={25} />
            </button>
          </li>

          {/* Nav items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
            >
              <a
                onClick={toggleNav}
                href={`#${item.name}`}
                className={`uppercase cursor-pointer font-bold duration-200  ${
                  activeSection === item.name
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                }`}
              >
                {t(item.name)}
              </a>
            </li>
          ))}

          <li className="ps-20 xl:ps-4 md:absolute md:bottom-40">
            <ThemeSwitcher />
          </li>

          <li className="ps-4 lg:ps-4  md:absolute md:bottom-20">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
