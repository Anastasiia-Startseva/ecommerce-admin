import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Users, Package, Bell, Search } from 'lucide-react';

export default function AdminLayout() {
  const menuItems = [
    { path: '/', name: 'Дашборд', icon: <LayoutDashboard size={18} /> },
    { path: '/products', name: 'Товары', icon: <Package size={18} /> },
    { path: '/orders', name: 'Заказы', icon: <ShoppingCart size={18} /> },
    { path: '/customers', name: 'Клиенты', icon: <Users size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="border-b border-slate-200 px-6 py-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">E-commerce</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">Admin Panel</h2>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1">
        <header className="border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:w-80">
              <Search size={16} />
              <input className="w-full bg-transparent outline-none" placeholder="Поиск по админке" />
            </label>

            <div className="flex items-center gap-3">
              <button className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50">
                <Bell size={18} />
              </button>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                  AS
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Anastasiia</p>
                  <p className="text-xs text-slate-500">Менеджер магазина</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}