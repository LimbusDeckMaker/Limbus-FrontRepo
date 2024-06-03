import FilterButtonGroup from "./FilterButtonGroup";
import sinners from "@constants/sinners.json";
import resource from "@constants/resource.json";
import FilterSelectGroup from "./FilterSelectGroup";
import keyword from "@constants/keyword.json";
import useSelectOptions from "@hooks/useSelectOptions";
import FilterSliderGroup from "./FilterSliderGroup";
import egoEtcKeyword from "@constants/egoEtcKeyword.json";
import egoGrade from "@constants/egoGrade.json";
import FilterEtcButtonGroup from "./FilterEtcButtonGroup";
import { useRecoilState } from "recoil";
import { egoOptionsState } from "@recoils/atoms";
import { useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

const keywordOptionList: Option[] = keyword.map((item) => ({
  value: item.name,
  label: item.name,
}));

const EgoFilter = () => {
  const [options, setOptions] = useRecoilState(egoOptionsState);

  useEffect(() => {
    console.log("Updated options:", options);
  }, [options]);

  const {
    selectedOptions: keywordOptions,
    handleSelectChange: handleSelectChangeKeyword,
  } = useSelectOptions();

  const updateOptions = (key: string, selectedOptions: any) => {
    const newSelectedOptions = selectedOptions.map(
      (option: any) => option.value
    );
    setOptions((prev) => ({
      ...prev,
      [key]: newSelectedOptions,
    }));
  };

  return (
    <div className="bg-primary-500 w-full rounded p-4 flex flex-col gap-2">
      <FilterButtonGroup
        title="수감자"
        content={sinners}
        src="/assets/profile/logo/"
        propertyToSaveTo="sinner"
        isIdentityPage={false}
      />
      <FilterButtonGroup
        title="사용 자원"
        content={resource}
        src="/assets/resource/"
        propertyToSaveTo="resources"
        isIdentityPage={false}
      />
      <FilterSelectGroup
        title="키워드"
        optionList={keywordOptionList}
        selectedOption={keywordOptions}
        handleSelectChange={(selectedOptions: any) => {
          handleSelectChangeKeyword(selectedOptions);
          updateOptions("keyword", selectedOptions);
        }}
        zIndex="z-20"
      />
      <FilterButtonGroup
        title="유형"
        content={[
          {
            name: "참격",
          },
          {
            name: "관통",
          },
          {
            name: "타격",
          },
        ]}
        src="/assets/attackType/"
        propertyToSaveTo="types"
        isIdentityPage={false}
      />
      <FilterSliderGroup
        title="가중치"
        name="Weight"
        minValue={1}
        maxValue={7}
        isIdentityPage={false}
      />
      <FilterButtonGroup
        title="시즌"
        content={[{ name: "1" }, { name: "2" }, { name: "3" }]}
        src=""
        buttonType="text"
        propertyToSaveTo="season"
        isIdentityPage={false}
      />
      <FilterEtcButtonGroup
        title="등급"
        content={egoGrade}
        propertyToSaveTo="grade"
        isIdentityPage={false}
      />
      <FilterEtcButtonGroup
        title="기타"
        content={egoEtcKeyword}
        isIdentityPage={false}
      />
    </div>
  );
};

export default EgoFilter;
