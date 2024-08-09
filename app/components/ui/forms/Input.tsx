import { InputHTMLAttributes } from "react";
import { Column } from "../layout/Column";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...rest }: Props) {
  return (
    <Column>
      {label && <label className="text-sm">{label}</label>}
      <input
        className={`w-full h-11 p-2 pl-4 border-2 border-transparent border-b-blue-500 bg-white bg-opacity-20 text-sm text-white duration-200 focus:border-blue-500 ${className}`}
        {...rest}
      />
    </Column>
  );
}