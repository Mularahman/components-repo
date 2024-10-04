import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ubuntuInit = 'font-ubuntu'; 
export const quicksandInit = 'font-quicksand';
