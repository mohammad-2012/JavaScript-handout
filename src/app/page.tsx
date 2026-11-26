import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { categoryIcons, groups, topics } from "@/lib/topics";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
      <section>
        <p className="mb-4 text-sm font-bold text-blue-600 dark:text-blue-400">
          مستندات جامع جاوااسکریپت
        </p>

        <h1 className="text-3xl font-black leading-[1.5] tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          جاوااسکریپت را اصولی
          <br />
          از پایه تا پیشرفته یاد بگیر
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base dark:text-zinc-400">
          در این مستندات، مفاهیم جاوااسکریپت را از مبانی اولیه تا مباحث پیشرفته
          به‌صورت مرحله‌به‌مرحله یاد می‌گیری. هر درس شامل توضیحات، مثال‌های
          کدنویسی و محیط تعاملی برای ویرایش و اجرای کد است.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href={`/docs/${topics[0].id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-zinc-700 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
          >
            شروع یادگیری
            <LuArrowLeft className="size-4" />
          </Link>

          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {topics.length} درس آموزشی
          </span>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            مسیرهای یادگیری
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
            برای یادگیری منظم، یکی از دسته‌بندی‌های زیر را انتخاب کن.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => {
            const Icon = categoryIcons[g.cat];

            return (
              <Link
                key={g.cat}
                href={`/docs/${g.topics[0].id}`}
                className="group rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-amber-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-amber-400/60"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon className="size-5 text-zinc-400 transition-colors group-hover:text-amber-500" />
                  )}

                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {g.cat}
                  </span>

                  <span className="ms-auto text-xs text-zinc-500 dark:text-zinc-400">
                    {g.topics.length} درس
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                  {g.topics.map((t) => t.title.split(" (")[0]).join("، ")}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
