import { ReactNode, ChangeEvent } from "react";

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

// Defines accomodation types
export interface AcommodationProps {
  name: string;
  image: string;
}

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: string;
  children?: ReactNode;
}

export interface PillProps {
  title?: string;
  style?: string;
  children?: ReactNode;
}

export type MyProps = {
  children: ReactNode;
};

export interface OfferProps {
  bed: string;
  shower: string;
  occupants: string;
  [key: string]: string;
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: OfferProps;
  image: string;
  discount: string;
  description: {
    title: string;
    space: string;
    offer: string;
    review: string;
    host: string;
    [key: string]: string;
  };
}

export interface ReviewsProps {
  avatar: string;
  name: string;
  comment: string;
  experience: string;
  time: string;
}

export interface InputProps {
  id: string;
  name: string;
  type: "text" | "number" | "search" | "date";
  style: string;
  value: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  htmlFor: string;
  title: string;
  style: string;
}

interface FooterURLs {
  title: string;
  link: string;
}

export interface FooterLinksProps {
  explore: FooterURLs[];
  about: FooterURLs[];
  help: FooterURLs[];
  services: FooterURLs[];
}
