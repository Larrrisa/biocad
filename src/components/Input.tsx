import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  className?: string;
  label?: string;
  name: string;
  error?: string;
}

function Input({
  type = "text",
  placeholder = "",
  register,
  className = "",
  label = "",
  name = "",
  error = "",
}: InputProps) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      className={className}
      variant="outlined"
      margin="normal"
      label={label}
      {...register(name)}
      error={!!error}
      helperText={error}
    />
  );
}
export default Input;
