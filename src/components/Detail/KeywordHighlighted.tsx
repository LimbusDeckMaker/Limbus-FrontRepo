import React from "react";
import keyword from "@constants/keyword.json";

interface KeywordHighlightedProps {
  text: string;
}

const KeywordHighlighted = ({ text }: KeywordHighlightedProps) => {
  // Function to highlight keywords and bracketed text in the text
  const highlightKeywords = (text: string) => {
    // Regular expression pattern to split the text while preserving spaces
    const words = text.split(/(\s+)/);
    let insideBrackets = false; // State to track whether we are inside brackets

    // Iterate through each word
    return words.map((word, index) => {
      let element;

      // Check if the word contains a starting bracket
      if (word.includes("[")) {
        insideBrackets = true;
      }

      if (insideBrackets) {
        // If inside brackets, wrap the word in a span with orange color
        element = (
          <span key={index} className="text-orange-300">
            {word}
          </span>
        );
      } else {
        // Check if the word is in the keyword list
        const keywordData = keyword.find((item) => item.name.toLowerCase() === word.toLowerCase());
        if (keywordData) {
          // If it's a keyword, wrap it in a span with red color
          element = (
            <span key={index} className="text-red-500">
              {word}
            </span>
          );
        } else {
          // If it's not a keyword or inside brackets, return it as it is
          element = <span key={index}>{word}</span>;
        }
      }

      // Check if the word contains an ending bracket
      if (word.includes("]")) {
        insideBrackets = false;
      }

      if (word === "정신력") {
        console.log("정신력");
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
