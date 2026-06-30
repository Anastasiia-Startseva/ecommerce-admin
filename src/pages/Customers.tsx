import PageHeader from '../components/ui/PageHeader';
import { type Customer } from '../types';

const mockCustomers: Customer[] = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', segment: 'VIP' },
  { id: '2', name: 'Анна Смирнова', email: 'anna@example.com', segment: 'Постоянный' },
  { id: '3', name: 'Дмитрий Козлов', email: 'dmitry@example.com', segment: 'Новый' },
];

export default function Customers() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Клиенты"
        description="Сегменты и контактные данные покупателей"
        badge="CRM demo"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockCustomers.map((customer) => (
          <div key={customer.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">{customer.segment}</span>
              <span className="text-sm text-slate-400 dark:text-slate-500">#{customer.id}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">{customer.name}</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{customer.email}</p>
            <button className="mt-5 self-start rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Открыть профиль
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}