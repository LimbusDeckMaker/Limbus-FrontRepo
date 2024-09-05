import { getAllIdentity } from "@apis/dictionaryApi";
import { queryClient } from "@apis/queryClient";
import SelectIdentity from "@components/Deck/SelectIdentity";
import ShowIdentity from "@components/Deck/ShowIdentity";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DeckListPage = () => {
  const [mine, setMine] = useState<number[]>([]);

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
      <h1>Deck List</h1>
      <SelectIdentity identities={data} setMine={setMine} />
      <ShowIdentity identities={data} mine={mine} />
    </div>
  );
};

export default DeckListPage;
