import Slider from "@components/Slider";

interface FilterSliderGroupProps {
  title: string;
  minValue: number;
  maxValue: number;
  name: string;
}

const FilterSliderGroup = ({
  title,
  minValue,
  maxValue,
  name,
}: FilterSliderGroupProps) => {
  return (
    <div>
      <span className=" text-xs">{title}</span>
      <div className="text-sm text-white font-sansLight">
        <Slider name={name} minValue={minValue} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default FilterSliderGroup;
