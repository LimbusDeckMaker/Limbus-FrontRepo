import React from "react";

interface NewsItem {
  title: string;
  url: string;
  date: string;
  image: string;
}

const ThumbnailCard = ({ title, url, date, image }: NewsItem) => {
  return (
    <div className="w-full bg-primary-450 p-2 mb-2">
      <a href={url} target="blank" className="flex gap-3 w-full">
        <div className="bg-white rounded-md shadow-md aspect-video w-1/2">
          <img
            src={image}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-1">
          <span className="text-xs md:text-sm lg:text-lg font-number">
            {date}
          </span>
          <span className="font-eng text-xs md:text-sm lg:text-base !leading-tight">
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ThumbnailCard;
