"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: Bot,
  },
  {
    title: "Meetings",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects = [
  {
    name: "Project 1",
  },
  {
    name: "A Project 2",
  },
  {
    name: "B Project 3",
  },
  {
    name: "C Project 4",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <div>
      <Sidebar collapsible="icon" variant="floating">
        {/* Logo and title */}
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            {open && (
              <h1 className="text-primary/80 text-xl font-bold">GitMono</h1>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          {/* Group1 */}
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={cn({
                            "!bg-primary !text-white": pathname === item.url,
                          })}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Group2 */}
          <SidebarGroup>
            <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              {/* ProjectItems */}
              <SidebarMenu>
                {projects.map((project) => {
                  return (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton asChild>
                        <div>
                          <div
                            className={cn(
                              "text-primary flex size-6 items-center justify-center rounded-sm border bg-white text-sm",
                              {
                                "!bg-primary !text-white": true,
                              },
                            )}
                          >
                            {project.name[0]}
                          </div>
                          <span>{project.name}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
                <div className="h-2"></div>
                <SidebarMenuItem>
                  <Link href={"/create"}>
                    <Button size={"sm"} variant={"outline"} className="w-fit">
                      <Plus />
                      {open && "Create Project"}
                    </Button>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
