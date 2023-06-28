import { Label } from "../index.js";

import "./dropdown-control.css";

export default function DropdownControl({
  data,
  name,
  id,
  placeholder,
  onChange,
  value,
  label,
}) {
  const selectClassName =
    value === ""
      ? "dropdown-control__select dropdown-control__select_placeholder"
      : "dropdown-control__select";

  const placeholderData = {
    key: "placeholder",
    className: "dropdown-control__placeholder",
    disabled: false,
    hidden: true,
    value: placeholder,
  };

  const optionsData = data.map((option) => {
    return { key: option, value: option, id };
  });

  const options = [placeholderData, ...optionsData];
  return (
    <Label htmlFor={id}>
      {label}
      <select
        name={name}
        id={id}
        className={selectClassName}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option className="dropdown-control__item-container" {...option}>
            {option.value}
          </option>
        ))}
      </select>
    </Label>
  );
}
