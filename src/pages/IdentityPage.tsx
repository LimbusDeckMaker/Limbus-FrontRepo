import Filter from "@components/Filter/Filter";
import IdentityThumbnailCard from "@components/IdentityThumbnailCard";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

const IdentityPage = () => {
  const [isSync, setIsSync] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 640 && setOpenFilter(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex font-sans text-primary-100 font-bold mt-4">
      {/* 필터 */}
      <div className="w-[300px] min-w-[300px] hidden lg:block">
        <div className="flex justify-between items-center">
          <span className="text-3xl lg:text-4xl">필터</span>
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

      <div className="flex-auto md:pl-10">
        {/* 상단 제목, 버튼 */}

        <div className="flex justify-between items-center">
          <span className="text-3xl lg:text-4xl whitespace-nowrap hidden lg:block pr-2">
            인격
          </span>

          <div className="my-2 grid grid-cols-1 sm:flex sm:justify-between w-full lg:w-fit gap-2 h-fit md:h-10">
            <Button
              className="h-8 lg:hidden bg-primary-400 lg:h-8 py-0.5 px-4 text-lg lg:text-sm text-primary-100 hover:bg-primary-300 rounded"
              onClick={() => {}}
              placeholder={undefined}
            >
              <span className="whitespace-nowrap">필터</span>
            </Button>
            <div className="flex gap-2">
              <Button
                className="min-w-[140px] flex gap-2 items-center bg-primary-400 px-2 md:px-4 py-0 md:py-1 font-sansLight text-sm md:text-base text-white hover:bg-primary-300 rounded"
                placeholder={undefined}
                onClick={() => setIsSync((prev) => !prev)}
              >
                <span className="pt-1 whitespace-nowrap">동기화 일러스트</span>

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
                      "min-w-[100px] md:min-w-[200px] !bg-primary-400 !rounded-full !pt-1 !h-8 md:!h-10",
                  }}
                  className="!border-none pl-9 placeholder:text-primary-100 text-white focus:!border-primary-300 !focus:ring-0 !focus:outline-none !focus:ring-0 !focus:ring-offset-0 !focus:ring-offset-transparent !focus:border-transparent !focus:ring-transparent"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <div className="!absolute left-3 top-[8px]">
                  <LuSearch className="md:w-6 md:h-6" />
                </div>
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
            name="로보토미 E.G.O::여우비"
            character="돈키호테"
            imageBefore="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_normal.png"
            imageAfter="https://image-link-bucket.s3.amazonaws.com/돈키호테/Identity/N사 중간 망치/10304_gacksung.png"
            isSync={isSync}
          />
          <IdentityThumbnailCard
            id={4}
            grade={3}
            name="워더링하이츠 치프 버틀러"
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
