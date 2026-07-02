// src/components/Wordmark.jsx
// Brand mark + wordmark, shared by the landing page, navbar, and footer.

export function LogoMark({ inverted = false }) {
  return (
    <span
      className={`inline-flex w-6 h-6 items-center justify-center rounded-md text-[11px] font-bold select-none ${
        inverted ? "bg-white text-zinc-900" : "bg-zinc-900 text-white"
      }`}
    >
      {"</>"}
    </span>
  );
}

export default function Wordmark({ inverted = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark inverted={inverted} />
      <span
        className={`text-sm font-semibold tracking-tight ${
          inverted ? "text-white" : "text-zinc-900"
        }`}
      >
        fluentlycode
      </span>
    </span>
  );
}
