import React from "react";

import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const nav = [
  { title: "도감", link: "/dictionary" },
  { title: "덱 빌딩", link: "/building" },
  { title: "티어리스트", link: "/tier" },
  { title: "공지사항", link: "/notice" },
  { title: "문의하기", link: "/ask" },
];

const NavList = () => {
  return (
    <ul className="mt-2 mb-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      {nav.map((item) => (
        <Typography
          key={`nav:${item.title}`}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold text-xs md:text-sm"
          placeholder={item.title}
        >
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "pb-1 border-b-2 border-b-black transition duration-500 ease-in-out"
                : "bg-transparent"
            }
          >
            {item.title}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
};

export default NavList;
