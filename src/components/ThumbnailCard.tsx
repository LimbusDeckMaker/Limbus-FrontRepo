import React from "react";

const ThumbnailCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md aspect-video">
      <img
        src="https://images.unsplash.com/photo-1622495970637-8f0d3f2d9a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmQlMjBzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
        className="object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">카테고리</h3>
        <p className="text-sm text-gray-500">제목</p>
      </div>
    </div>
  );
};

export default ThumbnailCard;
