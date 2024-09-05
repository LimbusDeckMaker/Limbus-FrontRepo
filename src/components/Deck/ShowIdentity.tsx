import {
  blue,
  etc,
  green,
  navy,
  orange,
  purple,
  red,
  yellow,
} from "@constants/identityKeyword";
import MyIdentityCard from "./MyIdentityCard";
import { Button } from "@material-tailwind/react";

interface ShowIdentityProps {
  identities: Identity[];
  mine: number[];
  setIsResult: (isResult: boolean) => void;
}

const ShowIdentity = ({ identities, mine, setIsResult }: ShowIdentityProps) => {
  const myRed = red.filter((item) => mine.includes(item));
  const myOrange = orange.filter((item) => mine.includes(item));
  const myYellow = yellow.filter((item) => mine.includes(item));
  const myGreen = green.filter((item) => mine.includes(item));
  const myBlue = blue.filter((item) => mine.includes(item));
  const myNavy = navy.filter((item) => mine.includes(item));
  const myPurple = purple.filter((item) => mine.includes(item));
  const myEtc = etc.filter((item) => mine.includes(item));

  const getFilteredIdentities = (ids: number[]) => {
    return identities.filter((identity) => ids.includes(identity.id));
  };

  return (
    <div>
      <p className="font-sansLight text-white text-xs md:text-sm mb-10">
        이미지를 캡처로 저장해 사용해보세요. 보유 인격이 하나도 없는 키워드는
        표시되지 않습니다.
        <br />* 기타 키워드에는 특정 키워드를 가지고 있지 않거나, 키워드를
        가지고 있더라도 거의 사용되지 않는 인격을 표시합니다.
      </p>
      {myRed.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myRed)}
          title="화상"
          color="border-res-red"
        />
      )}
      {myOrange.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myOrange)}
          title="출혈"
          color="border-res-orange"
        />
      )}
      {myYellow.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myYellow)}
          title="진동"
          color="border-res-yellow"
        />
      )}
      {myGreen.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myGreen)}
          title="파열"
          color="border-res-green"
        />
      )}
      {myBlue.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myBlue)}
          title="침잠"
          color="border-res-blue"
        />
      )}
      {myNavy.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myNavy)}
          title="호흡"
          color="border-res-navy"
        />
      )}
      {myPurple.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myPurple)}
          title="충전"
          color="border-res-purple"
        />
      )}
      {myEtc.length !== 0 && (
        <MyIdentityCard
          identities={getFilteredIdentities(myEtc)}
          title="기타"
          color="border-black"
        />
      )}
      <div className="flex justify-end">
        <Button
          onClick={() => setIsResult(false)}
          placeholder={undefined}
          className="bg-primary-300"
        >
          다시하기
        </Button>
      </div>
    </div>
  );
};

export default ShowIdentity;
