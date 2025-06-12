import React from "react";
import { Typography } from "@mui/material";

import compareAminoAcids from "../utils/compareAminoAcids";

type Props = {
  first: string;
  second: string;
  getColor: (amino: string) => string;
};

function AlignmentResult({ first, second, getColor }: Props) {
  return (
    <div className="mt-4">
      <Typography variant="h3">Результат</Typography>
      <Typography variant="body1">
        Первая строка:
        {first.split("").map((aminoAcid: string, index: number) => (
          <span
            key={index}
            style={{
              backgroundColor: getColor(aminoAcid),
              textAlign: "center",
              display: "inline",
              minWidth: "20px",
            }}
          >
            {aminoAcid}
          </span>
        ))}
      </Typography>

      <Typography variant="body1">
        Вторая строка:
        {compareAminoAcids(first, second).map((item, index) => {
          return (
            <span
              key={index}
              style={{
                backgroundColor: item.match ? getColor(item.letter) : "",
                textAlign: "center",
                display: "inline",
                minWidth: "20px",
              }}
            >
              {item.letter}
            </span>
          );
        })}
      </Typography>
    </div>
  );
}

export default AlignmentResult;
