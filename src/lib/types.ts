export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  specialRequests?: string;
}

export interface Order {
  id?: string;
  customer_name: string;
  customer_email: string;
  phone: string;
  items: CartItem[];
  total: number;
  special_instructions?: string;
}
