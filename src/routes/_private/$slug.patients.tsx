import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/$slug/patients')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/patients"!</div>
}
