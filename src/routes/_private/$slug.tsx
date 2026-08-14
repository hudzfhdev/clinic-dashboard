import {
  createFileRoute,
  notFound,
  Outlet,
  redirect,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_private/$slug')({
  component: RouteComponent,
  beforeLoad: (ctx) => {
    if (ctx.params.slug !== 'haya-clinic') {
      throw notFound({ throw: true })
    }
  },
})

function RouteComponent() {
  return <Outlet />
}
