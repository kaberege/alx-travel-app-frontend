import { ReactNode } from "react";

// Defines accomodation types
export interface AcommodationProps {
  name: string;
  image: string;
}

export type ReactNodeProps = {
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
  discount: number;
  description: {
    title: string;
    space: string;
    offer: string;
    review: string;
    host: string;
    [key: string]: string;
  };
}

export interface BookingDataProps {
  propertyId: string;
  checkin: string;
  checkout: string;
  nights: number;
  total: number;
}

export interface ReviewsProps {
  avatar: string;
  name: string;
  comment: string;
  experience: string;
  time: string;
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
