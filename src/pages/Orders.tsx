import PageHeader from '../components/ui/PageHeader';
import { type Order } from '../types';

const mockOrders: Order[] = [
  { id: 'ORD-001', customerName: 'Иван Иванов', total: 2150, status: 'Выполнен' },
  { id: 'ORD-002', customerName: 'Анна Смирнова', total: 150, status: 'Ожидает' },
  { id: 'ORD-003', customerName: 'Дмитрий Козлов', total: 980, status: 'Выполнен' },
];

export default function Orders() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Заказы"
        description="Контроль поступающих и завершённых покупок"
        badge="Order flow"
      />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="p-4 font-medium text-slate-600">№ Заказа</th>
              <th className="p-4 font-medium text-slate-600">Клиент</th>
              <th className="p-4 font-medium text-slate-600">Сумма</th>
              <th className="p-4 font-medium text-slate-600">Статус</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr key={o.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-800">{o.id}</td>
                <td className="p-4 text-slate-600">{o.customerName}</td>
                <td className="p-4 text-slate-600">${o.total}</td>
                <td className="p-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${o.status === 'Выполнен' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
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