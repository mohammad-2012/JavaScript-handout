let currentCode = "";
let isDark = true;
let isConsoleOpen = true;
let isSidebarOpen = true;
const conOut = document.getElementById("con-out");
const lesson = document.getElementById("lesson");
const consolePanel = document.getElementById("console-panel");
const sidebar = document.getElementById("sidebar");

// ── Override console ──
const orig = {
  log: console.log.bind(console),
  error: console.error.bind(console),
  warn: console.warn.bind(console),
  info: console.info.bind(console),
  time: console.time.bind(console),
  timeEnd: console.timeEnd.bind(console),
};

function addLine(args, type) {
  const empty = conOut.querySelector(".cempty");
  if (empty) empty.remove();
  const icons = { log: "›", error: "✕", warn: "⚠", info: "ℹ" };
  const line = document.createElement("div");
  line.className = "cline " + type;
  line.innerHTML = `<span style="opacity:.5;flex-shrink:0">${icons[type] || "›"}</span><span>${args
    .map(fmtVal)
    .join(" ")}</span>`;
  conOut.appendChild(line);
  conOut.scrollTop = conOut.scrollHeight;
}

function fmtVal(v) {
  if (v === null) return '<span style="color:#888">null</span>';
  if (v === undefined) return '<span style="color:#888">undefined</span>';
  if (typeof v === "boolean") return `<span style="color:#c678dd">${v}</span>`;
  if (typeof v === "number")
    return `<span style="color:#d19a66">${isNaN(v) ? "NaN" : v === Infinity ? "Infinity" : v}</span>`;
  if (typeof v === "string") return `<span style="color:#98c379">"${v}"</span>`;
  if (Array.isArray(v)) {
    const items = v.slice(0, 8).map(fmtVal).join(", ");
    return `<span style="color:#61afef">[${items}${v.length > 8 ? ", ..." : ""}]</span>`;
  }
  if (v instanceof Error)
    return `<span style="color:#ff6b6b">${v.message}</span>`;
  if (typeof v === "object") {
    try {
      const e = Object.entries(v)
        .slice(0, 5)
        .map(([k, val]) => `${k}:${fmtVal(val)}`)
        .join(", ");
      return `<span style="color:#e5c07b">{${e}${Object.keys(v).length > 5 ? ", ..." : ""}}</span>`;
    } catch {
      return String(v);
    }
  }
  if (typeof v === "function")
    return `<span style="color:#c678dd">ƒ ${v.name || "anonymous"}()</span>`;
  return String(v);
}

const timers = {};

console.log = (...a) => {
  orig.log(...a);
  addLine(a, "log");
};
console.error = (...a) => {
  orig.error(...a);
  addLine(a, "error");
};
console.warn = (...a) => {
  orig.warn(...a);
  addLine(a, "warn");
};
console.info = (...a) => {
  orig.info(...a);
  addLine(a, "info");
};
console.time = (l) => {
  timers[l] = Date.now();
  orig.time(l);
};
console.timeEnd = (l) => {
  const t = timers[l] ? Date.now() - timers[l] : 0;
  addLine([`${l}: ${t}ms`], "info");
  orig.timeEnd(l);
};

function clearCon() {
  conOut.innerHTML =
    '<div class="cempty"><span style="font-size:28px;opacity:.3">🖥️</span><span>کنسول پاک شد</span></div>';
}

function runCode() {
  if (!currentCode.trim()) {
    addLine(["کدی برای اجرا نیست!"], "warn");
    return;
  }
  clearCon();
  try {
    const fn = new Function(currentCode);
    fn();
  } catch (e) {
    addLine([e.toString()], "error");
  }
}

function handleInput(e) {
  if (e.key !== "Enter") return;
  const inp = document.getElementById("con-input");
  const code = inp.value.trim();
  if (!code) return;
  addLine(["> " + code], "info");
  try {
    const r = eval(code);
    if (r !== undefined) addLine([r], "log");
  } catch (err) {
    addLine([err.toString()], "error");
  }
  inp.value = "";
}

function toggleConsole() {
  isConsoleOpen = !isConsoleOpen;
  consolePanel.classList.toggle("closed", !isConsoleOpen);
  document.getElementById("toggle-console-btn").textContent = isConsoleOpen
    ? "◀"
    : "▶";
}

function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
  sidebar.classList.toggle("closed", !isSidebarOpen);
  document
    .getElementById("sidebar-toggle")
    .classList.toggle("closed", !isSidebarOpen);
  document.getElementById("sidebar-toggle").textContent = isSidebarOpen
    ? "➤ بستن"
    : "➤ باز";
}

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("light", !isDark);
  document.getElementById("theme-btn").textContent = isDark
    ? "🌙 دارک"
    : "☀️ لایت";
}

function buildSidebar() {
  const list = document.getElementById("topic-list");
  const cats = {};
  topics.forEach((t) => {
    if (!cats[t.cat]) cats[t.cat] = [];
    cats[t.cat].push(t);
  });
  Object.entries(cats).forEach(([cat, items]) => {
    const ct = document.createElement("div");
    ct.className = "cat-title";
    ct.textContent = cat;
    list.appendChild(ct);
    items.forEach((item) => {
      const el = document.createElement("div");
      el.className = "topic-item";
      el.dataset.id = item.id;
      el.innerHTML = `<span>${item.icon}</span><span>${item.title}</span><span class="topic-badge">${item.badge}</span>`;
      el.onclick = () => loadTopic(item);
      list.appendChild(el);
    });
  });
}

function loadTopic(item) {
  currentCode = item.code || "";
  document.querySelectorAll(".topic-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === item.id);
  });
  document.getElementById("content-title").textContent =
    item.icon + " " + item.title;
  document.getElementById("content-sub").textContent =
    item.badge + " — " + item.cat;
  lesson.innerHTML = item.content + buildCode(item.code, item.title);
  lesson.scrollTop = 0;
  clearCon();
  lesson.querySelectorAll(".code-run").forEach((btn) => {
    btn.onclick = () => {
      currentCode = item.code;
      runCode();
    };
  });
}

function buildCode(code, title) {
  if (!code) return "";
  return `
    <div class="code-block">
      <div class="code-hdr">
        <div class="dots"><span class="d-r"></span><span class="d-y"></span><span class="d-g"></span></div>
        <span>${title}.js</span>
        <button class="code-run">▶ اجرا</button>
      </div>
      <pre>${esc(code)}</pre>
    </div>`;
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function filterTopics(q) {
  q = q.toLowerCase().trim();
  document.querySelectorAll(".topic-item").forEach((el) => {
    el.style.display =
      !q || el.textContent.toLowerCase().includes(q) ? "" : "none";
  });
  document.querySelectorAll(".cat-title").forEach((el) => {
    let next = el.nextElementSibling,
      show = false;
    while (next && next.classList.contains("topic-item")) {
      if (next.style.display !== "none") show = true;
      next = next.nextElementSibling;
    }
    el.style.display = show ? "" : "none";
  });
}

buildSidebar();

console.log(
  "%c🎯 جزوه JavaScript آماده است!",
  "font-size:16px;font-weight:bold;color:#7c6aff;",
);
console.log("📚 " + topics.length + " موضوع آماده");
console.log("💡 یه موضوع از سمت راست انتخاب کن");

setTimeout(() => {
  if (topics.length > 0) {
    loadTopic(topics[0]);
  }
}, 200);
