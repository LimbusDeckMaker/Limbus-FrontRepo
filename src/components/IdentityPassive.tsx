import PassiveCard from "./PassiveCard";

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
  console.log(identityPassives[1]);

  return (
    <div>
      헬로
      {identityPassives.map((passive, index) => (
        <div key={index}>
          <PassiveCard
            name={passive.name}
            isMain={passive.isMain}
            resource={passive.resource}
            resQuantity={passive.resQuantity}
            activeCond={passive.activeCond}
            effect={passive.effect}
            level={passive.level}
          />
        </div>
      ))}
    </div>
  );
};

export default IdentityPassive;
