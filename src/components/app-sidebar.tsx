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
import { Link, type LinkProps } from '@tanstack/react-router'
import { LayoutDashboard, UserRound } from 'lucide-react'
import type React from 'react'
import type { ComponentPropsWithRef, JSX, PropsWithChildren } from 'react'

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
  ...props
}: Omit<LinkProps, 'children'> & {
  label: string
  LucideIcon: React.ElementType<ComponentPropsWithRef<'svg'>>
}) {
  return (
    <Link {...props}>
      {({ isActive }) => {
        console.log({ isActive, label })
        if (isActive) {
          return (
            <>
              {<LucideIcon />}
              {label}
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

function AppSideBarContent() {
  return (
    <SidebarContent>
      <SidebarMenu className="p-2">
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <SideNavLink
                label="Dashboard"
                LucideIcon={LayoutDashboard}
                to="/dashboard"
              />
            }
          />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <SideNavLink
                label="Dashboard"
                LucideIcon={LayoutDashboard}
                to="/patients"
              />
            }
          />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <SideNavLink
                label="Dashboard"
                LucideIcon={LayoutDashboard}
                to="/appointments"
              />
            }
          />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <SideNavLink
                label="Dashboard"
                LucideIcon={LayoutDashboard}
                to="/settings"
              />
            }
          />
        </SidebarMenuItem>
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
