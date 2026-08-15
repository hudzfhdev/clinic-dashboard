import { cn } from '#/lib/utils.ts'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Link,
  useParams,
  type LinkComponentProps,
} from '@tanstack/react-router'
import {
  LayoutDashboard,
  UserRound,
  CalendarClock,
  PersonStanding,
  UsersRound,
  Settings,
} from 'lucide-react'
import type React from 'react'
import type { ComponentProps, ComponentPropsWithRef } from 'react'
import { BrandIconWithLabel } from './icons/brand.icon'
import { TooltipWrapper } from '@/components/ui/tooltip'

export function AppSideBar() {
  return (
    <Sidebar collapsible="icon">
      <AppSideBarHeader />
      <AppSideBarContent />
      <AppSideBarFooter />
      <SidebarRail />
    </Sidebar>
  )
}

function AppSideBarHeader() {
  const { state } = useSidebar()
  return (
    <SidebarHeader className="border-b flex justify-between items-center flex-row">
      {state === 'expanded' ? (
        <SidebarMenu>
          <SidebarMenuItem>
            <BrandIconWithLabel className="h-10 w-32" />
          </SidebarMenuItem>
        </SidebarMenu>
      ) : null}
      <TooltipWrapper
        content={<span>{state === 'collapsed' ? 'Expand' : 'Close'}</span>}
      >
        <SidebarTrigger />
      </TooltipWrapper>
    </SidebarHeader>
  )
}

function SideNavLink({
  LucideIcon,
  label,
  className,
  ...props
}: Omit<LinkComponentProps, 'children'> & {
  label: string
  LucideIcon: React.ElementType<ComponentPropsWithRef<'svg'>>
}) {
  return (
    <Link
      className={cn("data-[status='active']:bg-primary", className)}
      {...props}
    >
      {({ isActive }) => {
        if (isActive) {
          return (
            <>
              {<LucideIcon className="text-white" />}
              <span className="text-white">{label}</span>
            </>
          )
        }
        return (
          <>
            {<LucideIcon />}
            {label}
          </>
        )
      }}
    </Link>
  )
}

const nav: Array<ComponentProps<typeof SideNavLink>> = [
  {
    to: '/$slug/dashboard',
    label: 'Dashboard',
    LucideIcon: LayoutDashboard,
  },
  {
    to: '/$slug/appointments',
    label: 'Appointments',
    LucideIcon: CalendarClock,
  },
  {
    to: '/$slug/patients',
    label: 'Patients',
    LucideIcon: PersonStanding,
  },
  {
    to: '/$slug/practitioners',
    label: 'Practitioners',
    LucideIcon: UsersRound,
  },
  {
    to: '/$slug/settings',
    label: 'Settings',
    LucideIcon: Settings,
  },
]

function AppSideBarContent() {
  const { slug } = useParams({ from: '/_private/$slug' })
  return (
    <SidebarContent>
      <SidebarMenu className="p-2">
        {nav.map((props, idx) => (
          <SidebarMenuItem key={idx}>
            <SidebarMenuButton
              render={
                <SideNavLink
                  label={props.label}
                  LucideIcon={props.LucideIcon}
                  to={props.to}
                  params={{ slug }}
                />
              }
            />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  )
}

function AppSideBarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <UserRound /> Username
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
