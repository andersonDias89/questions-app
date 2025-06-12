import clsx from "clsx";

type InputDefaultProps = {
  placeholder?: string;
};

export function InputDefault({
  placeholder = "Texto aqui",
}: InputDefaultProps) {
  return (
    <input
      type="text"
      className={clsx(
        "w-full h-10",
        "px-3 py-2",
        "border border-gray-300",
        "rounded",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-blue-500"
      )}
      placeholder={placeholder}
    />
  );
}
