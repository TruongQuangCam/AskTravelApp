export type TourCategory = "domestic" | "international" | "support";

export type Tour = {
  id: string;
  title: string;
  location: string;
  duration: string;
  transport: string;
  price: number;
  image: string;
  description: string;
  category: TourCategory;
};