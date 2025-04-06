import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navBaseClasses = "fixed z-50 transition-all duration-300 ease-in-out";
  const smallScreenPosition = isScrolled
    ? "top-2 opacity-90"
    : "top-[6.5rem] opacity-100";
  const largeScreenPosition = isScrolled ? "top-2" : "top-[8.25rem]";

  return (
    <div className="relative">
      <div
        className={`${
          isSmallScreen
            ? `${navBaseClasses} left-8 right-8 ${smallScreenPosition}`
            : `${navBaseClasses} side-bar ${largeScreenPosition}`
        }`}
      >
        <div
          className={`${
            isSmallScreen ? "container mx-auto p-4" : "p-5 w-full"
          } bg-primary rounded-md`}
        >
          <nav>
            <ul
              className={`uppercase tracking-tight font-semibold ${
                isSmallScreen
                  ? "flex gap-5 justify-center"
                  : "flex flex-col gap-5"
              }`}
            >
              <NavItem link="about-me" name={isSmallScreen ? "a" : "about me"} />
              <NavItem link="projects" name={isSmallScreen ? "p" : "projects"} />
              <NavItem link="more-on-me" name={isSmallScreen ? "m" : "more on me"} />
              <NavItem link="resume" name={isSmallScreen ? "r" : "resume"} />

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

interface NavProps {
  link: string;
  name: string;
}

const NavItem = ({ link, name }: NavProps) => {
  return (
    <li className="text-secondary cursor-pointer">
      <Link
        to={link}
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
        onClick={scrollToTop}
      >
        {name}
      </Link>
    </li>
  );
};

export default Nav;
