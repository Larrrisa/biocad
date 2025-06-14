import { UseFormRegister } from "react-hook-form";
import TextField from "@mui/material/TextField";

import "../styles/global.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  label?: string;
  name: string;
  error?: string;
}

function CustomInput({
  type = "text",
  placeholder = "",
  register,
  label = "",
  name = "",
  error = "",
}: InputProps) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      variant="outlined"
      margin="normal"
      label={label}
      {...register(name)}
      error={!!error}
      helperText={error}
    />
  );
}
export default CustomInput;
