import { AppSideBar } from '@/components/app-sidebar.tsx'
import { SidebarProvider } from '@/components/ui/sidebar.tsx'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_private')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSideBar />
        <main className="px-4 py-2">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
