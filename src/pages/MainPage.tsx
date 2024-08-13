import React from "react";

import Banner from "@components/Main/Banner";
import NewsCard from "@components/Main/NewsCard";
import YoutubePlay from "@components/Main/YoutubePlay";
import MenuCard from "@components/Main/MenuCard";

const MainPage = () => {
  return (
    <div className="py-1 md:py-10 flex flex-col gap-3 md:gap-12">
      <div className="container mx-auto">
        <Banner />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-10">
        {/* YoutubePlay가 화면의 60%를 차지하게 설정 */}
        <div className="w-full md:w-3/5">
          <YoutubePlay />
        </div>
        {/* NewsCard가 나머지 40%를 차지하게 설정 */}
        <div className="w-full md:w-2/5">
          <NewsCard />
        </div>
      </div>
      <div className="flex justify-between w-full h-40 gap-4">
        <MenuCard menu={menu[0]} />
        <MenuCard menu={menu[1]} />
        <MenuCard menu={menu[2]} />
        <MenuCard menu={menu[3]} />
      </div>
    </div>
  );
};

const menu = [
  {
    name: "인격 도감",
    image:
      "https://limbus-image-bucket.s3.amazonaws.com/%EC%9D%B4%EC%83%81/Identity/LCB%20%EC%88%98%EA%B0%90%EC%9E%90/10101_normal.webp",
    link: "/identity",
  },
  {
    name: "에고 도감",
    image:
      "https://limbus-image-bucket.s3.amazonaws.com/%EB%A1%9C%EC%9F%88/EGO/%ED%95%8F%EB%B9%9B%EC%9A%95%EB%A7%9D/20906_cg.webp",
    link: "/ego",
  },
  {
    name: "리세마라 티어표",
    image:
      "https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%ED%99%8D%EB%A3%A8/Identity/20%EA%B5%AC%20%EC%9C%A0%EB%A1%9C%EC%A7%80%EB%B9%84/10609_gacksung.webp",
    link: "/tier",
  },
  {
    name: "키워드별 인격 분류표",
    image:
      "https://limbus-image-bucket.s3.amazonaws.com/%EA%B7%B8%EB%A0%88%EA%B3%A0%EB%A5%B4/Identity/%ED%9D%91%EC%9A%B4%ED%9A%8C%20%EB%B6%80%EC%A1%B0%EC%9E%A5/11208_normal.webp",
    link: "/keyword",
  },
];

export default MainPage;
