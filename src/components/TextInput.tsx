interface TextInputProps {
  type: string;
  placeHolder: string;
  label: string;
  isRequired: boolean;
  minLength?: number;
  maxLength?: number;
}

export default function TextInput({
  type,
  placeHolder,
  label,
  isRequired,
  minLength,
  maxLength,
}: TextInputProps) {
  return (
    <label className="flex flex-col text-blue-600 text-xs">
      {label}
      <input
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        className="mb-8 py-[9px] text-black text-sm caret-blue-600 border-black border-b-2 border-opacity-20 focus:border-opacity-100 outline-none"
      />
    </label>
  );
}
