import { getAllIdentity } from "@apis/dictionaryApi";
import { queryClient } from "@apis/queryClient";
import SelectIdentity from "@components/Deck/SelectIdentity";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DeckListPage = () => {
  const [mine, setMine] = useState<string[]>([]);

  const { data, isLoading } = useQuery({
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
      <ul>
        {mine.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeckListPage;
