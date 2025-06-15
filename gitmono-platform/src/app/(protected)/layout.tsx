import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { AppSidebar } from "./app-sidebar";

type Props = {
  children: React.ReactNode;
};

function SideBarLayout({ children }: Props) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="m-2 w-full">
          <div className="border-sidebar-border bg-sidebar rounded-m flex items-center gap-2 border p-2 px-4 shadow">
            {/* Searchbar */}
            <div className="ml-auto"></div>
            <UserButton />
          </div>
          <div className="h-4"></div>
          {/* main content */}
          <div className="border-sidebar-border bg-sidebar h-[calc(100vh-6rem)] overflow-y-scroll rounded-md border p-4 shadow">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default SideBarLayout;
