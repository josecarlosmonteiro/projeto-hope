import { HTMLAttributes } from "react";

type TVariation = "title" | "subtitle" | "body" | "footer";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variation?: TVariation;
}

export function Typography({
  className,
  variation = 'body',
  ...rest
}: Props) {
  const variationStyle: Record<TVariation, string> = {
    body: '',
    title: 'text-3xl',
    subtitle: 'text-xl font-light',
    footer: 'text-xs',
  }

  return (
    <div className={`${variationStyle[variation]} ${className}`} {...rest} />
  );
}