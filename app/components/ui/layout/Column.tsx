import { HTMLAttributes } from "react";
import { gap, justify, align, TAlign, TGap, TJustify } from "./metrics";

interface Props extends HTMLAttributes<HTMLDivElement> {
  justify?: TJustify;
  align?: TAlign;
  gap?: TGap;
}

export function Column({
  className,
  justify: justifyVariation = 'stretch',
  align: alignVariation = 'start',
  gap: gapVariation = 'md',
  ...rest
}: Props) {
  const justifyStyle = justify[justifyVariation];
  const alignStyle = align[alignVariation];
  const gapStyle = gap[gapVariation];

  return (
    <div className={`w-full flex flex-col ${justifyStyle} ${alignStyle} ${gapStyle} ${className}`} {...rest} />
  );
}