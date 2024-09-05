import {
  blue,
  green,
  navy,
  orange,
  purple,
  red,
  yellow,
} from "@constants/identityKeyword";
import MyIdentityCard from "./MyIdentityCard";

interface ShowIdentityProps {
  identities: Identity[];
  mine: number[];
}

const ShowIdentity = ({ identities, mine }: ShowIdentityProps) => {
  const myRed = red.filter((item) => mine.includes(item));
  const myOrange = orange.filter((item) => mine.includes(item));
  const myYellow = yellow.filter((item) => mine.includes(item));
  const myGreen = green.filter((item) => mine.includes(item));
  const myBlue = blue.filter((item) => mine.includes(item));
  const myNavy = navy.filter((item) => mine.includes(item));
  const myPurple = purple.filter((item) => mine.includes(item));

  const getFilteredIdentities = (ids: number[]) => {
    return identities.filter((identity) => ids.includes(identity.id));
  };

  return (
    <div>
      <h1>Deck List</h1>
      <MyIdentityCard
        identities={getFilteredIdentities(myRed)}
        title="화상"
        color="border-res-red"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myOrange)}
        title="출혈"
        color="border-res-orange"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myYellow)}
        title="진동"
        color="border-res-yellow"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myGreen)}
        title="파열"
        color="border-res-green"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myBlue)}
        title="침잠"
        color="border-res-blue"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myNavy)}
        title="호흡"
        color="border-res-navy"
      />
      <MyIdentityCard
        identities={getFilteredIdentities(myPurple)}
        title="충전"
        color="border-res-purple"
      />
    </div>
  );
};

export default ShowIdentity;
