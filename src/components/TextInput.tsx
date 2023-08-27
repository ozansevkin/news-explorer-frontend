interface TextInputProps {
  name: string;
  type: string;
  placeHolder: string;
  label: string;
  isRequired: boolean;
  value: string;
  error: string;
  [otherPropName: string]: any;
}

export default function TextInput({
  name,
  type,
  placeHolder,
  label,
  isRequired,
  error,
  value,
  ...otherProps
}: TextInputProps) {
  return (
    <label className="mb-[30px] flex flex-col text-xs text-blue-600 xs:mb-8">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        value={value}
        {...otherProps}
        className="border-b-2 border-black border-opacity-20 py-[9px] text-sm text-black caret-blue-600 outline-none focus:border-opacity-100"
      />
      <p className="mt-1 text-xs font-normal text-[red]">{error}</p>
    </label>
  );
}
