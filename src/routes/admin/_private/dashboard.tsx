import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_private/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Dashboard</div>
}
