export interface User {
  id: string;
  telegramId?: string;
  username: string;
  firstName: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  motorcycles: Motorcycle[];
  createdAt: Date;
}

export interface Motorcycle {
  id: string;
  userId: string;
  brand: string;
  model: string;
  year: number;
  engineVolume: number;
  color: string;
  photo?: string;
  modifications?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime?: string;
  location: string;
  coordinates: GPSCoordinates;
  maxParticipants: number;
  participants: string[]; // user IDs
  difficulty: "Легкий" | "Средний" | "Сложный";
  route?: GPSCoordinates[];
  photos?: string[];
  organizerId: string;
  registrationDeadline: Date;
  price?: number;
  requirements?: string[];
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  address: string;
  coordinates: GPSCoordinates;
  phone: string;
  email?: string;
  website?: string;
  workingHours: WorkingHours;
  categories: string[];
  rating: Rating;
  photos?: string[];
  socialLinks?: SocialLinks;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  address: string;
  coordinates: GPSCoordinates;
  phone: string;
  email?: string;
  website?: string;
  workingHours: WorkingHours;
  services: string[];
  specializations: string[];
  rating: Rating;
  priceLevel: "low" | "medium" | "high";
  photos?: string[];
  certifications?: string[];
}

export interface Emergency {
  id: string;
  userId: string;
  location: GPSCoordinates;
  description: string;
  type: "breakdown" | "accident" | "fuel" | "tire" | "other";
  status: "active" | "helping" | "resolved";
  timestamp: Date;
  helperId?: string;
  photos?: string[];
  contactPhone: string;
}

export interface LostFound {
  id: string;
  userId: string;
  type: "lost" | "found";
  category: "motorcycle" | "helmet" | "gear" | "documents" | "other";
  title: string;
  description: string;
  location: string;
  coordinates?: GPSCoordinates;
  date: Date;
  photos?: string[];
  contactInfo: string;
  status: "active" | "resolved";
}

export interface GPSCoordinates {
  latitude: number;
  longitude: number;
}

export interface Rating {
  average: number;
  count: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
  photos?: string[];
}

export interface WorkingHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
  breaks?: TimeBreak[];
}

export interface TimeBreak {
  start: string;
  end: string;
}

export interface SocialLinks {
  telegram?: string;
  vk?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
}

export interface TelegramAuth {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  distance: number;
  difficulty: "Легкий" | "Средний" | "Сложный";
  coordinates: GPSCoordinates[];
  waypoints: Waypoint[];
  createdBy: string;
  rating: Rating;
  tags: string[];
}

export interface Waypoint {
  id: string;
  name: string;
  description?: string;
  coordinates: GPSCoordinates;
  type: "gas" | "food" | "rest" | "scenic" | "danger" | "service";
  photos?: string[];
}
