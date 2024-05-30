import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaGithub, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { toggleDark, toggleOpenNav } from "../app/features/basicSlice";
import { NavLink } from "react-router-dom";

const navMenus = [
  { href: "", text: "home" },
  { href: "", text: "satu" },
];

const Header = () => {
  return (
    <>
      <header className="border-b px-3 lg:px-12 h-16">
        <div className="flex justify-between items-center h-full gap-6">
          <Logo />
          <NavMain />
          <div className="flex gap-3">
            <SourceCode />
            <DarkMode />
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
};
export default Header;

// nav
const NavBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenNav());
  };
  return (
    <button
      onClick={handleClick}
      className={`block ml-2 text-xl sm:hidden ${openNav ? "rotate-180" : ""} transition-all duration-150`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

const NavContent = ({ className }) => {
  return navMenus.map((item, i) => (
    <NavLink to={item?.href} key={i} className={`${className} hover:text-cyan-500`}>
      {item?.text}
    </NavLink>
  ));
};
NavContent.propTypes;

const NavMain = () => {
  return (
    <div className="hidden sm:flex w-full gap-3 capitalize">
      <NavContent />
    </div>
  );
};

const NavCollapse = () => {
  const { openNav, dark } = useSelector((state) => state.basic);
  return (
    <div
      className={`z-50 flex capitalize flex-col border-b p-2 px-3 rounded-b sm:hidden ${
        openNav ? "scale-y-100" : "scale-y-0"
      } ${dark ? "bg-slate-800" : "bg-white"} origin-top fixed w-full top-16 transition-all duration-150`}
    >
      <NavContent className="py-2 border-b" />
    </div>
  );
};

// logo, source code, dark mode
const Logo = () => {
  return <a href="/">Logo</a>;
};

const SourceCode = () => {
  return (
    <a href="/" type="button" className="text-xl">
      <FaGithub />
    </a>
  );
};

const DarkMode = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleDark());
  };
  return (
    <button onClick={handleClick} type="button" className="size-5 text-xl overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
};
