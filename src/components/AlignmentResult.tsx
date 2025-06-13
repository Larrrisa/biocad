import { useEffect, useLayoutEffect, useRef, useState } from "react";

import compareAminoAcids from "../utils/compareAminoAcids";

import "../styles/global.css";

type Props = {
  first: string;
  second: string;
  getColor: (amino: string) => string;
};

function chunkString(str: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}

function AlignmentResult({ first, second, getColor }: Props) {
  const [charsPerLine, setCharsPerLine] = useState(() => {
    const initialContainerWidth = 1000;
    const initialCharWidth = 20;
    return Math.floor(initialContainerWidth / initialCharWidth);
  });

  useEffect(() => {
    function updateCharsPerLine() {
      const screenWidth = window.innerWidth;
      const charWidth = 25;
      const estimated = Math.floor(screenWidth / charWidth);
      setCharsPerLine(Math.max(1, estimated));
    }

    updateCharsPerLine();

    window.addEventListener("resize", updateCharsPerLine);
    return () => window.removeEventListener("resize", updateCharsPerLine);
  }, [charsPerLine]);

  const firstChunks = chunkString(first, charsPerLine);

  const secondChunks = chunkString(
    compareAminoAcids(first, second)
      .map((item) => item.letter)
      .join(""),
    charsPerLine
  );

  return (
    <div className="result">
      {firstChunks.map((chunk, chunkIndex) => {
        const startIndex = chunkIndex * charsPerLine;

        return (
          <div key={chunkIndex} className="block">
            <div className="line">
              {chunk
                .split("")
                .map((aminoAcid: string, relativeIndex: number) => {
                  const absoluteIndex = startIndex + relativeIndex;
                  return (
                    <span
                      key={absoluteIndex}
                      style={{
                        backgroundColor: getColor(aminoAcid),
                      }}
                    >
                      {aminoAcid}
                    </span>
                  );
                })}
            </div>

            <div className="line">
              {secondChunks[chunkIndex]
                .split("")
                .map((letter: string, relativeIndex: number) => {
                  const absoluteIndex = startIndex + relativeIndex;
                  const isMismatch = letter !== first[absoluteIndex];

                  return (
                    <span
                      key={absoluteIndex}
                      style={{
                        backgroundColor: isMismatch ? getColor(letter) : "",
                      }}
                    >
                      {letter}
                    </span>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlignmentResult;
