import { Label } from "../index.js";

import "./text-area.css";

export default function TextArea({
  id,
  placeholder,
  onChange,
  inputText,
  disabled,
  label,
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <textarea
        className="text-area__input"
        id={id}
        name={id}
        placeholder={placeholder}
        defaultValue={inputText}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </Label>
  );
}
