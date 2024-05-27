import React from "react";
import keyword from "@constants/keyword.json";

interface KeywordHighlightedProps {
  text: string;
}

const KeywordHighlighted = ({ text }: KeywordHighlightedProps) => {
  const highlightKeywords = (text: string) => {
    const words = text.split(/(\s+)/);
    let insideBrackets = false;

    return words.map((word, index) => {
      let element;

      if (word.includes("[")) {
        insideBrackets = true;
      }

      if (insideBrackets) {
        element = (
          <span key={index} className="text-orange-300">
            {word}
          </span>
        );
      } else {
        const keywordData = keyword.find((item) => item.name.toLowerCase() === word.toLowerCase());
        if (keywordData) {
          element = (
            <span key={index} className="text-red-500">
              {word}
            </span>
          );
        } else {
          element = <span key={index}>{word}</span>;
        }
      }

      if (word.includes("]")) {
        insideBrackets = false;
      }

      if (word === "정신력") {
        element = (
          <span key={index} className="text-light-blue-200">
            {word}
          </span>
        );
      }

      return element;
    });
  };

  return (
    <p className="font-sansLight">
      {/* Rendering the text with highlighted keywords and bracketed text */}
      {highlightKeywords(text)}
    </p>
  );
};

export default KeywordHighlighted;
