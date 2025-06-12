import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { alignmentSchema } from "../schemas/zod";
import { useCopyText } from "../hooks/useCopyText";
import Snackbar from "@mui/material/Snackbar";
import getAminoAcidColor from "../utils/getAminoAcidColor";
import AlignmentResult from "../components/AlignmentResult";
import { Typography } from "@mui/material";

function Main() {
  const [resultVisible, setResultVisible] = useState(false);
  const copied = useCopyText();

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
      <Typography variant="h2" component="h1">
        Выравнивание
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          name="firstInput"
          label="Первая строка"
          register={register}
          error={errors.firstInput?.message}
        />
        <CustomInput
          name="secondInput"
          label="Вторая строка"
          register={register}
          error={errors.secondInput?.message}
        />
        <CustomButton label={"Сравнить"} type="submit" />
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
