import Button from "@mui/material/Button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
function CustomButton({ label, onClick, className = "" }: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={className}
    >
      {label}
    </Button>
  );
}
export default CustomButton;
