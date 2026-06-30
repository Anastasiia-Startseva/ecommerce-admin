import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Users, Package } from 'lucide-react';

export default function AdminLayout() {
  const menuItems = [
    { path: '/', name: 'Дашборд', icon: <LayoutDashboard size={20} /> },
    { path: '/products', name: 'Товары', icon: <Package size={20} /> },
    { path: '/orders', name: 'Заказы', icon: <ShoppingCart size={20} /> },
    { path: '/customers', name: 'Клиенты', icon: <Users size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 text-2xl font-bold text-indigo-600 border-b">
          AdminPanel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white shadow-sm flex items-center justify-end px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              AS
            </div>
            <span className="font-medium">Anastasiia</span>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}