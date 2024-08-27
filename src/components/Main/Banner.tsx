import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel
      placeholder=""
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* 업데이트 */}
      <div className="relative h-28 md:h-72 lg:h-96 w-full font-sans md:font-sansBold">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://limbus-image-bucket.s3.amazonaws.com/%EC%98%A4%ED%8B%B0%EC%8A%A4/Identity/W%EC%82%AC%203%EB%93%B1%EA%B8%89%20%EC%A0%95%EB%A6%AC%20%EC%9A%94%EC%9B%90%20%ED%8C%80%EC%9E%A5/11110_gacksung.webp)",
          }}
        >
          {/* 오버레이: 배경 이미지 위에 반투명한 레이어 */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
            {/* 텍스트 오버레이 */}
            <div className=" z-10 flex items-center justify-start h-full pl-10">
              <div className="text-white">
                <span className="text-xs md:text-xl">8월 27일 업데이트</span>
                <h1 className="text-md md:text-4xl font-bold mb-3 md:mb-8">
                  소속 검색 기능 수정완료!
                </h1>
                <Link
                  to="/identity"
                  className="px-2 md:px-4 pt-2 md:pt-3 pb-1 md:pb-2 border border-white text-xs md:text-sm font-sans hover:animate-pulse"
                >
                  인격 정보 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 리세 홍보 */}
      <div className="relative h-28 md:h-72 lg:h-96 w-full font-sans md:font-sansBold">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%ED%9E%88%EC%8A%A4%ED%81%B4%EB%A6%AC%ED%94%84/Identity/%EC%99%80%EC%9D%BC%EB%93%9C%ED%97%8C%ED%8A%B8/10710_gacksung.webp)",
          }}
        >
          {/* 오버레이: 배경 이미지 위에 반투명한 레이어 */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
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
                  리세 티어표 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
