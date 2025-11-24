import type {
  OfferProps,
  PropertyProps,
  AcommodationProps,
  ReviewsProps,
} from "@/interfaces";

// Data for types of accommodation
export const typesOfAcommodation: AcommodationProps[] = [
  {
    name: "Rooms",
    image: "/assets/logos/living-room 1.png",
  },
  {
    name: "Mansion",
    image: "/assets/logos/mansion 1.png",
  },
  {
    name: "Countryside",
    image: "/assets/logos/farm 1.png",
  },
  {
    name: "Villa",
    image: "/assets/logos/villa 1.png",
  },
  {
    name: "Tropical",
    image: "/assets/logos/palm-tree 1.png",
  },
  {
    name: "New",
    image: "/assets/logos/key-chain 1.png",
  },
  {
    name: "Amazing pool",
    image: "/assets/logos/swimming-pool 1.png",
  },
  {
    name: "Beech house",
    image: "/assets/logos/vacations 1.png",
  },
  {
    name: "Island",
    image: "/assets/logos/island (1) 1.png",
  },
  {
    name: "Camping",
    image: "/assets/logos/tent 1.png",
  },
  {
    name: "Apartement",
    image: "/assets/logos/apartment 1.png",
  },
  {
    name: "House",
    image: "/assets/logos/home 1.png",
  },
  {
    name: "Lake front",
    image: "/assets/logos/cottage 1.png",
  },
  {
    name: "Farm house",
    image: "/assets/logos/barn 1.png",
  },
  {
    name: "Tree house",
    image: "/assets/logos/treehouse (1) 1.png",
  },
  {
    name: "Cabins",
    image: "/assets/logos/cabin 1.png",
  },
  {
    name: "Castles",
    image: "/assets/logos/castle-tower 1.png",
  },
  {
    name: "Lakeside",
    image: "/assets/logos/farm 1-1.png",
  },
];

// Listing Section data:
export const propertListingSample: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/listing-images/List 1.png",
    discount: "",
    description: {
      title:
        "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.",
      space:
        "Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view",
    },
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/listing-images/List 10.png",
    discount: "30",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/listing-images/List 11.png",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/listing-images/List 12.png",
    discount: "15",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/listing-images/List 9.png",
    discount: "20",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/listing-images/List 13.png",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listing-images/List 14.png",
    discount: "10",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/assets/listing-images/List 15.png",
    discount: "25",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/listing-images/List 16.png",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/listing-images/List 2.png",
    discount: "40",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/listing-images/List 3.png",
    discount: "50",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/listing-images/List 4-1.png",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/listing-images/List 4.png",
    discount: "35",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "/assets/listing-images/List 6.png",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/listing-images/List 7.png",
    discount: "20",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/assets/listing-images/List 8.png",
    discount: "25",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/listing-images/list-17.jpg",
    discount: "30",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listing-images/list-18.jpg",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/listing-images/list-19.jpg",
    discount: "60",
    description: {
      title: "",
      space: "",
    },
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listing-images/list-20.jpg",
    discount: "",
    description: {
      title: "",
      space: "",
    },
  },
];

export const reviews: ReviewsProps[] = [
  {
    avatar: "/assets/detail-images/image 25.png",
    name: "kerry",
    comment:
      "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    experience: "3 years on ALX",
    time: "March 2024",
  },
  {
    avatar: "/assets/detail-images/image 25-2.png",
    name: "Pooja",
    comment:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,",
    experience: "1 years on ALX",
    time: "March 2024",
  },
  {
    avatar: "/assets/detail-images/image 25-1.png",
    name: "Cindy & Ben",
    comment:
      "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    experience: "1 years on ALX",
    time: "August 2023",
  },
  {
    avatar: "/assets/detail-images/image 25-3.png",
    name: "Marnie",
    comment:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    experience: "5 years on ALX",
    time: "January 2023",
  },
];

export const offerIcons: OfferProps = {
  bed: "/assets/icons/bed 1.png",
  shower: "/assets/icons/bathtub 1.png",
  occupants: "/assets/icons/people 1.png",
};
