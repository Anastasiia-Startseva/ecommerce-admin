// src/pages/Customers.tsx
import { type Customer } from '../types';

const mockCustomers: Customer[] = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@example.com' },
  { id: '2', name: 'Анна Смирнова', email: 'anna@example.com' },
];

export default function Customers() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Клиенты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockCustomers.map(c => (
          <div key={c.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
            <span className="font-bold text-lg">{c.name}</span>
            <span className="text-gray-500">{c.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}