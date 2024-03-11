import Slider from "@components/Slider";

interface FilterSliderGroupProps {
  title: string;
  minValue: number;
  maxValue: number;
}

const FilterSliderGroup = ({
  title,
  minValue,
  maxValue,
}: FilterSliderGroupProps) => {
  return (
    <div>
      <span className=" text-xs">{title}</span>
      <div className="text-sm text-white font-sansLight">
        <Slider title={title} minValue={minValue} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default FilterSliderGroup;
