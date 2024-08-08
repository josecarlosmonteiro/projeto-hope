import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="p-8 rounded-lg bg-black bg-opacity-40">
      {children}
    </div>
  );
}