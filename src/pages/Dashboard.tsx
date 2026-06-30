import PageHeader from '../components/ui/PageHeader';

export default function Dashboard() {
  const stats = [
    { title: 'Продажи за месяц', value: '$12,450', change: '+12.4%', color: 'text-emerald-600', accent: 'bg-emerald-50' },
    { title: 'Новых клиентов', value: '145', change: '+8.1%', color: 'text-sky-600', accent: 'bg-sky-50' },
    { title: 'Заказов в ожидании', value: '24', change: '4 новых', color: 'text-amber-600', accent: 'bg-amber-50' },
  ];

  const recentActivity = [
    { title: 'Новый заказ #1248', detail: 'Покупатель оформил заказ на 2 товара', time: '5 мин назад' },
    { title: 'Товар обновлён', detail: 'MacBook Pro получил новую цену', time: '18 мин назад' },
    { title: 'Запрос клиента', detail: 'Новый отзыв по доставке', time: '1 час назад' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Обзор магазина"
        description="Главные показатели и активность за последние часы"
        badge="Live demo"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className={`inline-flex rounded-xl p-2 ${stat.accent}`}>
              <div className={`h-2.5 w-2.5 rounded-full ${stat.color.replace('text-', 'bg-')}`} />
            </div>
            <h3 className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</h3>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">{stat.value}</p>
            <p className={`mt-2 text-sm font-medium ${stat.color}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Недавняя активность</h2>
          <div className="mt-4 space-y-4">
            {recentActivity.map((item) => (
              <div key={item.title} className="flex items-start justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-800">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                </div>
                <span className="text-sm text-slate-400 dark:text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-sm">
          <p className="text-sm font-medium text-indigo-100">Цель недели</p>
          <h2 className="mt-3 text-2xl font-semibold">Увеличить конверсию на 8%</h2>
          <p className="mt-3 text-sm text-indigo-100">Рекомендуется улучшить карточки товаров и ускорить обработку заказов.</p>
        </div>
      </div>
    </div>
  );
}