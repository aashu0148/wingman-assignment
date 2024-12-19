import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDateFormatted = (
  val: Date | string,
  short: boolean = false,
  excludeYear: boolean = false
): string => {
  if (!val) return "";
  const date = new Date(val);
  const day = date.toLocaleString("en-in", { day: "numeric" });
  const month = date.toLocaleString("en-in", {
    month: short ? "short" : "long",
  });
  const year = date.toLocaleString("en-in", { year: "numeric" });

  return excludeYear ? `${day} ${month}` : `${day} ${month}, ${year}`;
};

export function getTimeFormatted(
  value: Date | string,
  includeSeconds: boolean = false
): string | undefined {
  if (!value) return;

  const date = new Date(value);
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = `${hours}:${minutes}${
    includeSeconds ? `:${seconds}` : ""
  } ${ampm}`;

  return strTime;
}
