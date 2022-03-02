import { Input } from "antd";

export function CustomInput({ type = "text", validator, value, onChange }) {

  return (
    <Input
      onChange={(e) =>
        validator
          ? validator(e?.target?.value, onChange)
          : onChange(e?.target?.value)
      }
      value={value}
      type={type}
      step="1"
      min="1"
      max="18"
      className="w-full p-0.5 rounded focus:outline-none"
    />
  );
}
