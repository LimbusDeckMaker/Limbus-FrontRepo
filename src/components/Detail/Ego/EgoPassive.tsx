import { synchronizationState } from "@recoils/atoms";
import { useRecoilValue } from "recoil";
import KeywordHighlighted from "@components/Detail/KeywordHighlighted";

interface Props {
  Egodata: Passives;
}

interface Passives {
  name: string;
  content: string;
}

const EgoPassive = ({ Egodata }: Props) => {
  const synchroOption = useRecoilValue(synchronizationState);

  const syschroNum = synchroOption.synchronization;

  return (
    <div className="p-3 bg-primary-500 mb-2">
      <div className="xl:flex xl:gap-3 items-center pb-6 ">
        <div className={`text-xl font-bold pr-4 lg:p-0 pb-4 border-b-4 `}>
          <span>{Egodata.name}</span>
        </div>
      </div>
      <KeywordHighlighted text={Egodata.content} />
    </div>
  );
};

export default EgoPassive;
