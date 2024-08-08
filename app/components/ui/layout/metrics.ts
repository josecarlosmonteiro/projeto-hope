export type TAlign = "start" | "center" | "end";
export type TJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "evenly"
  | "stretch";
export type TGap = "none" | "sm" | "md" | "lg" | "xl";

export const justify: Record<TJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export const align: Record<TAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

export const gap: Record<TGap, string> = {
  none: "gap-0",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-6",
  xl: "gap-12",
};
