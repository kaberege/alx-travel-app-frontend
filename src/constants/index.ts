import type {
  OfferProps,
  PropertyProps,
  AcommodationProps,
  ReviewsProps,
  FooterLinksProps,
} from "@/interfaces";

// Data for types of accommodation
export const typesOfAcommodation: AcommodationProps[] = [
  {
    name: "Rooms",
    image: "/assets/logos/living-room_1.png",
  },
  {
    name: "Mansion",
    image: "/assets/logos/mansion_1.png",
  },
  {
    name: "Countryside",
    image: "/assets/logos/farm_1.png",
  },
  {
    name: "Villa",
    image: "/assets/logos/villa_1.png",
  },
  {
    name: "Tropical",
    image: "/assets/logos/palm-tree_1.png",
  },
  {
    name: "New",
    image: "/assets/logos/key-chain_1.png",
  },
  {
    name: "Amazing pool",
    image: "/assets/logos/swimming-pool_1.png",
  },
  {
    name: "Beech house",
    image: "/assets/logos/vacations_1.png",
  },
  {
    name: "Island",
    image: "/assets/logos/island_1.png",
  },
  {
    name: "Camping",
    image: "/assets/logos/tent_1.png",
  },
  {
    name: "Apartement",
    image: "/assets/logos/apartment_1.png",
  },
  {
    name: "House",
    image: "/assets/logos/home_1.png",
  },
  {
    name: "Lake front",
    image: "/assets/logos/cottage_1.png",
  },
  {
    name: "Farm house",
    image: "/assets/logos/barn_1.png",
  },
  {
    name: "Tree house",
    image: "/assets/logos/treehouse_1.png",
  },
  {
    name: "Cabins",
    image: "/assets/logos/cabin_1.png",
  },
  {
    name: "Castles",
    image: "/assets/logos/castle-tower_1.png",
  },
  {
    name: "Lakeside",
    image: "/assets/logos/farm_1_1.png",
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
    image: "/assets/listing-images/List_1.png",
    discount: "",
    description: {
      title:
        "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you'Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.",
      space:
        "Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_10.png",
    discount: "30",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_11.png",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_12.png",
    discount: "15",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_9.png",
    discount: "20",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_13.png",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_14.png",
    discount: "10",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_15.png",
    discount: "25",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_16.png",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_2.png",
    discount: "40",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_3.png",
    discount: "50",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_4-1.png",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_4.png",
    discount: "35",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_6.png",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_7.png",
    discount: "20",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
    image: "/assets/listing-images/List_8.png",
    discount: "25",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
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
      offer: "",
      review: "",
      host: "",
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
      offer: "",
      review: "",
      host: "",
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
      offer: "",
      review: "",
      host: "",
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
      offer: "",
      review: "",
      host: "",
    },
  },
  {
    name: "Snow Peak Lodge",
    address: {
      state: "Hakuba",
      city: "Nagano",
      country: "Japan",
    },
    rating: 4.84,
    category: ["Ski Access", "Mountain View", "Hot Tub"],
    price: 3500,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/listing-images/list-21.jpg",
    discount: "15",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
    },
  },
  {
    name: "Desert Mirage Villa",
    address: {
      state: "Doha",
      city: "Doha",
      country: "Qatar",
    },
    rating: 4.9,
    category: ["Desert View", "Private Pool", "Free Breakfast"],
    price: 4800,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/listing-images/list-22.jpg",
    discount: "",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
    },
  },
  {
    name: "Jungle Treehouse",
    address: {
      state: "Uvita",
      city: "Puntarenas",
      country: "Costa Rica",
    },
    rating: 4.88,
    category: ["Jungle View", "Eco Friendly", "Self Checkin"],
    price: 2100,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/listing-images/list-23.jpg",
    discount: "20",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
    },
  },
  {
    name: "Mediterranean Cliff Villa",
    address: {
      state: "Ibiza",
      city: "Balearic Islands",
      country: "Spain",
    },
    rating: 4.91,
    category: ["Sea View", "Infinity Pool", "Free Parking"],
    price: 5200,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/listing-images/list-24.jpg",
    discount: "25",
    description: {
      title: "",
      space: "",
      offer: "",
      review: "",
      host: "",
    },
  },
];

export const reviews: ReviewsProps[] = [
  {
    avatar: "/assets/detail-images/image_25.png",
    name: "kerry",
    comment:
      "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    experience: "3 years on ALX",
    time: "March 2024",
  },
  {
    avatar: "/assets/detail-images/image_25-2.png",
    name: "Pooja",
    comment:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures,",
    experience: "1 years on ALX",
    time: "March 2024",
  },
  {
    avatar: "/assets/detail-images/image_25-1.png",
    name: "Cindy & Ben",
    comment:
      "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    experience: "1 years on ALX",
    time: "August 2023",
  },
  {
    avatar: "/assets/detail-images/image_25-3.png",
    name: "Marnie",
    comment:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    experience: "5 years on ALX",
    time: "January 2023",
  },
];

export const offerIcons: OfferProps = {
  bed: "/assets/icons/bed_1.png",
  shower: "/assets/icons/bathtub_1.png",
  occupants: "/assets/icons/people_1.png",
};

export const offerNames: OfferProps = {
  bed: "Bedrooms",
  shower: "Bathroom",
  occupants: "Guests",
};

export const footerLinks: FooterLinksProps = {
  explore: [
    { title: "Apartments in Dubai", link: "#" },
    { title: "Hotels in New York", link: "#" },
    { title: "Villa in Spain", link: "#" },
    { title: "Mansion in Indonesia", link: "#" },
  ],
  about: [
    { title: "Blog", link: "#" },
    { title: "Career", link: "#" },
    { title: "Customers", link: "#" },
    { title: "Brand", link: "#" },
  ],
  help: [
    { title: "Support", link: "#" },
    { title: "Cancel booking", link: "#" },
    { title: "Refunds Process", link: "#" },
  ],
  services: [
    { title: "Terms of Service", link: "#" },
    { title: "Policy service", link: "#" },
    { title: "Partners", link: "#" },
  ],
};

export const propertyDetails = {
  title: "Description",
  offer: "What we offer",
  review: "Reviews",
  host: "About host",
};
