import React from "react";

import { IconButton, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import nav from "@constants/nav.json";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-400 px-4 md:px-16 py-6">
      <hr className="border-primary-100 mb-6" />
      <div className="md:flex md:justify-between">
        <div className="text-center md:text-left mt-2 text-primary-100">
          <p className="font-title text-md">단테의 빵과 수프</p>
          <p className="text-xs py-2 font-light">
            팀 단테의 빵과 수프입니다.
            <br />
            문의사항이나 버그 제보는 아래로 연락해주세요.
            <br />
            bas.limbus@gmail.com
          </p>
        </div>
        <div className="hidden md:flex mb-14">
          <ul className="mt-2 mb-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
            {nav.map((item) => (
              <Typography
                key={`footer_nav:${item.title}`}
                as="li"
                variant="small"
                className="p-1 font-light text-xs md:text-sm text-primary-100"
                placeholder={item.title}
              >
                <NavLink to={item.link}>{item.title}</NavLink>
              </Typography>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <img
          src="/assets/logo2.png"
          alt="footer_logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <div className="flex">
          <IconButton variant="text" placeholder={undefined}>
            <Link to="https://github.com/LimbusDeckMaker" target="_blank">
              <FaGithub size={25} className="text-primary-200" />
            </Link>
          </IconButton>
          {/* <IconButton variant="text" placeholder={undefined}>
          <Link to="https://github.com/LimbusDeckMaker" target="_blank">
            <FaYoutube size={25} className="text-primary-200" />
          </Link>
          </IconButton> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
