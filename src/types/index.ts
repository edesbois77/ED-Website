export interface Product {
  id: string;
  name: string;
  title: string;
  summary: string;
  features: string[];
  image: string;
  price?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface BasketItem {
  product: Product;
  quantity: number;
}