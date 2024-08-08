import FilterSelect from "./FilterSelect";
import { Tooltip } from "@material-tailwind/react";

interface Option {
  value: string;
  label: string;
}

interface FilterSelectGroupProps {
  title: string;
  optionList: Option[];
  selectedOption: Option[];
  handleSelectChange: (option: readonly Option[]) => void;
  zIndex: string;
}

const FilterSelectGroup = ({
  title,
  optionList,
  selectedOption,
  handleSelectChange,
  zIndex,
}: FilterSelectGroupProps) => {
  return (
    <div className={zIndex}>
      <span className=" text-xs flex">
        {title}
        {/* 소속 미적용 표시 추후 제거 */}
        {title === "소속" && (
          <Tooltip
            placement="right"
            content={
              <span className="text-xs">
                현재 개발 문제로 동작하지 않습니다! 참고바랍니다.
              </span>
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-3.5 w-3.5 cursor-pointer text-primary-100 ml-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </Tooltip>
        )}
      </span>
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
