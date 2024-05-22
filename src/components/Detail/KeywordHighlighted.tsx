import keyword from "@constants/keyword.json";

interface KeywordHighlightedProps {
  text: string;
}

const KeywordHighlighted = ({ text }: KeywordHighlightedProps) => {
  // Function to highlight keywords in the text
  const highlightKeywords = (text: string) => {
    // Regular expression pattern to split the text while preserving spaces
    const words = text.split(/(\s+)/);

    // Iterate through each word
    return words.map((word, index) => {
      const isInsideBrackets = /\[|\]/.test(word);
      if (isInsideBrackets) {
        // If it's inside brackets, wrap it in a span with orange color
        return (
          <span key={index} className="text-orange-300">
            {word}
          </span>
        );
      } else {
        // Check if the word is in the keyword list
        const keywordData = keyword.find((item) => item.name.toLowerCase() === word.toLowerCase());
        if (keywordData) {
          // If it's a keyword, wrap it in a span with red color
          return (
            <span key={index} className="text-red-500">
              {word}
            </span>
          );
        } else {
          // If it's not a keyword or inside brackets, return it as it is
          return word;
        }
      }
    });
  };

  return (
    <p className="font-sansLight">
      {/* Rendering the text with highlighted keywords */}
      {highlightKeywords(text)}
    </p>
  );
};

export default KeywordHighlighted;
