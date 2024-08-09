import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> { }

export function Container({ className, ...rest }: Props) {
  return (
    <div className={`p-8 rounded-lg bg-black bg-opacity-40 ${className}`} {...rest} />
  );
}