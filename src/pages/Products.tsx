// src/pages/Products.tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { type Product } from '../types';

const mockProducts: Product[] = [
  { id: '1', name: 'Ноутбук Apple MacBook Pro', price: 2000, stock: 15 },
  { id: '2', name: 'Беспроводные наушники', price: 150, stock: 100 },
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

  if (isLoading) return <div>Загрузка товаров...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Управление товарами</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-end">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Название</label>
          <input {...register('name', { required: true })} className="border p-2 rounded-md w-64" placeholder="Введите название..." />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Цена ($)</label>
          <input type="number" {...register('price', { required: true })} className="border p-2 rounded-md w-32" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Остаток (шт)</label>
          <input type="number" {...register('stock', { required: true })} className="border p-2 rounded-md w-32" />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Добавить
        </button>
      </form>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-medium text-gray-600">Название</th>
              <th className="p-4 font-medium text-gray-600">Цена</th>
              <th className="p-4 font-medium text-gray-600">Остаток на складе</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => (
              <tr key={p.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="p-4">{p.name}</td>
                <td className="p-4">${p.price}</td>
                <td className="p-4">{p.stock} шт.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}