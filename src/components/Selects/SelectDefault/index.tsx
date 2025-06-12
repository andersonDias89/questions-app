"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

type SelectDefaultProps = {
  placeholder?: string;
  options: string[];
};

export function SelectDefault({
  placeholder = "Selecione...",
  options,
}: SelectDefaultProps) {
  return (
    <Select.Root>
      <Select.Trigger
        className={clsx(
          "w-full h-10 px-3 py-2 border border-gray-300 rounded",
          "bg-white text-gray-800",
          "flex items-center justify-between",
          "focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={clsx(
            "bg-white border border-gray-300 rounded shadow-md",
            "z-50"
          )}
        >
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className={clsx(
                  "px-3 py-2 rounded cursor-pointer",
                  "text-gray-800",
                  "hover:bg-blue-100",
                  "focus:bg-blue-100 focus:outline-none",
                  "flex items-center justify-between"
                )}
              >
                <Select.ItemText>{option}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="w-4 h-4 text-blue-500" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
