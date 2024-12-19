"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { ChatIcon, HomeIcon, SettingIcon, UsersIcon } from "@lib/svgIcons";
import { Route } from "@lib/definitions";

interface AppSidebarProps {
  className?: string;
}

const routes: Route[] = [
  {
    icon: HomeIcon,
    value: "home",
    label: "Home",
    link: "/",
  },
  {
    icon: ChatIcon,
    value: "chat",
    label: "Chat",
    link: "/chat",
  },
  {
    icon: UsersIcon,
    value: "users",
    label: "Users",
    link: "/users",
  },
];

function AppSidebar({ className = "" }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={`bg-[#115E56] w-[50px] lg:w-[60px] flex flex-col justify-between h-full shadow-md transition-all overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center py-6 px-2 lg:px-4 gap-5">
        <div className="min-w-[33px]">
          <img
            src="logos/wingman-logo.png"
            alt="Wingman"
            className="size-[33px] rounded-lg"
          />
        </div>
        <div className="w-full h-[1px] bg-[#134E48]" />

        {routes.map((route) => (
          <div
            key={route.value}
            className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
              pathname === route.link
                ? "bg-white text-[#115E56]"
                : "text-primary-shade"
            } `}
          >
            <route.icon className={`size-5 `} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center py-6 px-4 gap-5">
        <SettingIcon className="size-5 text-primary-shade cursor-pointer" />
      </div>
    </div>
  );
}

export default AppSidebar;
