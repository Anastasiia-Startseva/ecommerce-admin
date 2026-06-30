import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { type Product } from '../types';

const mockProducts: Product[] = [
  { id: '1', name: 'Ноутбук Apple MacBook Pro', price: 2000, stock: 15 },
  { id: '2', name: 'Беспроводные наушники', price: 150, stock: 100 },
  { id: '3', name: 'Умные часы', price: 320, stock: 40 },
];

export default function Products() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<Omit<Product, 'id'>>();

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [...mockProducts];
    },
  });

  const addProductMutation = useMutation({
    mutationFn: async (newProduct: Omit<Product, 'id'>) => {
      const product = { ...newProduct, id: Date.now().toString() };
      mockProducts.push(product);
      return product;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      reset();
    },
  });

  const onSubmit = (data: Omit<Product, 'id'>) => {
    addProductMutation.mutate(data);
  };

  if (isLoading) return <div className="rounded-2xl bg-white p-6 text-sm text-slate-500 shadow-sm">Загрузка товаров...</div>;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Управление товарами"
        description="Добавляйте новые позиции и отслеживайте остатки"
        badge="CRUD demo"
        action={
          <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
            <Plus size={16} />
            Новый товар
          </button>
        }
      />

      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr_auto]">
          <div>
            <label className="mb-1 block text-sm text-slate-600 dark:text-slate-400">Название</label>
            <input {...register('name', { required: true })} className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" placeholder="Введите название..." />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600 dark:text-slate-400">Цена ($)</label>
            <input type="number" {...register('price', { required: true })} className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600 dark:text-slate-400">Остаток (шт)</label>
            <input type="number" {...register('stock', { required: true })} className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100" />
          </div>
          <button type="submit" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
            Добавить
          </button>
        </div>
      </form>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <th className="p-4 font-medium text-slate-600 dark:text-slate-300">Название</th>
              <th className="p-4 font-medium text-slate-600 dark:text-slate-300">Цена</th>
              <th className="p-4 font-medium text-slate-600 dark:text-slate-300">Остаток</th>
              <th className="p-4 font-medium text-slate-600 dark:text-slate-300">Статус</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => (
              <tr key={p.id} className="border-b border-slate-100 last:border-0 transition-colors duration-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800">
                <td className="p-4 font-medium text-slate-800 dark:text-slate-100">{p.name}</td>
                <td className="p-4 text-slate-600 dark:text-slate-300">${p.price}</td>
                <td className="p-4 text-slate-600 dark:text-slate-300">{p.stock} шт.</td>
                <td className="p-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${p.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {p.stock > 0 ? 'В наличии' : 'Нет в наличии'}
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