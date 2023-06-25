import "./button.css";

export default function Button({
  value,
  onClick,
  className,
  disabled,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className || ""}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
