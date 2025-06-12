import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function CustomButton({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
export default CustomButton;
