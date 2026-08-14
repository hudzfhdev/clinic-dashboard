import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/$slug/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/settings"!</div>
}
