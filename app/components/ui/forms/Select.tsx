import { SelectHTMLAttributes } from "react";
import { Column } from "../layout/Column";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, className, ...rest }: Props) {
  return (
    <Column>
      {label && <label className="text-sm">{label}</label>}
      <select
        className={`w-full h-11 p-2 pl-4 border-2 border-transparent border-b-blue-500 bg-white bg-opacity-20 text-sm text-white duration-200 focus:border-blue-500 ${className}`}
        {...rest}
      />
    </Column>
  );
}