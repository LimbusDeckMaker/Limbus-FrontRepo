import KeywordTierTable from "@components/Tier/KeywordTierTable";
import { Link } from "react-router-dom";

const KeywordTierListPage = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-lg md:text-2xl font-bold text-primary-100 font-sans">
          키워드별 인격 분류표
        </h1>
        <p className="font-sansLight text-white text-xs md:text-sm">
          - 동일 키워드 내 순서가 앞일수록 핵심 인격입니다. 해당 키워드를 가지고
          있으나 표에 존재하지 않는 인격이 있을 수 있습니다. <br />- 티어 출처는{" "}
          <Link to="https://gall.dcinside.com/mgallery/board/view/?id=limbuscompany&no=50802">
            <i>여기</i>
          </Link>
          이며 원본 작성자의 동의를 받아 제작되었습니다.
        </p>
      </div>

      <KeywordTierTable />
    </div>
  );
};

export default KeywordTierListPage;
