import raw from "@/data/topics.json";
import type { IconType } from "react-icons";
import {
  LuRocket,
  LuGitBranch,
  LuList,
  LuBox,
  LuBraces,
  LuType,
  LuCode,
  LuBlocks,
  LuLayoutTemplate,
  LuMousePointerClick,
  LuTimer,
  LuDatabase,
  LuSparkles,
  LuGlobe,
} from "react-icons/lu";

export type Topic = {
  id: string;
  cat: string;
  title: string;
  badge: string;
  content: string;
  code: string;
};
export type Group = { cat: string; topics: Topic[] };

export const topics = raw as Topic[];

export const categoryIcons: Record<string, IconType> = {
  مقدمات: LuRocket,
  "کنترل جریان": LuGitBranch,
  آرایه‌ها: LuList,
  آبجکت‌ها: LuBox,
  "Destructuring & Spread": LuBraces,
  "متدهای String": LuType,
  توابع: LuCode,
  OOP: LuBlocks,
  DOM: LuLayoutTemplate,
  رویدادها: LuMousePointerClick,
  "Async JS": LuTimer,
  "Storage & BOM": LuDatabase,
  "مفاهیم پیشرفته": LuSparkles,
  "API و Async": LuGlobe,
};

export const groups: Group[] = Array.from(
  topics.reduce(
    (m, t) => m.set(t.cat, [...(m.get(t.cat) ?? []), t]),
    new Map<string, Topic[]>(),
  ),
  ([cat, list]) => ({ cat, topics: list }),
);

// ترتیب مطالعه بر اساس دسته‌بندی (نه ترتیب خام فایل)
export const ordered = groups.flatMap((g) => g.topics);
export const getTopic = (id: string) => ordered.find((t) => t.id === id);
export const getNeighbors = (id: string) => {
  const i = ordered.findIndex((t) => t.id === id);
  return { prev: ordered[i - 1], next: ordered[i + 1] };
};
