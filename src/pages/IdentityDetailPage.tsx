import React from "react";

import InfoBox from "@components/InfoBox";
import identity_data from "@constants/identity_detail.json";

const IdentityDetailPage = () => {
  return (
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
    </div>
  );
};

export default IdentityDetailPage;
