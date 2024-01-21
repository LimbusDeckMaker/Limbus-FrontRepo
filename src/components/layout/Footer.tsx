import React from "react";

import { IconButton, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import nav from "@constants/nav.json";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 md:px-10">
      <hr className="my-8 border-black" />
      <div className="md:flex md:justify-between">
        <div className="text-center md:text-left mt-2">
          <p className="font-title text-sm">단테의 빵과 수프</p>
          <p className="text-xs text-blue-gray-500 py-2 font-light">
            팀 단테의 빵과 수프입니다.
            <br />
            이메일@gmail.com
          </p>
        </div>
        <div className="hidden md:flex mb-14">
          <ul className="mt-2 mb-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
            {nav.map((item) => (
              <Typography
                key={`footer_nav:${item.title}`}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-content text-xs md:text-sm"
                placeholder={item.title}
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "text-gray-900" : "text-gray-700"
                  }
                >
                  {item.title}
                </NavLink>
              </Typography>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>LOGO</p>
        <div className="flex">
          <IconButton variant="text" placeholder={undefined}>
            <FaGithub size={25} />
          </IconButton>
          <IconButton variant="text" placeholder={undefined}>
            <FaYoutube size={25} />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
