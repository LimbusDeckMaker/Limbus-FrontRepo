import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import NavList from "./NavList";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  const handleWindowResize = () =>
    window.innerWidth >= 640 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    // 페이지 이동 시 nav바를 닫음
    setOpenNav(false);
  }, [location]);

  return (
    <Navbar
      className="mx-auto max-w-full px-4 md:px-16 py-3 rounded-none border-none bg-primary-400"
      placeholder={undefined}
    >
      <div className="md:h-14 flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-6 w-6 md:h-10 md:w-10"
            />
          </Link>
          <Typography
            as="a"
            href="/"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 font-title text-lg md:text-2xl text-primary-100"
            placeholder={undefined}
          >
            단테의 빵과 수프
          </Typography>
        </div>

        <div className="hidden md:block">
          <NavList setIsNavOpen={setOpenNav} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
        >
          {openNav ? (
            <HiOutlineX size={20} className="text-primary-100" />
          ) : (
            <HiMenuAlt3 size={20} className="text-primary-100" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setIsNavOpen={setOpenNav} />
      </Collapse>
    </Navbar>
  );
};

export default Header;
