import { TierData } from "@interfaces/identity";
import { getIdentity } from "@apis/dictionaryApi";
import { queryClient } from "@apis/queryClient";
import { IdentityOptions } from "@interfaces/identity";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TierLine from "./TierLine";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TierTable = () => {
  const [sortedDataS, setSortedDataS] = useState<TierData[]>([]);
  const [sortedDataA, setSortedDataA] = useState<TierData[]>([]);
  const [sortedDataB, setSortedDataB] = useState<TierData[]>([]);
  const [sortedDataC, setSortedDataC] = useState<TierData[]>([]);
  const [sortedDataD, setSortedDataD] = useState<TierData[]>([]);
  const [sortedDataE, setSortedDataE] = useState<TierData[]>([]);
  const [sortedDataF, setSortedDataF] = useState<TierData[]>([]);
  const [isSync, setIsSync] = useState(false);

  // 필터링 옵션
  const options: IdentityOptions = {
    sinner: [],
    season: [],
    grade: ["3"],
    affiliation: [],
    keyword: [],
    etcKeyword: [],
    resources: [],
    types: [],
    minSpeed: 1,
    maxSpeed: 9,
    minWeight: 1,
    maxWeight: 9,
  };

  // 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["identity", options],
    queryFn: () => getIdentity(options),
    retry: 1,
    placeholderData: () => {
      const cachedData = queryClient.getQueryData(["identity", options]);
      return cachedData || [];
    },
    staleTime: 1000 * 60 * 60 * 24, // 하루
    refetchOnWindowFocus: false, // 포커스 할 때마다 다시 불러오는 기능 끔
  });

  // 분류 기준
  // 여기서 id만 설정하면 티어 바꿀 수 있음

  // S: 100 약상, 72 쥐싱, 102 선장마엘, 61 디로쟈
  const S = [100, 72, 102, 61];

  // A: 27 퀴히스, 75 섕싱, 98 넬슈, 23 r히스, 43 레이첼, 114 레이첼
  const A = [27, 75, 98, 23];

  // B: 7 레이첼, 8 레이첼, 9 레이첼, 10 레이첼, 11 레이첼, 12 레이첼
  const B = [7, 8, 9, 10, 11, 12];

  // C: 13 레이첼, 14 레이첼, 15 레이첼, 16 레이첼, 17 레이첼, 18 레이첼
  const C = [13, 14, 15, 16, 17, 18];

  // D: 19 레이첼, 20 레이첼, 21 레이첼, 22 레이첼, 23 레이첼, 24 레이첼
  const D = [19, 20, 21, 22, 23, 24];

  // E: 25 레이첼, 26 레이첼, 27 레이첼, 28 레이첼, 29 레이첼, 30 레이첼
  const E = [19, 20, 21, 22, 23, 24];

  // F: 25 레이첼, 26 레이첼, 27 레이첼, 28 레이첼, 29 레이첼, 30 레이첼
  const F = [25, 26, 27, 28, 29, 30];

  // 분류 함수
  const sortData = (data: TierData[], criteria: number[]) => {
    return criteria
      .map((id) => data.find((item) => item.id === id))
      .filter((item) => item !== undefined) as TierData[];
  };

  useEffect(() => {
    // 데이터를 분류하고 상태 업데이트
    setSortedDataS(sortData(data, S));
    setSortedDataA(sortData(data, A));
    setSortedDataB(sortData(data, B));
    setSortedDataC(sortData(data, C));
    setSortedDataD(sortData(data, D));
    setSortedDataE(sortData(data, E));
    setSortedDataF(sortData(data, F));
  }, [data]);

  return (
    <div>
      <div className="flex gap-2 justify-end my-3">
        <Tooltip
          className="bg-primary-500 text-primary-100 text-xs"
          content={
            <span>체크 시 3 동기화 후 이미지를 확인할 수 있습니다.</span>
          }
        >
          <Button
            className="min-w-[80px] flex gap-2 items-center bg-primary-400 px-2 md:px-4 py-0 md:py-1 font-sansLight text-sm md:text-base text-white hover:bg-primary-300 rounded"
            placeholder={undefined}
            onClick={() => setIsSync((prev) => !prev)}
          >
            <span className="pt-1 whitespace-nowrap">동기화</span>
            {isSync ? (
              <FaCheckCircle className="text-primary-200" />
            ) : (
              <FaRegCircle className="text-primary-200" />
            )}
          </Button>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-2">
        <TierLine
          title="S"
          color="bg-res-red"
          data={sortedDataS}
          isSync={isSync}
        />
        <TierLine
          title="A"
          color="bg-res-orange"
          data={sortedDataA}
          isSync={isSync}
        />
        <TierLine
          title="B"
          color="bg-res-yellow"
          data={sortedDataB}
          isSync={isSync}
        />
        <TierLine
          title="C"
          color="bg-res-green"
          data={sortedDataC}
          isSync={isSync}
        />
        <TierLine
          title="D"
          color="bg-res-blue"
          data={sortedDataD}
          isSync={isSync}
        />
        <TierLine
          title="E"
          color="bg-res-navy"
          data={sortedDataE}
          isSync={isSync}
        />
        <TierLine
          title="F"
          color="bg-res-purple"
          data={sortedDataF}
          isSync={isSync}
        />
      </div>
      <div className="flex justify-end gap-2 text-xs text-white font-sansLight my-2">
        <div className="flex items-center gap-1">
          <div className="bg-green-900 w-3 h-3"></div>
          <span>발푸르기스의 밤 한정</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-red-900 w-3 h-3"></div>
          <span>이번 시즌 자판기 획득 불가</span>
        </div>
      </div>
    </div>
  );
};

export default TierTable;
