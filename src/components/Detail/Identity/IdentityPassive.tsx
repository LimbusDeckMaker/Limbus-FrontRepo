import PassiveCard from "./PassiveCard";
import { synchronizationState } from "@recoils/atoms";
import { useRecoilValue } from "recoil";

interface Props {
  identityPassives: Passives[];
}

interface Passives {
  name: string;
  isMain: boolean;
  resource: string;
  resQuantity: number;
  activeCond: string;
  effect: string;
  level: number;
}

const IdentityPassive = ({ identityPassives }: Props) => {
  const synchroOption = useRecoilValue(synchronizationState);
  const synchroNum = synchroOption.synchronization;

  const filteredPassives: Passives[] = identityPassives.filter(
    (passive) => passive.level === synchroNum + 3
  );

  const passivesToRender = filteredPassives.map((passive, index) => (
    <PassiveCard
      key={index}
      type={passive.isMain ? "Passive" : "Support Passive"}
      passive={passive}
    />
  ));

  return <div>{passivesToRender}</div>;
};

export default IdentityPassive;
