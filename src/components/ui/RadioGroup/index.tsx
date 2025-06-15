"use client";

type Option = {
  id: string;
  value: string;
  label: string;
};

type CustomRadioGroupProps = {
  options: Option[];
  name: string;
  defaultValue?: string;
};

export function RadioGroup({
  options,
  name,
  defaultValue,
}: CustomRadioGroupProps) {
  return (
    <fieldset className="space-y-2">
      {options.map((option) => (
        <div key={option.id} className="relative">
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            className="peer hidden"
          />
          <label
            htmlFor={option.id}
            className={`
              flex items-center gap-3 p-4 rounded-md transition cursor-pointer
              bg-gray-200 hover:bg-gray-300
              peer-checked:bg-blue-100 peer-checked:border peer-checked:border-blue-600
            `}
          >
            <span className="text-sm font-medium text-gray-700 peer-checked:text-blue-700 peer-checked:font-bold">
              {option.label}
            </span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
