import FilterSelect from "./FilterSelect";

interface Option {
  value: string;
  label: string;
}

interface FilterSelectGroupProps {
  title: string;
  optionList: Option[];
  selectedOption: Option[];
  handleSelectChange: (option: readonly Option[]) => void;
}

const FilterSelectGroup = ({
  title,
  optionList,
  selectedOption,
  handleSelectChange,
}: FilterSelectGroupProps) => {
  return (
    <div>
      <span className=" text-xs">{title}</span>
      <div className="text-sm text-white font-sansLight">
        <FilterSelect
          title={title}
          optionList={optionList}
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default FilterSelectGroup;
