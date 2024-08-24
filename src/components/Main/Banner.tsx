import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-28 md:h-72 lg:h-96 w-full font-sans md:font-sansBold">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%ED%9E%88%EC%8A%A4%ED%81%B4%EB%A6%AC%ED%94%84/Identity/%EC%99%80%EC%9D%BC%EB%93%9C%ED%97%8C%ED%8A%B8/10710_gacksung.webp)",
        }}
      ></div>

      {/* 오버레이: 배경 이미지 위에 반투명한 레이어 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 텍스트 오버레이 */}
      <div className="relative z-10 flex items-center justify-start h-full pl-10">
        <div className="text-white">
          <span className="text-xs md:text-xl">신규 관리자를 위한</span>
          <h1 className="text-md md:text-4xl font-bold mb-3 md:mb-8">
            리세마라용 티어표 출시
          </h1>
          <Link
            to="/tier"
            className="px-2 md:px-4 pt-2 md:pt-3 pb-1 md:pb-2 border border-white text-xs md:text-sm font-sans hover:animate-pulse"
          >
            바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
