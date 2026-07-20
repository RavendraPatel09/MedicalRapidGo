export type Role = "BUYER" | "SELLER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface Medicine {
  id: string;
  name: string;
  manufacturer: string;
  expiryDate: string; // ISO format
  price: number;
  discountPercentage?: number;
  sellerId: string;
  sellerName: string;
  rating: number;
  distanceKm?: number; // In mock data, distance relative to user
  imageUrl: string;
  description: string;
  stock: number;
  requiresPrescription: boolean;
  category: string;
  createdAt: string;
}

export interface CartItem {
  medicineId: string;
  quantity: number;
}

export type OrderStatus = "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  deliveryAddress: string;
}

export interface Review {
  id: string;
  medicineId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  status: "SENT" | "DELIVERED" | "SEEN";
  createdAt: string;
  isOffer?: boolean;
  offerAmount?: number;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  type: "ORDER" | "MESSAGE" | "ALERT";
}
