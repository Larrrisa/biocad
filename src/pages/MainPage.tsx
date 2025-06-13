import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import AlignmentResult from "../components/AlignmentResult";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useCopyText } from "../hooks/useCopyText";
import { alignmentSchema } from "../schemas/zod";
import getAminoAcidColor from "../utils/getAminoAcidColor";

import "../styles/global.css";

function Main() {
  const [resultVisible, setResultVisible] = useState(false);
  const copied = useCopyText();

  const {
    register,
    handleSubmit,
    watch,
    reset,
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

  function handleReset() {
    reset();
    setResultVisible(false);
  }
  const firstInput = watch("firstInput") || "";
  const secondInput = watch("secondInput") || "";

  return (
    <div className="container">
      <Typography variant="h2" component="h1">
        Сравните аминокислоты
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <CustomInput
          name="firstInput"
          label="Первая аминокислота"
          register={register}
          error={errors.firstInput?.message}
        />
        <CustomInput
          name="secondInput"
          label="Вторая аминокислота"
          register={register}
          error={errors.secondInput?.message}
        />
        <div className="buttons">
          <CustomButton
            label={"Сравнить"}
            type="submit"
            className="button"
            variant="contained"
          />
          <CustomButton
            label={"Очистить"}
            type="reset"
            className="button "
            onClick={handleReset}
            variant="outlined"
          />
        </div>
      </form>

      {resultVisible && (
        <AlignmentResult
          first={firstInput}
          second={secondInput}
          getColor={getAminoAcidColor}
        />
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
