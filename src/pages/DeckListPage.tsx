import { getAllIdentity } from "@apis/dictionaryApi";
import { queryClient } from "@apis/queryClient";
import SelectIdentity from "@components/Deck/SelectIdentity";
import ShowIdentity from "@components/Deck/ShowIdentity";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DeckListPage = () => {
  const [mine, setMine] = useState<number[]>([]);
  const [isResult, setIsResult] = useState(false);

  const { data } = useQuery({
    queryKey: ["allIdentity"],
    queryFn: () => getAllIdentity(),
    retry: 1,
    placeholderData: () => {
      const cachedData = queryClient.getQueryData(["allIdentity"]);
      return cachedData || [];
    },
    staleTime: 1000 * 60 * 60 * 24, // 하루
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1 className="text-lg md:text-2xl font-bold text-primary-100 font-sans">
        인격 한 눈에 보기
      </h1>

      <div>
        {isResult ? (
          <ShowIdentity
            identities={data}
            mine={mine}
            setIsResult={setIsResult}
          />
        ) : (
          <SelectIdentity
            identities={data}
            setMine={setMine}
            setIsResult={setIsResult}
          />
        )}
      </div>
    </div>
  );
};

export default DeckListPage;
