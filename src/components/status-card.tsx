import { Card, type CardProps } from 'fumadocs-ui/components/card';
import type { ReactNode } from 'react';

const STATUS_CONFIG = {
  Completed: 'bg-green-500/10 text-green-700 border-green-500/25 dark:text-green-400',
  Ongoing: 'bg-blue-500/10 text-blue-700 border-blue-500/25 dark:text-blue-400',
  Planned: 'bg-amber-500/10 text-amber-700 border-amber-500/25 dark:text-amber-400',
  Archived: 'bg-orange-500/10 text-orange-700 border-orange-500/25 dark:text-orange-400',
  Exploring: 'bg-purple-500/10 text-purple-700 border-purple-500/25 dark:text-purple-400',
  Exited: 'bg-zinc-500/10 text-zinc-500 border-zinc-500/25 dark:text-zinc-400',
} as const;

type Status = keyof typeof STATUS_CONFIG;

type StatusCardProps = Omit<CardProps, 'description'> & {
  status: Status;
  description?: ReactNode;
};

export function StatusCard({ status, description, ...cardProps }: StatusCardProps) {
  const badgeClass = STATUS_CONFIG[status];

  const composedDescription = (
    <span className="flex flex-col gap-1.5">
      <span
        className={`inline-flex w-fit items-center rounded-md border px-1.5 py-0.5 font-mono text-xs font-medium ${badgeClass}`}
      >
        {status}
      </span>
      {description ? <span>{description}</span> : null}
    </span>
  );

  return <Card {...cardProps} description={composedDescription} />;
}
