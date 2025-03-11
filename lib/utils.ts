import { clsx, type ClassValue } from "clsx";
import QueryString from "qs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function serializateQuery(
  data: Record<string, any>,
  addQueryPrefix: boolean = true
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrl<T extends object>(url: string, param: T) {
  const query = serializateQuery(param);
  return url + query;
}
