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
} from '@/components/ui/sidebar'
import {
  Link,
  type LinkComponentProps,
  type LinkProps,
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

export function AppSideBar() {
  return (
    <Sidebar>
      <AppSideBarHeader />
      <AppSideBarContent />
      <AppSideBarFooter />
      <SidebarRail />
    </Sidebar>
  )
}

function AppSideBarHeader() {
  return (
    <SidebarHeader className="flex justify-between flex-row">
      <SidebarMenu>
        <SidebarMenuItem>
          <h1 className="text-xl">LOGO</h1>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarTrigger />
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
  { to: '/dashboard', label: 'Dashboard', LucideIcon: LayoutDashboard },
  { to: '/appointments', label: 'Appointments', LucideIcon: CalendarClock },
  { to: '/patients', label: 'Patients', LucideIcon: PersonStanding },
  { to: '/practitioners', label: 'Practitioners', LucideIcon: UsersRound },
  { to: '/settings', label: 'Settings', LucideIcon: Settings },
]

function AppSideBarContent() {
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
