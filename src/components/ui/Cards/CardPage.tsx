import React from "react";

type CardPageProps = {
  children?: React.ReactNode;
};

export function CardPage({ children }: CardPageProps) {
  return <div className="w-6xl m-auto p-8 bg-gray-950">{children}</div>;
}
