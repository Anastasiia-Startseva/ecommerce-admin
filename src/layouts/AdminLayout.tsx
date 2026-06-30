import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Users, Package, Bell, Search, Moon, Sun, Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const menuItems = [
    { path: '/', name: 'Дашборд', icon: <LayoutDashboard size={18} /> },
    { path: '/products', name: 'Товары', icon: <Package size={18} /> },
    { path: '/orders', name: 'Заказы', icon: <ShoppingCart size={18} /> },
    { path: '/customers', name: 'Клиенты', icon: <Users size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      ) : null}

      <aside className={`fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 lg:static lg:flex ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">E-commerce</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">Admin Panel</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-full p-2 text-slate-600 lg:hidden dark:text-slate-300"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
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
        <header className="border-b border-slate-200 bg-white px-6 py-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <Menu size={18} />
              </button>
            </div>

            <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:w-80 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              <Search size={16} />
              <input className="w-full bg-transparent outline-none" placeholder="Поиск по админке" />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDark((value) => !value)}
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Переключить тему"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button type="button" className="rounded-full border border-slate-200 p-2 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                <Bell size={18} />
              </button>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2 transition-colors duration-300 dark:bg-slate-800">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
                  AS
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Anastasiia</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Менеджер магазина</p>
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