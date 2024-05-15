import React from "react";
import keyword_data from "@constants/keyword.json";
import KeywordHighlighted from "./KeywordHighlighted";

interface IdentityKeywordProps {
  keywords: string[];
}

const IdentityKeyword = ({ keywords }: IdentityKeywordProps) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
      {keywords.map((keyword, index) => {
        const keywordInfo = keyword_data.find((item) => item.name === keyword);
        if (keywordInfo) {
          const content = keywordInfo.content;
          return (
            <div key={index} className="p-4 rounded-md bg-primary-500">
              <img
                src={`/assets/keyword/${keyword}.png`}
                alt="resourceImg"
                style={{
                  width: "auto",
                  height: "1.1em",
                  marginRight: "4px",
                  marginBottom: "2px",
                }}
                className="inline-block"
              />
              <span>{keyword}</span>
              <KeywordHighlighted text={content} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default IdentityKeyword;
