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
    <label className="flex flex-col text-xs text-blue-600">
      {label}
      <input
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        className="mb-[30px] border-b-2 border-black border-opacity-20 py-[9px] text-sm text-black caret-blue-600 outline-none focus:border-opacity-100 xs:mb-8"
      />
    </label>
  );
}
