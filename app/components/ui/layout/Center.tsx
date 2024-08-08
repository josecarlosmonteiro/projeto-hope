import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export function Center({ children }: Props) {
  return (
    <div className="h-full flex justify-center items-center">
      {children}
    </div>
  );
}