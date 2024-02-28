import FilterButtonGroup from "./FilterButtonGroup";
import sinners from "@constants/sinners.json";
import resource from "@constants/resource.json";
import attackType from "@constants/attackType.json";

const Filter = () => {
  return (
    <div className="bg-primary-500 w-full mt-8 rounded p-4 flex flex-col gap-2">
      <FilterButtonGroup
        title="수감자"
        content={sinners}
        src="/assets/profile/logo/"
      />
      <FilterButtonGroup
        title="자원"
        content={resource}
        src="/assets/resource/"
      />
      <FilterButtonGroup
        title="유형"
        content={attackType}
        src="/assets/attackType/"
      />
      <FilterButtonGroup
        title="시즌"
        content={[{ name: "1" }, { name: "2" }, { name: "3" }]}
        src=""
        buttonType="text"
      />
      <FilterButtonGroup
        title="등급"
        content={[{ name: "1성" }, { name: "2성" }, { name: "3성" }]}
        src="/assets/common/"
      />
    </div>
  );
};

export default Filter;
