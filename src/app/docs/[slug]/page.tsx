import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LuArrowLeft, LuArrowRight, LuBookOpen } from "react-icons/lu";

import Playground from "@/components/Playground";
import { getNeighbors, getTopic, ordered } from "@/lib/topics";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => ordered.map((t) => ({ slug: t.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTopic((await params).slug);
  return { title: t?.title };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) notFound();

  const { prev, next } = getNeighbors(slug);

  const nav =
    "group flex-1 rounded-xl border border-zinc-200/80 bg-white p-4 transition-all duration-200 hover:border-sky-400 hover:bg-sky-50/50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-sky-500/60 dark:hover:bg-sky-950/20";

  return (
    <article className="mx-auto w-full max-w-[1100px] px-5 py-4 sm:px-7 lg:px-10 xl:px-12">
      {/* Lesson Header */}
      <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <LuBookOpen className="size-4" />
            {topic.cat}
          </span>

          <span className="text-zinc-300 dark:text-zinc-700">/</span>

          <span className="rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
            {topic.badge}
          </span>
        </div>

        <h1 className="text-2xl font-black leading-relaxed text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {topic.title}
        </h1>
      </header>
      {/* Lesson Content */}
      <section className="doc min-w-0">
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </section>
      {/* Interactive Code Playground */}
      {topic.code && (
        <section className="mt-10 min-w-0">
          <Playground initial={topic.code} />
        </section>
      )}
      {/* Lesson Navigation */}
      <nav className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/docs/${prev.id}`} className={nav}>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <LuArrowRight className="size-3.5" />
              درس قبلی
            </span>

            <span className="mt-2 block font-semibold text-zinc-800 transition-colors group-hover:text-sky-600 dark:text-zinc-200 dark:group-hover:text-sky-400">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link href={`/docs/${next.id}`} className={`${nav} text-end`}>
            <span className="flex items-center justify-end gap-1 text-xs text-zinc-400">
              درس بعدی
              <LuArrowLeft className="size-3.5" />
            </span>

            <span className="mt-2 block font-semibold text-zinc-800 transition-colors group-hover:text-sky-600 dark:text-zinc-200 dark:group-hover:text-sky-400">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
