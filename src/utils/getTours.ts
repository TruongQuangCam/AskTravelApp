import { tours } from "../data/tours";
import { Tour } from "../types/Tour";

export function getTours(): Tour[] {
  return tours;
}