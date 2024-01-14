import React from "react";

type props = {
  title: string;
  image: string;
  link: string;
};

const ThumbnailCard = ({ title, image, link }: props) => {
  return (
    <div className="text-center">
      <a href={link} target="blank">
        <span className="font-title text-xs md:text-sm pb-2">{title}</span>
        <div className="bg-white rounded-md shadow-md aspect-video">
          <img
            src={image}
            alt="thumbnail"
            className="w-full h-full object-cover rounded-md "
          />
        </div>
      </a>
    </div>
  );
};

export default ThumbnailCard;
