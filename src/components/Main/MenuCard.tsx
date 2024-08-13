import React from "react";
import { Link } from "react-router-dom";

interface Menu {
  name: string;
  image: string;
  link: string;
}

const MenuCard = ({ menu }: { menu: Menu }) => {
  return (
    <div className="rounded-lg w-full h-full">
      <Link to={menu.link}>
        <div className="relative w-full h-full">
          {/* 배경 이미지 */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${menu.image})`,
            }}
          ></div>

          {/* 오버레이: 배경 이미지 위에 반투명한 레이어 */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

          {/* 텍스트 오버레이 */}
          <div className="relative z-10 text-balance text-center flex items-center h-full justify-center">
            <div className="text-white font-sans text-xl">{menu.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
