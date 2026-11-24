"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LuMenu,
  LuPanelRightClose,
  LuPanelRightOpen,
  LuX,
} from "react-icons/lu";

import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const KEY = "sidebar-collapsed";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

  // Restore sidebar state after mounting.
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(KEY) === "1");
    } catch {
      setCollapsed(false);
    }
  }, []);

  // Close mobile sidebar after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle Escape key.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleDesktop = () => {
    setCollapsed((current) => {
      const next = !current;

      try {
        localStorage.setItem(KEY, next ? "1" : "0");
      } catch {
        // Ignore storage errors.
      }

      return next;
    });
  };

  const iconBtn =
    "size-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100";

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b border-zinc-200 bg-white/80 px-3 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <button
          type="button"
          aria-label="منو"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className={`${iconBtn} grid lg:hidden`}
        >
          {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
        </button>

        <button
          type="button"
          aria-label={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
          title={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
          aria-expanded={!collapsed}
          onClick={toggleDesktop}
          className={`${iconBtn} hidden lg:grid`}
        >
          {collapsed ? (
            <LuPanelRightOpen className="size-5" />
          ) : (
            <LuPanelRightClose className="size-5" />
          )}
        </button>

        <Link
          href="/"
          className="px-1 text-[15px] font-black tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          جزوه جاوااسکریپت
        </Link>

        <div className="ms-auto">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-14 z-30 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        aria-label="فهرست مباحث"
        className={`fixed bottom-0 top-14 z-30 w-[18.5rem] max-w-[85vw] border-e border-zinc-200 bg-white transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        } ${
          collapsed ? "lg:translate-x-full" : "lg:translate-x-0"
        } lg:shadow-none`}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main
        className={`w-full min-w-0 px-3 py-6 transition-[padding] duration-300 sm:px-4 ${
          collapsed ? "lg:ps-4" : "lg:ps-[18.5rem]"
        }`}
      >
        {children}
      </main>
    </>
  );
}
