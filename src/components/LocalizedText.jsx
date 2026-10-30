import { useLanguage } from "@/lib/LanguageContext";
import translations from "@/locales/ru/interface.json";

// Preserves the whitespace around inline text while translating its content.
export default function LocalizedText({ text }) {
  const { language } = useLanguage();
  if (language !== "ru") return text;
  const match = text.match(/^(\s*)(.*?)(\s*)$/s);
  return match ? match[1] + (translations[match[2]] || match[2]) + match[3] : text;
}
