"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Frame237.webp"
import {
  LayoutDashboard,
  Users,
  UserRound,
  CalendarCheck,
  CalendarDays,
  Plane,
  Wallet,
  Laptop,
  FileText,
  Bell,
  Settings,
  ChevronDown,
  ChevronUp,
  Leaf,
  Sprout,
} from "lucide-react";
import Image from "next/image";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  permission: string;
  children?: {
    name: string;
    path: string;
    permission: string;
  }[];
};

type SidebarSection = {
  title: string;
  items: NavItem[];
};

const navSections: SidebarSection[] = [
  {
    title: "Main Menu",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard />, permission: "dashboard" },
      { name: "Users & Roles", path: "/users", icon: <Users />, permission: "users" },
      { name: "Employees", path: "/employees", icon: <UserRound />, permission: "employees" },
    ],
  },
  //   {
  //     title: "HR Management",
  //     items: [
  //       { name: "Attendance", path: "/attendance", icon: <CalendarCheck />, permission: "attendance" },
  //       { name: "Holiday Calendar", path: "/holiday-calendar", icon: <CalendarDays />, permission: "holidays" },
  //       { name: "Leaves", path: "/leaves", icon: <Plane />, permission: "leaves" },
  //       { name: "Salary Slips", path: "/salary-slips", icon: <Wallet />, permission: "salary" },
  //       { name: "Devices", path: "/devices", icon: <Laptop />, permission: "devices" },
  //       { name: "Documents", path: "/documents", icon: <FileText />, permission: "documents" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     items: [
  //       { name: "Notifications", path: "/notifications", icon: <Bell />, permission: "notifications" },
  //       { name: "Settings", path: "/settings", icon: <Settings />, permission: "settings" },
  //     ],
  //   },
];

type Props = {
  user?: { sections?: string[] } | null;
};

export default function Sidebar({ user }: Props) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // user na ho to sab menu dikhao; baad me user.sections se filter hoga
  const canSee = (permission: string) =>
    user?.sections ? user.sections.includes(permission) : true;

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");

  useEffect(() => {
    const opened: Record<string, boolean> = {};
    navSections.forEach((section) =>
      section.items.forEach((item) => {
        if (item.children?.some((child) => pathname === child.path)) {
          opened[item.name] = true;
        }
      })
    );
    setOpenMenus((prev) => ({ ...prev, ...opened }));
  }, [pathname]);

  const itemClass = (active: boolean) =>
    `w-full flex items-center gap-3 rounded-lg border-l-4 px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${active
      ? "border-primary-600 bg-primary-100 text-primary-700"
      : "border-transparent text-foreground/80 hover:bg-primary-50"
    }`;

  const iconClass = (active: boolean) =>
    `flex h-5 w-5 shrink-0 items-center justify-center ${active ? "text-primary-600" : "text-foreground/70"
    }`;

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-sidebar px-3">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 px-2 py-5">
        <Image
          src={Logo}
          alt="Figmanet logo"
          width={35}
        />
        <div className="leading-tight">
          <p className="text-xl font-bold">FSPL</p>
          <p className="text-xs text-muted">Figmanet Solutions Pvt Ltd </p>
        </div>
      </Link>

      {/* Menu */}
      <nav className="no-scrollbar flex-1 overflow-y-auto pb-4">
        {navSections.map((section) => {
          const allowedItems = section.items.filter((item) => canSee(item.permission));
          if (allowedItems.length === 0) return null;

          return (
            <div key={section.title} className="mb-4">
              <h2 className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-muted">
                {section.title}
              </h2>

              <ul className="flex flex-col gap-1">
                {allowedItems.map((item) => {
                  const allowedChildren =
                    item.children?.filter((child) => canSee(child.permission)) ?? [];
                  const hasChildren = allowedChildren.length > 0;
                  const childIsActive = allowedChildren.some((c) => pathname === c.path);
                  const active = hasChildren ? childIsActive : isActive(item.path);
                  const isOpen = openMenus[item.name] ?? false;

                  return (
                    <li key={item.name}>
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenus((prev) => ({ ...prev, [item.name]: !isOpen }))
                            }
                            className={itemClass(active)}
                          >
                            <span className={iconClass(active)}>{item.icon}</span>
                            <span className="flex-1 whitespace-nowrap text-left">{item.name}</span>
                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>

                          {isOpen && (
                            <ul className="mb-1 ml-5 mt-1 flex flex-col gap-1">
                              {allowedChildren.map((child) => {
                                const childActive = pathname === child.path;
                                return (
                                  <li key={child.path}>
                                    <Link
                                      href={child.path}
                                      className={`ml-3 block rounded-lg px-3 py-2 text-sm transition-colors ${childActive
                                          ? "bg-primary-100 font-medium text-primary-700"
                                          : "text-muted hover:bg-primary-50 hover:text-primary-700"
                                        }`}
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link href={item.path} className={itemClass(active)}>
                          <span className={iconClass(active)}>{item.icon}</span>
                          <span className="whitespace-nowrap">{item.name}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

    </aside>
  );
}