import { gitConfig } from '@/lib/shared';

export function SidebarFooter() {
  return (
    <div className="flex flex-col gap-2 px-2 py-3 text-xs text-fd-muted-foreground border-t border-fd-border">
      <div className="flex items-center justify-between">
        <span>Uzayer Masud</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={`https://github.com/${gitConfig.user}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fd-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:uzayermasud@gmail.com"
          className="hover:text-fd-foreground transition-colors"
        >
          Email
        </a>
        <a
          href="https://instagram.com/uzayermasud"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fd-foreground transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
