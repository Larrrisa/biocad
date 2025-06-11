import React from "react";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import { useState } from "react";
import { Typography } from "@mui/material";

const aminoAcidColorMap: Record<string, string> = {
  C: "#FFEA00",
  A: "#67E4A6",
  I: "#67E4A6",
  L: "#67E4A6",
  M: "#67E4A6",
  F: "#67E4A6",
  W: "#67E4A6",
  Y: "#67E4A6",
  V: "#67E4A6",
  P: "#67E4A6",
  G: "#C4C4C4",
  D: "#FC9CAC",
  E: "#FC9CAC",
  K: "#BB99FF",
  R: "#BB99FF",
  S: "#80BFFF",
  T: "#80BFFF",
  H: "#80BFFF",
  Q: "#80BFFF",
  N: "#80BFFF",
};

function Main() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [resultVisible, setResultVisible] = useState(false);

  const handleFirstInputChange = (value: string) => {
    setFirstInput(value);
  };

  const handleSecondInputChange = (value: string) => {
    setSecondInput(value);
  };

  function handleClick() {
    setResultVisible(true);
  }

  function getAminoAcidColor(aminoAcid: string): string {
    const upperAminoAcid = aminoAcid.toUpperCase();

    if (!Object.keys(aminoAcidColorMap).includes(upperAminoAcid)) {
      return "";
    }
    return aminoAcidColorMap[upperAminoAcid] || "";
  }

  function compareAminoAcids(firstInput: string, secondInput: string) {
    const firstString = firstInput.split("");
    const secondString = secondInput.split("");
    const result = [];
    for (let i = 0; i < firstString.length; i++) {
      const match = firstString[i] === secondString[i];
      result.push({ letter: secondString[i], match });
    }

    return result;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Выравнивание</h1>

      <div>
        <Input onChange={handleFirstInputChange} />
        <Input onChange={handleSecondInputChange} />
      </div>
      <CustomButton label={"Сравнить"} onClick={handleClick} />

      {resultVisible && (
        <div className="mt-4">
          <Typography variant="h3">Результат</Typography>
          <Typography variant="body1">
            Первая строка:
            {firstInput.split("").map((aminoAcid, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: getAminoAcidColor(aminoAcid),
                  textAlign: "center",
                  display: "inline-block",
                  minWidth: "20px",
                }}
              >
                {aminoAcid}
              </span>
            ))}
          </Typography>

          <Typography variant="body1">
            Вторая строка:
            {compareAminoAcids(firstInput, secondInput).map((item, index) => {
              return (
                <span
                  key={index}
                  style={{
                    backgroundColor: item.match
                      ? getAminoAcidColor(item.letter)
                      : "",
                    textAlign: "center",
                    display: "inline-block",
                    minWidth: "20px",
                  }}
                >
                  {item.letter}
                </span>
              );
            })}
          </Typography>
        </div>
      )}
    </div>
  );
}
export default Main;
