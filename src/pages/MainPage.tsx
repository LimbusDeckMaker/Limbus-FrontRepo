import React from "react";

// import ThumbnailCard from "@components/ThumbnailCard";
import YouTube from "react-youtube";
// import main from "@constants/main.json";
import SiteLink from "@components/SiteLink";

const MainPage = () => {
  return (
    <div className="font-sansBold text-primary-100">
      <div className="flex items-center justify-center w-3/4 mx-auto gap-4">
        <div className="flex flex-col gap-4 items-center justify-center w-1/2">
          <div className="bg-primary-400 w-full mx-auto p-4">
            <div className="pb-2">
              <span className="text-xl">최신 유튜브</span>
            </div>
            <YouTube
              videoId="nYPiiiBbP18"
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
          <div className="bg-primary-400 w-full mx-auto p-4">
            <div className="pb-2">
              <span className="text-xl">공식사이트 바로가기</span>
            </div>
            <SiteLink />
          </div>
        </div>
        <div className="notice-container bg-primary-400 w-1/2 mx-auto p-4">
          <div className="pb-2">
            <span className="text-xl">최신 공지사항</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
