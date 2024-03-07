import React from "react";

import InfoBox from "@components/InfoBox";
import identity_data from "@constants/identity_detail.json";

const IdentityDetailPage = () => {
  return (
    <div className="md:flex-row flex flex-col items-center">
      <div>
        <InfoBox
          character={identity_data.character}
          name={identity_data.name}
          afterProfileImage={identity_data.afterProfileImage}
          affiliation={identity_data.affiliation}
          grade={identity_data.grade}
          releaseDate={identity_data.releaseDate}
          obtainingMethod={identity_data.obtainingMethod}
          resistance={identity_data.resistance}
          status={identity_data.status}
        />
        <div>
          <h1 className="text-3xl font-bold text-primary-100">아이덴티티 상세 정보</h1>
          <div>
            <h2 className="text-2xl font-bold text-primary-100">아이덴티티 스킬</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityDetailPage;
