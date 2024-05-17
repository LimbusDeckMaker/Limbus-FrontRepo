import { Button, Dialog, Input, Spinner } from "@material-tailwind/react";
import { egoOptionsState } from "@recoils/atoms";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { getEgo } from "@apis/dictionaryApi";
import ErrorMessage from "@components/ui/ErrorMessage";
import EgoFilter from "@components/Filter/EgoFilter";
import EgoThumbnailCard from "@components/EgoThumbnailCard";
import { EgoOptions } from "@interfaces/ego";

const EgoPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleWindowResize = () =>
    window.innerWidth >= 640 && setOpenFilter(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const resetOptions = useResetRecoilState(egoOptionsState);

  useEffect(() => {
    return () => {
      resetOptions();
    };
  }, [resetOptions]);

  const handleResetOptions = () => {
    resetOptions();
    window.location.reload();
  };

  const options: EgoOptions = useRecoilValue(egoOptionsState);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ego", options],
    queryFn: () => getEgo(options),
  });

  const filteredData =
    data &&
    data.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isError) {
    return (
      <div className="h-screen mt-[30vh]">
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="flex font-sans text-primary-100 font-bold mt-4">
      <div className="w-[300px] min-w-[300px] hidden lg:block mt-2">
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
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder="이름으로 검색"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <Spinner className="w-8 h-8 text-primary-200" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-8">
            {filteredData.length > 0 ? (
              filteredData.map((item: any, index: number) => (
                <EgoThumbnailCard
                  key={index}
                  id={item.id}
                  grade={item.grade}
                  name={item.name}
                  character={item.character}
                  imageZoomIn={item.zoomImage}
                  imageZoomOut={item.image}
                />
              ))
            ) : (
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
