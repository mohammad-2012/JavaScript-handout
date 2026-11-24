"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LuChevronDown, LuSearch, LuX } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { categoryIcons, groups } from "@/lib/topics";

export default function Sidebar() {
  const pathname = usePathname();

  const [q, setQ] = useState("");
  const [openCats, setOpenCats] = useState<Set<string>>(
    () => new Set(groups.length > 0 ? [groups[0].cat] : []),
  );

  const input = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  const activeCat = useMemo(() => {
    return groups.find((group) =>
      group.topics.some((topic) => pathname === `/docs/${topic.id}`),
    )?.cat;
  }, [pathname]);

  // Keep the active category open.
  useEffect(() => {
    if (!activeCat) return;

    setOpenCats((current) => {
      if (current.has(activeCat)) return current;

      const next = new Set(current);
      next.add(activeCat);
      return next;
    });
  }, [activeCat]);

  // Scroll to the active topic.
  useEffect(() => {
    const activeElement = activeRef.current;

    if (activeElement) {
      activeElement.scrollIntoView({ block: "nearest" });
    }
  }, [pathname]);

  // Keyboard shortcut for search.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const searching = q.trim().length > 0;

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();

    if (!search) return groups;

    return groups
      .map((group) => ({
        ...group,
        topics: group.topics.filter((topic) =>
          `${topic.title}${topic.id}${group.cat}`
            .toLowerCase()
            .includes(search),
        ),
      }))
      .filter((group) => group.topics.length > 0);
  }, [q]);

  const toggle = (cat: string) => {
    setOpenCats((current) => {
      if (current.has(cat)) {
        return new Set();
      }

      return new Set([cat]);
    });
  };

  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="p-3 pb-2">
        <label className="group relative flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 transition hover:border-zinc-300 focus-within:border-sky-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-400/15 dark:border-zinc-800 dark:bg-zinc-900 dark:focus-within:bg-zinc-900 dark:hover:border-zinc-700">
          <LuSearch className="size-4 shrink-0 text-zinc-400 transition group-focus-within:text-sky-500" />

          <input
            ref={input}
            value={q}
            onChange={(event) => setQ(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setQ("");
                event.currentTarget.blur();
              }
            }}
            placeholder="جستجو در مباحث…"
            className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
          />

          {searching ? (
            <button
              type="button"
              onClick={() => {
                setQ("");
                input.current?.focus();
              }}
              aria-label="پاک کردن جستجو"
              className="grid size-5 shrink-0 place-items-center rounded-full bg-zinc-200 text-zinc-500 transition hover:bg-zinc-300 hover:text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
            >
              <LuX className="size-3" />
            </button>
          ) : (
            <kbd
              dir="ltr"
              className="hidden shrink-0 items-center rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] leading-4 text-zinc-400 transition group-focus-within:opacity-0 lg:flex dark:border-zinc-700 dark:bg-zinc-800"
            >
              Ctrl K
            </kbd>
          )}
        </label>
      </div>

      {/* Topics */}
      <nav className="thin-scroll flex-1 overflow-y-auto px-3 pb-4">
        {filtered.map((group) => {
          const Icon = categoryIcons[group.cat];
          const isOpen = searching || openCats.has(group.cat);
          const hasActive = group.cat === activeCat;

          return (
            <div key={group.cat} className="mt-1">
              <button
                type="button"
                onClick={() => toggle(group.cat)}
                aria-expanded={isOpen}
                className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-bold transition hover:bg-zinc-100 dark:hover:bg-zinc-900 ${
                  hasActive
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`size-4 shrink-0 ${
                      hasActive ? "text-sky-500" : "text-zinc-400"
                    }`}
                  />
                )}

                <span className="flex-1 text-start">{group.cat}</span>

                <span className="text-[11px] font-medium text-zinc-400">
                  {group.topics.length}
                </span>

                <LuChevronDown
                  className={`size-3.5 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? "" : "rotate-90 rtl:-rotate-90"
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="my-1 ms-[1.15rem] overflow-hidden border-s border-zinc-200 dark:border-zinc-800">
                  {group.topics.map((topic) => {
                    const active = pathname === `/docs/${topic.id}`;

                    return (
                      <li key={topic.id}>
                        <Link
                          ref={active ? activeRef : undefined}
                          href={`/docs/${topic.id}`}
                          tabIndex={isOpen ? 0 : -1}
                          aria-current={active ? "page" : undefined}
                          className={`-ms-px block border-s py-1.5 ps-4 pe-2 text-[13px] leading-6 transition ${
                            active
                              ? "border-sky-500 font-semibold text-sky-600 dark:border-sky-400 dark:text-sky-300"
                              : "border-transparent text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                          }`}
                        >
                          {topic.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        {!filtered.length && (
          <p className="mt-8 text-center text-sm text-zinc-400">
            چیزی پیدا نشد
          </p>
        )}
      </nav>

      {/* Telegram */}
      <div className="border-t border-zinc-200 p-3 dark:border-zinc-800">
        <a
          href="https://t.me/mocotoovins"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ارتباط با من در تلگرام"
          className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 transition-all duration-200 hover:border-sky-400/60 hover:bg-sky-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/10"
        >
          <span className="min-w-0 flex-1 text-right">
            <span className="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              ارتباط با من در تلگرام
            </span>

            <span
              dir="ltr"
              className="block truncate text-right font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              @mocotoovins
            </span>
          </span>

          <span className="grid size-10 shrink-0 place-items-center rounded-xl text-sky-500 shadow-sm shadow-sky-500/20">
            <FaTelegramPlane className="size-5 animate-telegram-fly" />
          </span>
        </a>
      </div>
    </div>
  );
}
