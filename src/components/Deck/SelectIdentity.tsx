import { Button } from "@material-tailwind/react";
import { useState } from "react";

interface Props {
  identities: Identity[];
  setMine: (mine: number[]) => void;
  setIsResult: (isResult: boolean) => void;
}

const SelectIdentity = ({ identities, setMine, setIsResult }: Props) => {
  const [myList, setMyList] = useState<number[]>([]);
  const sinners = [
    "이상",
    "파우스트",
    "돈키호테",
    "료슈",
    "뫼르소",
    "홍루",
    "히스클리프",
    "이스마엘",
    "로쟈",
    "싱클레어",
    "오티스",
    "그레고르",
  ];

  const handleSelect = (identity: Identity) => {
    setMyList((prev) => {
      if (prev.includes(identity.id)) {
        return prev.filter((id) => id !== identity.id); // 이미 존재하면 제거
      } else {
        return [...prev, identity.id]; // 존재하지 않으면 추가
      }
    });
  };

  const handleSave = () => {
    setMine(myList);
    setIsResult(true);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <p className="font-sansLight text-white text-xs md:text-sm mb-10">
        내가 보유한 인격을 모두 골라보세요. 아래 저장하기 버튼을 누르면 내가
        가진 인격을 키워드별로 볼 수 있어요.
      </p>
      {sinners.map((sinnerType) => (
        <div key={sinnerType} className="my-2">
          <h3 className="text-primary-100">{sinnerType}</h3>
          <hr className="border-primary-100 mt-1 mb-2" />
          <ul className="flex gap-2 flex-wrap">
            {identities
              .filter((identity) => identity.character === sinnerType)
              .map((identity) => (
                <li key={identity.id}>
                  <button
                    className={`w-28 ${
                      myList.includes(identity.id) ? "" : "opacity-50"
                    }`}
                    onClick={() => handleSelect(identity)}
                  >
                    <div
                      className={`w-28 h-20 rounded-full overflow-hidden ${
                        myList.includes(identity.id) ? "" : "grayscale"
                      }`}
                    >
                      <img
                        src={identity.beforeImage}
                        alt={identity.name}
                        className="object-contain w-full h-full scale-150"
                      />
                    </div>
                    <span
                      className={`text-sm tracking-tight break-keep ${
                        myList.includes(identity.id)
                          ? "text-primary-100"
                          : "text-gray-500"
                      }`}
                    >
                      {identity.name}
                    </span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <Button
          onClick={handleSave}
          placeholder={undefined}
          className="bg-primary-300"
        >
          저장하기
        </Button>
      </div>
    </div>
  );
};

export default SelectIdentity;
