import React from "react";

interface NewsItem {
  title: string;
  url: string;
  date: string;
  image: string;
}

const ThumbnailCard = ({ title, url, date, image }: NewsItem) => {
  return (
    <div className="w-full bg-primary-450 p-2 mb-2 hover:underline">
      <a href={url} target="blank" className="flex gap-3 w-full">
        <div className="bg-white rounded-md shadow-md aspect-video w-1/2">
          <img
            src={image || "https://clan.akamai.steamstatic.com/images/43587230/62e63adbc551470064256668df2ba6cae5138cad_400x225.png"}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-1">
          <span className="text-sm lg:text-lg font-number">{date.split("T")[0]}</span>
          <span className="font-eng text-sm lg:text-base !leading-tight truncate md:text-clip md:whitespace-normal">
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ThumbnailCard;
