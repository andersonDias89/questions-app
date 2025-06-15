type Option = {
  id: string;
  value: string;
  label: string;
};

type RadioGroupProps = {
  options: Option[];
  name: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // ✅ Aqui
};

export function RadioGroup({
  options,
  name,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className="space-y-2">
      {options.map((option) => (
        <div key={option.id} className="relative flex items-center">
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            className="peer hidden"
            onChange={onChange} // ✅ Aqui
          />
          <label
            htmlFor={option.id}
            className="w-full flex items-center gap-3 p-4 rounded-md transition cursor-pointer
              bg-gray-200 hover:bg-green-100
              peer-checked:bg-green-200 peer-checked:border peer-checked:border-green-900
              peer-checked:font-black peer-checked:text-black peer-checked:hover:bg-green-200"
          >
            <span className="text-sm font-medium">{option.label}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
