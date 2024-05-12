import { Button, Dialog, Input, Spinner } from "@material-tailwind/react";
import { egoOptionsState, optionsState } from "@recoils/atoms";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { getEgo } from "@apis/dictionaryApi";
import ErrorMessage from "@components/ui/ErrorMessage";
import EgoFilter from "@components/Filter/EgoFilter";

interface EgoOptions {
  sinner?: number[];
  season?: number[];
  grade?: string[];
  keyword?: string[];
  etcKeyword?: string[];
  resources?: string[];
  types?: string[];
  minWeight?: number;
  maxWeight?: number;
}

const EgoPage = () => {
  const [isSync, setIsSync] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 640 && setOpenFilter(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const resetOptions = useResetRecoilState(optionsState);

  const handleResetOptions = () => {
    resetOptions();
    window.location.reload();
  };

  const options: EgoOptions = useRecoilValue(egoOptionsState);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ego", options],
    queryFn: () => getEgo(options),
  });

  console.log(data);

  if (isError) {
    return (
      <div className="h-screen mt-[30vh]">
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="flex font-sans text-primary-100 font-bold mt-4">
      {/* 필터 */}
      <div className="w-[300px] min-w-[300px] hidden lg:block">
        <div className="flex justify-between items-center mb-8">
          <span className="text-3xl lg:text-4xl">필터</span>
          <Button
            onClick={handleResetOptions}
            className="bg-primary-400 px-4 py-1 text-lg text-primary-100 hover:bg-primary-300 rounded"
            placeholder={undefined}
          >
            초기화
          </Button>
        </div>
        <EgoFilter />
      </div>
      <Dialog
        open={openFilter}
        handler={() => setOpenFilter(false)}
        placeholder={undefined}
        size={"xs"}
      >
        <EgoFilter />
      </Dialog>
      <div className="flex-auto md:pl-10">
        {/* 상단 제목, 버튼 */}

        <div className="flex justify-between items-center">
          <span className="text-3xl lg:text-4xl whitespace-nowrap hidden lg:block pr-2">
            에고
          </span>

          <div className="my-2 grid grid-cols-1 sm:flex sm:justify-between w-full lg:w-fit gap-2 h-fit md:h-10">
            <Button
              className="h-8 lg:hidden bg-primary-400 lg:h-8 py-0.5 px-4 text-lg lg:text-sm text-primary-100 hover:bg-primary-300 rounded"
              onClick={() => setOpenFilter(true)}
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
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <Spinner className="w-8 h-8 text-primary-200" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-8">
            {/* {data &&
              data.map((item: any, index: number) => (
                <IdentityThumbnailCard
                  key={index}
                  id={item.id}
                  grade={item.grade}
                  name={item.name}
                  character={item.character}
                  imageBefore={item.beforeImage}
                  imageAfter={item.afterImage}
                  isSync={isSync}
                />
              ))} */}
            {data && data.length === 0 && (
              <div className="text-primary-200 text-center w-full">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EgoPage;
