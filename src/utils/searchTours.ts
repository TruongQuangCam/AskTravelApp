import { tours } from "../data/tours";
import { Tour } from "../types/Tour";

export function searchTours(keyword: string): Tour[] {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return tours;
  }

  return tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(normalizedKeyword) ||
      tour.location.toLowerCase().includes(normalizedKeyword)
  );
}