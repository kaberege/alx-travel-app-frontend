import { ReactNode } from "react";

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
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  styles?: string;
  icon?: string;
  alt?: string;
  imageStyles?: string;
}

export interface PillProps {
  icon?: string;
  label: string;
  alt?: string;
  styles?: string;
  offer?: string;
}

export type MyProps = {
  children: ReactNode;
};

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
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: {
    title: string;
    space: string;
  };
}

export interface ReviewsProps {
  avatar: string;
  name: string;
  comment: string;
  experience: string;
  time: string;
}
