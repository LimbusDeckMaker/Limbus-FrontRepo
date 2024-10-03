import { Carousel } from "@material-tailwind/react";
import Banner from "@components/Main/Banner";

const MainCarousel = () => {
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
      <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EC%8A%A4%EB%A7%88%EC%97%98/Identity/%EC%84%9C%EB%B6%80%20%EC%B8%A0%EB%B0%94%EC%9D%B4%20%ED%98%91%ED%9A%8C%203%EA%B3%BC/10810_gacksung.webp"
        spanText="10월 3일 업데이트"
        headingText="서부 츠바이 협회 3과 이스마엘 추가"
        linkPath="/identity/122"
        linkText="인격 정보 바로가기"
      />

      {/* 신규 기능 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EC%8A%A4%EB%A7%88%EC%97%98/Identity/%EC%84%9C%EB%B6%80%20%EC%B8%A0%EB%B0%94%EC%9D%B4%20%ED%98%91%ED%9A%8C%203%EA%B3%BC/10810_normal.webp"
        spanText="내가 가진 인격 키워드를 모르겠다고?"
        headingText="내 인격 분류 기능 추가"
        linkPath="/deck"
        linkText="인격 분류 바로가기"
      />

      {/* 발푸밤 리세 홍보 */}
      {/* <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%EB%A3%8C%EC%8A%88/Identity/%EB%A1%9C%EB%B3%B4%ED%86%A0%EB%AF%B8%20E.G.O::%EC%A0%81%EC%95%88%20%C2%B7%20%EC%B0%B8%ED%9A%8C/10410_gacksung.webp"
        spanText="신규 관리자를 위한"
        headingText="리세마라용 티어표 출시 (발푸밤 포함)"
        linkPath="/tier"
        linkText="리세 티어표 바로가기"
      /> */}
    </Carousel>
  );
};

export default MainCarousel;
