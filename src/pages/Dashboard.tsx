export default function Dashboard() {
  const stats = [
    { title: 'Продажи за месяц', value: '$12,450', color: 'text-green-600' },
    { title: 'Новых клиентов', value: '145', color: 'text-blue-600' },
    { title: 'Заказов в ожидании', value: '24', color: 'text-orange-600' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Сводка</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}