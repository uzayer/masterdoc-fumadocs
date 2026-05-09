'use client';

import { orgs } from '@/data/orgs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface OrgTagProps {
  id: string;
}

export function OrgTag({ id }: OrgTagProps) {
  const org = orgs[id];
  if (!org) return <span className="font-mono text-xs opacity-50">#{id}</span>;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex cursor-default items-center gap-1 rounded-md border border-fd-border bg-fd-card px-1.5 py-0.5 font-mono text-xs font-medium text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground">
            #{org.shortName}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" align="start">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold">{org.name}</span>
            <span className="opacity-80">{org.description}</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
