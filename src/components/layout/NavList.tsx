import React, { Dispatch, SetStateAction } from "react";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import nav from "@constants/nav.json";

interface NavListProps {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

const NavList: React.FC<NavListProps> = ({ setIsNavOpen }) => {
  return (
    <ul className="mt-2 mb-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      {nav.map((item) => (
        <NavLink
          key={`nav:${item.title}`}
          to={item.link}
          className={({ isActive }) =>
            `p-1 font-bold text-base md:text-sm text-primary-100 ${
              isActive
                ? "pb-1 border-b-2 border-b-primary-100 transition duration-500 ease-in-out"
                : "bg-transparent border-b-2 border-transparent"
            }`
          }
          onClick={() => setIsNavOpen(false)} // 페이지 이동 시 nav바를 닫음
        >
          <Typography
            key={`nav:${item.title}`}
            as="li"
            variant="small"
            className="p-1 font-bold text-base md:text-sm text-primary-100"
            placeholder={item.title}
          >
            {item.title}
          </Typography>
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;
