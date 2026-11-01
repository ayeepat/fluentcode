import { Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function SubscriptionPlans() {
  const { language } = useLanguage();
  const ru = language === "ru";
  const features = ru
    ? ["Безлимитная помощь ИИ", "Обучение без рекламы", "Ранний доступ к новым функциям", "Дополнительные задания для практики"]
    : ["Unlimited AI help", "Ad-free learning", "Early access to new features", "Extra practice challenges"];
  const plans = [
    {
      name: ru ? "На месяц" : "Monthly",
      price: 69,
      period: ru ? "/ месяц" : "/ month",
      detail: ru ? "Месяц с дополнительными возможностями." : "A month of extra learning features.",
    },
    {
      name: ru ? "На год" : "Yearly",
      price: 599,
      period: ru ? "/ год" : "/ year",
      detail: ru ? "На 229 ₽ дешевле, чем 12 месяцев по 69 ₽." : "Save 229 ₽ compared with 12 months at 69 ₽.",
    },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="max-w-5xl mx-auto w-full px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-2xl mb-10">
        <p className="text-sm font-semibold text-emerald-700 mb-3">FluentlyCode Pro · {ru ? "Скоро" : "Coming soon"}</p>
        <h2 id="pricing-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          {ru ? "Больше помощи. Больше практики." : "More help. More practice."}
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed mt-4">
          {ru
            ? "Готовим подписку для тех, кто хочет заниматься больше. Оба тарифа включат одинаковые возможности — выберите удобный срок."
            : "We’re preparing a subscription for learners who want more practice. Both plans will include the same features. Choose the duration that suits you."}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {plans.map((plan, index) => (
          <article key={plan.price} className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${index === 1 ? "border-emerald-700 bg-emerald-50" : "border-zinc-200 bg-white"}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
              <span className="text-xs font-medium text-zinc-600">{ru ? "Скоро" : "Coming soon"}</span>
            </div>
            <p className="text-zinc-900"><span className="text-5xl font-bold tracking-tight tabular-nums">{plan.price} ₽</span><span className="ml-2 text-sm text-zinc-600">{plan.period}</span></p>
            <p className="mt-3 mb-7 text-sm text-zinc-600">{plan.detail}</p>
            <ul className="space-y-3 mb-8 text-sm text-zinc-700">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5"><Check size={16} aria-hidden="true" className="text-emerald-700 shrink-0 mt-0.5" />{feature}</li>
              ))}
            </ul>
            <button type="button" disabled className="mt-auto w-full min-h-11 rounded-full bg-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-600 cursor-not-allowed">
              {ru ? "Скоро" : "Coming soon"}
            </button>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-zinc-600 leading-relaxed max-w-2xl">
        {ru
          ? "Подписка и перечисленные преимущества пока недоступны. Оформление и оплата откроются позже. Сейчас можно продолжать учиться бесплатно."
          : "Subscriptions and the benefits listed above are not available yet. Sign-up and payment will open later. You can keep learning for free today."}
      </p>
    </section>
  );
}
