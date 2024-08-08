import React from "react";
import { TierData } from "@interfaces/identity";
import { Link } from "react-router-dom";

const TierCard = ({ data, isSync }: { data: TierData; isSync: boolean }) => {
  const walpurgisIds = [1, 10, 30, 130];
  const isWalpurgis = walpurgisIds.includes(data.id);
  const isSeason3 = data.season === 3;

  const getBackgroundColor = () => {
    if (isWalpurgis) {
      return "bg-[#0E321A] bg-opacity-70";
    } else if (isSeason3) {
      return "bg-[#320E0E] bg-opacity-70";
    } else {
      return "bg-black bg-opacity-80";
    }
  };

  return (
    <Link to={`/identity/${data.id}`}>
      <li key={data.id} className="relative h-24 w-40">
        <div className="h-full w-full overflow-hidden flex items-center justify-center">
          <img
            src={isSync ? data.afterImage : data.beforeImage}
            alt={data.name}
            className="min-h-full min-w-full object-center"
          />
        </div>
        <div
          className={`absolute bottom-0 w-full h-2/5 flex flex-col items-end justify-center text-white text-xs font-sansLight pr-2 ${getBackgroundColor()}`}
        >
          <span>{data.name}</span>
          <span>{data.character}</span>
        </div>
      </li>
    </Link>
  );
};

export default TierCard;
