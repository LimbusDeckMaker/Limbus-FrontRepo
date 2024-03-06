import FilterButtonGroup from "./FilterButtonGroup";
import sinners from "@constants/sinners.json";
import resource from "@constants/resource.json";
import attackType from "@constants/attackType.json";
import FilterSelectGroup from "./FilterSelectGroup";
import keyword from "@constants/keyword.json";
import affiliation from "@constants/affiliation.json";
import useSelectOptions from "@hooks/useSelectOptions";
import FilterSliderGroup from "./FilterSliderGroup";

interface Option {
  value: string;
  label: string;
}

const keywordOptionList: Option[] = keyword.map((item) => ({
  value: item.name,
  label: item.name,
}));

const Filter = () => {
  const {
    selectedOptions: keywordOptions,
    handleSelectChange: handleSelectChangeKeyword,
  } = useSelectOptions();
  const {
    selectedOptions: affiliationOptions,
    handleSelectChange: handleSelectChangeAffiliation,
  } = useSelectOptions();
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
      <FilterSelectGroup
        title="키워드"
        optionList={keywordOptionList}
        selectedOption={keywordOptions}
        handleSelectChange={handleSelectChangeKeyword}
        zIndex="z-20"
      />
      <FilterSelectGroup
        title="소속"
        optionList={affiliation}
        selectedOption={affiliationOptions}
        handleSelectChange={handleSelectChangeAffiliation}
        zIndex="z-10"
      />
      <FilterButtonGroup
        title="유형"
        content={attackType}
        src="/assets/attackType/"
      />
      <FilterSliderGroup title="속도" minValue={1} maxValue={9} />
      <FilterSliderGroup title="가중치" minValue={1} maxValue={9} />
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
