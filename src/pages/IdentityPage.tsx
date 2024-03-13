import Filter from "@components/Filter/Filter";
import IdentityThumbnailCard from "@components/IdentityThumbnailCard";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

const IdentityPage = () => {
  const [isSync, setIsSync] = useState(false);

  return (
    <div className="flex font-sans text-primary-100 font-bold mt-4">
      <div className="w-[300px] min-w-[300px]">
        <div className="flex justify-between items-center">
          <span className="text-4xl">필터</span>
          <Button
            onClick={() => {}}
            className="bg-primary-400 px-4 py-1 text-lg text-primary-100 hover:bg-primary-300 rounded"
            placeholder={undefined}
          >
            초기화
          </Button>
        </div>
        <Filter />
      </div>
      <div className="flex-auto pl-10">
        {/* 상단 제목, 버튼 */}
        <div className="flex justify-between items-center">
          <span className="text-4xl">인격</span>
          <div className="flex gap-2">
            <Button
              className="flex gap-2 items-center bg-primary-400 px-4 py-1 text-md font-sansLight text-white hover:bg-primary-300 rounded"
              placeholder={undefined}
              onClick={() => setIsSync((prev) => !prev)}
            >
              <span className="pt-1">동기화 일러스트</span>

              {isSync ? (
                <FaCheckCircle className="text-primary-200" />
              ) : (
                <FaRegCircle className="text-primary-200" />
              )}
            </Button>
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="이름으로 검색"
                containerProps={{
                  className:
                    "min-w-[200px] !bg-primary-400 !rounded-full !pt-1",
                }}
                className="!border-none pl-9 placeholder:text-primary-100 text-white focus:!border-primary-300 !focus:ring-0 !focus:outline-none !focus:ring-0 !focus:ring-offset-0 !focus:ring-offset-transparent !focus:border-transparent !focus:ring-transparent"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
              <div className="!absolute left-3 top-[8px]">
                <LuSearch size={22} />
              </div>
            </div>
          </div>
        </div>
        {/* 썸네일 리스트 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-8">
          <IdentityThumbnailCard
            id={4}
            grade={1}
            name="N사 중간 망치"
            character="돈키호테"
            imageBefore="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_normal.png"
            imageAfter="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_gacksung.png"
            isSync={isSync}
          />
          <IdentityThumbnailCard
            id={4}
            grade={2}
            name="N사 중간 망치"
            character="돈키호테"
            imageBefore="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_normal.png"
            imageAfter="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_gacksung.png"
            isSync={isSync}
          />
          <IdentityThumbnailCard
            id={4}
            grade={3}
            name="N사 중간 망치"
            character="돈키호테"
            imageBefore="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_normal.png"
            imageAfter="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_gacksung.png"
            isSync={isSync}
          />
          <IdentityThumbnailCard
            id={4}
            grade={2}
            name="N사 중간 망치"
            character="돈키호테"
            imageBefore="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_normal.png"
            imageAfter="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_gacksung.png"
            isSync={isSync}
          />
        </div>
      </div>
    </div>
  );
};

export default IdentityPage;
