import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button({ className, ...rest }: Props) {
  return (
    <button className={`${className}`} {...rest} />
  );
}