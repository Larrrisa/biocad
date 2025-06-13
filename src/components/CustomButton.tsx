import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  variant: "contained" | "outlined" | "text";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function CustomButton({
  label,
  variant,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <Button
      color="primary"
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {label}
    </Button>
  );
}
export default CustomButton;
