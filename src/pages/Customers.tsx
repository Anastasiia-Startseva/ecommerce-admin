import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { type Customer } from '../types';

const mockCustomers: Customer[] = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', segment: 'VIP', phone: '+7 900 123 45 67', city: 'Москва', totalSpent: 3200, lastOrder: '2 дня назад', loyaltyPoints: 840 },
  { id: '2', name: 'Анна Смирнова', email: 'anna@example.com', segment: 'Постоянный', phone: '+7 900 765 43 21', city: 'Санкт-Петербург', totalSpent: 1880, lastOrder: '5 дней назад', loyaltyPoints: 420 },
  { id: '3', name: 'Дмитрий Козлов', email: 'dmitry@example.com', segment: 'Новый', phone: '+7 901 555 12 34', city: 'Казань', totalSpent: 540, lastOrder: '1 неделю назад', loyaltyPoints: 120 },
];

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(mockCustomers[0]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsProfileOpen(true);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Клиенты"
        description="Сегменты и контактные данные покупателей"
        badge="CRM demo"
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mockCustomers.map((customer) => (
            <div key={customer.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">{customer.segment}</span>
                <span className="text-sm text-slate-400 dark:text-slate-500">#{customer.id}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">{customer.name}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{customer.email}</p>
              <button
                type="button"
                onClick={() => openProfile(customer)}
                className="mt-5 self-start rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Открыть профиль
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">Профиль клиента</p>
          {selectedCustomer ? (
            <>
              <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-50">{selectedCustomer.name}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{selectedCustomer.email}</p>
              <div className="mt-6 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-300">Сегмент: <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.segment}</span></p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Средний чек: <span className="font-semibold text-slate-900 dark:text-slate-100">${selectedCustomer.totalSpent}</span></p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Последний заказ: <span className="font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.lastOrder}</span></p>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileOpen(true)}
                className="mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Открыть полный профиль
              </button>
            </>
          ) : (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Выберите клиента, чтобы увидеть подробности.</p>
          )}
        </div>
      </div>

      {isProfileOpen && selectedCustomer ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">Полный профиль</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">{selectedCustomer.name}</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{selectedCustomer.email}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Телефон</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.phone}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Город</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.city}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Сегмент</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.segment}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">Баллы лояльности</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{selectedCustomer.loyaltyPoints}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">История активности</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Сделал заказ на сумму $980 вчера</li>
                <li>• Оставил положительный отзыв по доставке</li>
                <li>• Пригласил двух друзей по реферальной программе</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}