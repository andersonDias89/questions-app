type Option = {
  id: string;
  value: string;
  label: string;
};

type RadioGroupProps = {
  options: Option[];
  name: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption?: string | null;
  correctOption?: string;
  answered?: boolean;
};

export function RadioGroup({
  options,
  name,
  defaultValue,
  onChange,
  selectedOption,
  correctOption,
  answered,
}: RadioGroupProps) {
  return (
    <fieldset className="space-y-2" disabled={answered}>
      {options.map((option) => {
        const isSelected = selectedOption === option.value;
        const isCorrect = correctOption === option.value;

        let labelClass = `
          w-full flex items-center gap-3 p-4 rounded-md transition-colors cursor-pointer
           bg-gray-800 text-white
        `;

        if (answered) {
          if (isCorrect) {
            labelClass += " bg-green-700 text-white font-bold";
          } else if (isSelected) {
            labelClass += " bg-red-500 text-white font-bold";
          }

          // hover desativado
          labelClass += " cursor-default";
        } else {
          labelClass += `
            hover:bg-gray-600 
            peer-checked:bg-green-200 peer-checked:border peer-checked:border-green-900
            peer-checked:font-black peer-checked:text-black peer-checked:hover:bg-green-200
          `;
        }

        return (
          <div key={option.id} className="relative flex items-center">
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              className="peer hidden"
              onChange={onChange}
              disabled={answered} // desativa clique
            />
            <label htmlFor={option.id} className={labelClass}>
              <span>{option.value}.</span>
              <span className="text-sm font-medium">{option.label}</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
