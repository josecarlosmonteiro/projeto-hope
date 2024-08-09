'use client';

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { Row } from "../layout/Row";
import { Icons } from "../../icons";

type BtnVariation = 'primary' | 'danger';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variation?: BtnVariation;
}

const variationStyle: Record<BtnVariation, string> = {
  primary: "text-white bg-blue-600",
  danger: "text-white bg-red-600"
}

export function Button({
  className,
  isLoading,
  variation = 'primary',
  disabled,
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`
        p-1 px-4 text-sm duration-200 hover:opacity-90 disabled:opacity-50 
        ${variationStyle[variation]}
        ${className}
      `}
      disabled={disabled || isLoading}
    >
      <Row justify="center" align="center" gap="sm">
        {isLoading && <Icons.Loading className="animate-spin" size={18} />}
        {children}
      </Row>
    </button>
  );
}