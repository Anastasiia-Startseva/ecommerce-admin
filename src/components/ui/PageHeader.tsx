import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
  badge?: string;
  action?: ReactNode;
};

export default function PageHeader({ title, description, badge, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {badge ? (
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
            {badge}
          </span>
        ) : null}
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">{title}</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
