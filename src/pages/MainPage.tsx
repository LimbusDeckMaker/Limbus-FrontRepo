import React from "react";

import YouTube from "react-youtube";
import SiteLink from "@components/SiteLink";
import ThumbnailCard from "@components/ThumbnailCard";
import news from "@constants/news.json";
import { useQuery } from '@tanstack/react-query';
import { Main_Keys } from "@constants/queryKeys";
import { getYoutube } from "@apis/mainApi";

const MainPage = () => {

  const { data } = useQuery({
    queryKey: Main_Keys.youtube,
    queryFn: getYoutube,
  });

  console.log('data:', data);

  return (
    <div className="font-sansBold text-primary-100 py-4 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-center lg:w-3/4 mx-auto gap-4">
        <div className="flex flex-col gap-4 items-center justify-center w-11/12 md:w-1/2 md:mx-auto">
          <div className="bg-primary-400 w-full mx-auto p-2 md:p-4">
            <div className="pb-2">
              <span className="text-base md:text-xl">최신 유튜브</span>
            </div>
            <YouTube
              videoId={data?.videoId || "HTRQgFYCXHY"} // data가 없는 경우 프로젝트문 대표 영상 출력
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
          <div className="bg-primary-400 w-full mx-auto p-2 md:p-4">
            <div className="pb-2">
              <span className="text- base md:text-xl">공식사이트 바로가기</span>
            </div>
            <SiteLink />
          </div>
        </div>
        <div className="notice-container bg-primary-400 w-11/12 md:w-1/2 mx-auto p-2 md:p-4">
          <div className="pb-2">
            <span className="text-base md:text-xl">최신 공지사항</span>
          </div>

          {news.map((item, index) => (
            <ThumbnailCard
              title={item.title}
              url={item.url}
              date={item.date}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
