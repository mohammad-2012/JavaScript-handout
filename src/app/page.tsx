import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { categoryIcons, groups, topics } from "@/lib/topics";

export default function Home() {
  return (
    <div className="mx-auto">
      <p className="mb-3 text-sm font-semibold text-amber-600 dark:text-amber-400">
        مستندات تعاملی
      </p>
      <h1 className="text-4xl font-black leading-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        جاوااسکریپت را از صفر
        <br />
        تا پیشرفته یاد بگیر
      </h1>
      <p className="mt-5 max-w-xl leading-8 text-zinc-500">
        {topics.length} مبحث آموزشی به زبان فارسی، همراه با مثال‌های قابل‌اجرا.
        هر کد را همان‌جا ویرایش و اجرا کن.
      </p>
      <Link
        href={`/docs/${topics[0].id}`}
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-amber-400 dark:text-zinc-900 dark:hover:bg-amber-300"
      >
        شروع یادگیری <LuArrowLeft className="size-4" />
      </Link>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => {
          const Icon = categoryIcons[g.cat];
          return (
            <Link
              key={g.cat}
              href={`/docs/${g.topics[0].id}`}
              className="group rounded-xl border border-zinc-200 p-4 transition hover:border-amber-400 dark:border-zinc-800 dark:hover:border-amber-400/60"
            >
              <div className="flex items-center gap-3">
                {Icon && (
                  <Icon className="size-5 text-zinc-400 transition group-hover:text-amber-500" />
                )}
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  {g.cat}
                </span>
                <span className="ms-auto text-xs text-zinc-400">
                  {g.topics.length} مبحث
                </span>
              </div>
              <p className="mt-2 line-clamp-1 text-sm text-zinc-500">
                {g.topics.map((t) => t.title.split(" (")[0]).join("، ")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
