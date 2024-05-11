import { DocsSidebarNav } from '@/components/sidebar-nav'
import { docsConfig } from '@/constants/docs'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r pt-6 pr-2 md:sticky md:block">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
      {children}
    </div>
  )
}
