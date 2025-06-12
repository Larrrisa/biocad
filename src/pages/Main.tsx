import React from "react";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import { useState } from "react";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { alignmentSchema } from "../schemas/zod";
import { useCopyText } from "../hooks/useCopyText";
import Snackbar from "@mui/material/Snackbar";

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
  const [resultVisible, setResultVisible] = useState(false);
  const copied = useCopyText();

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(alignmentSchema),
    mode: "onChange",
    defaultValues: {
      firstInput: "",
      secondInput: "",
    },
  });

  function onSubmit() {
    setResultVisible(true);
  }

  const firstInput = watch("firstInput") || "";
  const secondInput = watch("secondInput") || "";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Выравнивание</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstInput"
          label="Первая строка"
          register={register}
          error={errors.firstInput?.message}
        />
        <Input
          name="secondInput"
          label="Вторая строка"
          register={register}
          error={errors.secondInput?.message}
        />
        <CustomButton label={"Сравнить"} type="submit" />
      </form>

      {resultVisible && (
        <div className="mt-4">
          <Typography variant="h3">Результат</Typography>
          <Typography variant="body1">
            Первая строка:
            {firstInput.split("").map((aminoAcid: string, index: number) => (
              <span
                key={index}
                style={{
                  backgroundColor: getAminoAcidColor(aminoAcid),
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
            {compareAminoAcids(firstInput, secondInput).map((item, index) => {
              return (
                <span
                  key={index}
                  style={{
                    backgroundColor: item.match
                      ? getAminoAcidColor(item.letter)
                      : "",
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
      )}
      <Snackbar
        open={copied}
        message="Скопировано"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}
export default Main;
