import React from "react";

type ButtonDefaultProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export function ButtonDefault({
  children,
  onClick,
  disabled,
}: ButtonDefaultProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600 disabled:opacity-50 w-32 transition-colors"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
