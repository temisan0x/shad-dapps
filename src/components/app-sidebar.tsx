"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../components/ui/sidebar";
import { Home, Settings, Users, Calendar, Plus, GroupIcon } from "lucide-react";
import { Link } from "react-router-dom";

function AppSidebar() {
  const navItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Projects", href: "/projects", icon: Users, sideicon: Plus },
    { title: "Task", href: "/tasks", icon: Calendar, sideicon: Plus },
    { title: "Team", href: "/settings", icon: GroupIcon },
    { title: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon" side="left" variant="sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-2 py-8">
          <img src="/logo.png" className="w-10" />
          <h3 className="text-3xl">logip</h3>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <div className="flex">
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-600">{item.title}</span>
                    </Link>
                    <div className="ml-auto">
                      {item.sideicon && (
                        <div className="bg-gray-300 p-2 rounded-full">
                          <item.sideicon className="h-3 w-3 text-black" />
                        </div>
                      )}
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Footer Content</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
