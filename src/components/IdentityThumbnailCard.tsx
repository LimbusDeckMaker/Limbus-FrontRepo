import { Link } from "react-router-dom";

interface IdentityThumbnailCardProps {
  id: number;
  grade: number;
  name: string;
  character: string;
  imageBefore: string;
  imageAfter: string;
  isSync: boolean;
}

const IdentityThumbnailCard = ({
  id,
  grade,
  name,
  character,
  imageBefore,
  imageAfter,
  isSync,
}: IdentityThumbnailCardProps) => {
  return (
    <Link to={`${id}`}>
      <div className=" bg-primary-500 rounded-lg p-[10px] hover:scale-105">
        <div className="flex justify-between items-center">
          <div className="w-10 mx-auto">
            <img src={`/assets/common/${grade}성.png`} className="h-4" />
          </div>
          <div className="flex flex-col gap-0 justify-center text-center items-center text-[10px] w-full">
            <span>{name}</span>
            <span>{character}</span>
          </div>
        </div>
        {!isSync ? (
          <img
            src={imageBefore}
            alt="beforeImage"
            className="rounded-lg w-full"
          />
        ) : (
          <img src={imageAfter} alt="afterImage" className="rounded-lg" />
        )}
      </div>
    </Link>
  );
};

export default IdentityThumbnailCard;
