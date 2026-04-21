export type TechnicalSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  imageUrl: string;
  images?: string[];
  description?: string;
  technicalSpecs?: TechnicalSpec[];
};

