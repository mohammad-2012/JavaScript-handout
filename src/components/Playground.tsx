"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

type PlaygroundProps = {
  initial: string;
};

type ConsoleEntry = {
  id: number;
  type: "log" | "info" | "warn" | "error";
  values: string[];
};

type Execution = {
  id: number;
  code: string;
};

function buildDocument(code: string, runId: number) {
  const safeCode = JSON.stringify(code).replace(/</g, "\\u003c");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<script>
  const runId = ${runId};

  function serialize(value) {
    if (value instanceof Error) {
      return value.stack || value.message;
    }

    if (typeof value === "undefined") {
      return "undefined";
    }

    if (typeof value === "function") {
      return value.toString();
    }

    try {
      if (typeof value === "object" && value !== null) {
        return JSON.stringify(value, null, 2);
      }

      return String(value);
    } catch {
      return "[Unserializable value]";
    }
  }

  function send(type, values = []) {
    parent.postMessage({
      __playground: true,
      runId,
      type,
      values: values.map(serialize)
    }, "*");
  }

  console.log = (...args) => send("log", args);
  console.info = (...args) => send("info", args);
  console.warn = (...args) => send("warn", args);
  console.error = (...args) => send("error", args);
  console.clear = () => send("clear");

  async function execute() {
    try {
      const source = ${safeCode};
      const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
      const run = new AsyncFunction(source);

      await run();
    } catch (error) {
      console.error(error);
    } finally {
      send("done");
    }
  }

  execute();
</script>
</body>
</html>
`;
}

const editorTheme = EditorView.theme({
  "&": {
    height: "100%",
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
    fontSize: "14px",
  },
  ".cm-scroller": {
    overflow: "auto",
    fontFamily: "'JetBrains Mono Variable', monospace",
    lineHeight: "1.8",
  },
  ".cm-content": {
    padding: "18px 0",
    caretColor: "#aeafad",
  },
  ".cm-line": {
    padding: "0 18px",
  },
  ".cm-gutters": {
    backgroundColor: "#1e1e1e",
    color: "#858585",
    border: "none",
    borderRight: "1px solid #333333",
  },
  ".cm-activeLine": {
    backgroundColor: "#ffffff08",
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#ffffff08",
    color: "#c6c6c6",
  },
  ".cm-cursor": {
    borderLeftColor: "#aeafad",
  },
  ".cm-selectionBackground": {
    backgroundColor: "#264f78 !important",
  },
  "&.cm-focused": {
    outline: "none",
  },
});

export default function Playground({ initial }: PlaygroundProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView | null>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const executionIdRef = useRef(0);
  const entryIdRef = useRef(0);

  const [code, setCode] = useState(initial);
  const [output, setOutput] = useState<ConsoleEntry[]>([]);
  const [execution, setExecution] = useState<Execution | null>(null);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize CodeMirror
  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: initial,
      extensions: [
        basicSetup,
        javascript(),
        oneDark,
        editorTheme,
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setCode(update.state.doc.toString());
          }
        }),
      ],
      parent: editorRef.current,
    });

    editorViewRef.current = view;

    return () => {
      view.destroy();
      editorViewRef.current = null;
    };
  }, []);

  // Receive execution messages
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) return;

      const data = event.data;

      if (!data?.__playground || data.runId !== execution?.id) return;

      if (data.type === "done") {
        setRunning(false);
        return;
      }

      if (data.type === "clear") {
        setOutput([]);
        return;
      }

      if (
        data.type === "log" ||
        data.type === "info" ||
        data.type === "warn" ||
        data.type === "error"
      ) {
        setOutput((previous) => [
          ...previous,
          {
            id: ++entryIdRef.current,
            type: data.type,
            values: data.values ?? [],
          },
        ]);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [execution?.id]);

  // Run code
  const handleRun = useCallback(() => {
    const id = ++executionIdRef.current;

    setOutput([]);
    setRunning(true);
    setExecution({
      id,
      code,
    });

    requestAnimationFrame(() => {
      consoleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [code]);

  // Reset editor
  const handleReset = useCallback(() => {
    editorViewRef.current?.dispatch({
      changes: {
        from: 0,
        to: editorViewRef.current.state.doc.length,
        insert: initial,
      },
    });

    setCode(initial);
    setOutput([]);
  }, [initial]);

  // Copy code
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <section className="my-10 overflow-hidden rounded-xl border border-zinc-800 bg-[#1e1e1e] shadow-xl shadow-black/10">
      {/* Editor Header */}
      <div className="flex h-11 items-center justify-between border-b border-[#333333] bg-[#252526] px-4">
        <div className="flex h-full items-center border-b-2 border-sky-500 px-2 text-xs text-zinc-200">
          example.js
        </div>

        <div className="flex items-center gap-4 text-xs">
          <button
            type="button"
            onClick={handleCopy}
            className="text-zinc-400 transition hover:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-zinc-400 transition hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div
        ref={editorRef}
        dir="ltr"
        className="min-h-[280px] max-h-[560px] overflow-hidden text-left"
      />

      {/* Editor Footer */}
      <div className="flex items-center justify-between border-t border-[#333333] bg-[#252526] px-4 py-2">
        <span className="text-[11px] text-zinc-500">JavaScript</span>

        <button
          type="button"
          onClick={handleRun}
          disabled={running}
          className="rounded-md bg-[#0e639c] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1177bb] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {running ? "Running..." : "Run"}
        </button>
      </div>

      {/* Console */}
      <div
        ref={consoleRef}
        className="scroll-mt-8 border-t border-[#333333] bg-[#181818]"
      >
        <div className="flex h-10 items-center justify-between border-b border-[#333333] px-4">
          <span className="text-xs font-semibold text-zinc-300">Console</span>

          <button
            type="button"
            onClick={() => setOutput([])}
            className="text-xs text-zinc-500 transition hover:text-white"
          >
            Clear
          </button>
        </div>

        <div className="min-h-[100px] max-h-[320px] overflow-y-auto p-4 font-mono text-xs">
          {output.length === 0 ? (
            <p className="text-zinc-600">
              {running ? "Running your code..." : "Output will appear here..."}
            </p>
          ) : (
            <div className="space-y-2">
              {output.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex gap-3 whitespace-pre-wrap break-words ${
                    entry.type === "error"
                      ? "text-red-400"
                      : entry.type === "warn"
                        ? "text-amber-400"
                        : entry.type === "info"
                          ? "text-sky-400"
                          : "text-zinc-300"
                  }`}
                >
                  <span className="select-none text-zinc-600">
                    {entry.type === "error"
                      ? "×"
                      : entry.type === "warn"
                        ? "!"
                        : "›"}
                  </span>

                  <div className="min-w-0 flex-1 space-y-1">
                    {entry.values.map((value, index) => (
                      <div key={index}>{value}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hidden execution frame */}
      {execution && (
        <iframe
          key={execution.id}
          ref={iframeRef}
          title="JavaScript execution"
          sandbox="allow-scripts"
          srcDoc={buildDocument(execution.code, execution.id)}
          className="hidden"
        />
      )}
    </section>
  );
}
