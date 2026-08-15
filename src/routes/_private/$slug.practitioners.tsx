import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/$slug/practitioners')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/$slug/practitioners"!</div>
}
