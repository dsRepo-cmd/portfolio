import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../../components/ThemeSwitcher";

interface navItemsProps {
  id: number;
  name: string;
}

const navItems: navItemsProps[] = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleNav = (name: string | null) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-2 sm:py-2 z-30 ${
        scrollPosition > 0
          ? "bg-white dark:bg-[#282c34] shadow-md dark:shadow-black"
          : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl text-nowrap"
          >
            Web Developer
          </Link>
        </div>

        {/* hamburger */}
        <button
          onClick={() => toggleNav(null)}
          className="cursor-pointer text-2xl hidden md:block"
          aria-label="nav-button-open"
        >
          <HiMenu size={25} />
        </button>

        <ul
          className={`flex items-center lg:space-x-8 space-x-11 ${
            !isOpen ? "md:flex" : "md:right-[0%]"
          } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white md:dark:bg-[#282c34] `}
        >
          <li className="text-3xl hidden md:block relative right-0 top-4 container mx-auto">
            <button
              onClick={() => toggleNav(null)}
              aria-label="nav-button-close"
            >
              <RxCross2 size={25} />
            </button>
          </li>

          {navItems.map((item) => (
            <li
              key={item.id}
              className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center  "
            >
              <a
                onClick={() => toggleNav(item.name)}
                href={`#${item.name}`}
                className={`uppercase cursor-pointer text-black dark:text-white hover:text-yellow-600 font-bold duration-300 ${
                  item.name === activeIndex ? "text-yellow-600" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

          <li className=" ps-20 lg:ps-4 md:pt-20 md:absolute md:bottom-20 ">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
