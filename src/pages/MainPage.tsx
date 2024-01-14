import ThumbnailCard from "@components/ThumbnailCard";
import React from "react";

import YouTube from "react-youtube";

const MainPage = () => {
  return (
    <div className="">
      <div className="notice flex justify-between items-center text-xs md:text-sm cursor-pointer hover:text-blue-500">
        <div className="flex gap-2 items-center whitespace-nowrap">
          <span className="">[공지사항]</span>
          <p>단테의 빵과 수프 서비스 오픈 안내</p>
        </div>
        <span className="hidden md:flex">2023.01.14</span>
      </div>
      <div className="w-full md:w-1/2 mx-auto my-10">
        <YouTube
          videoId="liylBoT0FCs"
          className="aspect-video"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <ThumbnailCard />
      </div>
    </div>
  );
};

export default MainPage;
