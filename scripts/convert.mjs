// تبدیل data.js قدیمی به JSON ساخت‌یافته
import fs from "node:fs";
const SRC = process.argv[2] || "../src/JavaScript-handout-main/data.js";
const raw = fs.readFileSync(SRC, "utf8");
const end = raw.indexOf("\n];") + 3; // پایان آرایه topics؛ بقیه کد رندر قدیمی است
const topics = new Function(raw.slice(0, end) + "\nreturn topics;")();
const emo = String.raw`(?:\p{Extended_Pictographic}\uFE0F?\s*)+`;
const clean = (html) =>
  html
    .replace(/^\s*<div class="ls">/, "")
    .replace(/<\/div>\s*$/, "")
    .replace(/<h2>[\s\S]*?<\/h2>/, "")
    .replace(new RegExp(`(<h[23][^>]*>)\\s*${emo}`, "gu"), "$1")
    .replace(new RegExp(`(<div class="(?:tip|warn)">)\\s*${emo}`, "gu"), "$1")
    .trim();
const out = topics.map((t) => ({
  id: t.id, cat: t.cat, title: t.title, badge: t.badge,
  content: clean(t.content), code: t.code ?? "",
}));
fs.writeFileSync("src/data/topics.json", JSON.stringify(out, null, 1));
console.log(out.length, "topics");
