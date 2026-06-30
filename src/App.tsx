
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/*заглушки */}
      <Route path="/" element={<div className="p-10 text-2xl font-bold">Главная (Дашборд)</div>} />
      <Route path="/products" element={<div className="p-10 text-2xl font-bold">Товары</div>} />
      <Route path="/orders" element={<div className="p-10 text-2xl font-bold">Заказы</div>} />
      <Route path="/customers" element={<div className="p-10 text-2xl font-bold">Клиенты</div>} />
    </Routes>
  );
}

export default App;