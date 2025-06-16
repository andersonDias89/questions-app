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
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
