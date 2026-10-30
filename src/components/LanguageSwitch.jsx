import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label="Language / Язык" className="inline-flex items-center rounded-full border border-zinc-200 p-0.5 text-xs font-semibold">
      {["ru", "en"].map((option) => (
        <button key={option} type="button" lang={option} aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${language === option ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"}`}>
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
