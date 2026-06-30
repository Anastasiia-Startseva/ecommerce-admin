export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'Ожидает' | 'Выполнен';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  segment: string;
  phone: string;
  city: string;
  totalSpent: number;
  lastOrder: string;
  loyaltyPoints: number;
}