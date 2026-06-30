import { type Order } from '../types';

const mockOrders: Order[] = [
  { id: 'ORD-001', customerName: 'Иван Иванов', total: 2150, status: 'Выполнен' },
  { id: 'ORD-002', customerName: 'Анна Смирнова', total: 150, status: 'Ожидает' },
];

export default function Orders() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Заказы</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-600">№ Заказа</th>
              <th className="p-4 font-medium text-gray-600">Клиент</th>
              <th className="p-4 font-medium text-gray-600">Сумма</th>
              <th className="p-4 font-medium text-gray-600">Статус</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr key={o.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="p-4 font-medium">{o.id}</td>
                <td className="p-4">{o.customerName}</td>
                <td className="p-4">${o.total}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    o.status === 'Выполнен' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}