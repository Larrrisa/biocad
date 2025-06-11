import TextField from "@mui/material/TextField";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={(e) => onChange?.(e.target.value)}
      variant="outlined"
      margin="normal"
    />
  );
}
export default Input;
