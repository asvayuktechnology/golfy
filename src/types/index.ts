export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  pricePerPerson: number;
  originalPrice?: number;
  discountPercent?: number;
  isHotSale?: boolean;
  images: string[];
  category: "popular" | "lastMinute" | "oneDay";
  experience: string;
  inclusion: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: "Europe" | "Asia" | "Middle East" | "Africa" | "North America" | "Oceania";
  image: string;
  tourCount: number;
  departureCount: number;
  guestCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  review: string;
}

export interface BlogPost {
  id: string;
  location: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface SearchTabType {
  id: "tours" | "hotels" | "visa" | "experience";
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
