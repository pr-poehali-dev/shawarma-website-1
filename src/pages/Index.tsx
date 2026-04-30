import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/10a87eab-13c3-41b2-a107-4e61fff8662e/files/d5f05f94-69cf-496e-9ce8-c8c6353b0bbb.jpg";
const PHONE = "+7 (999) 123-45-67";
const PHONE_HREF = "tel:+79991234567";

const menuItems = [
  {
    id: 1,
    name: "Классическая",
    description: "Куриное мясо, свежие овощи, томатный соус, лаваш",
    price: 299,
    weight: "350г",
    tag: "Хит",
    tagColor: "bg-fire-500",
    emoji: "🌯",
  },
  {
    id: 2,
    name: "Говяжья",
    description: "Сочная говядина, маринованный лук, острый соус, зелень",
    price: 369,
    weight: "380г",
    tag: "Новинка",
    tagColor: "bg-green-600",
    emoji: "🥩",
  },
  {
    id: 3,
    name: "Микс",
    description: "Курица + говядина, двойная порция сыра, фирменный соус",
    price: 399,
    weight: "420г",
    tag: "Популярное",
    tagColor: "bg-yellow-600",
    emoji: "🔥",
  },
  {
    id: 4,
    name: "Овощная",
    description: "Грилованные овощи, хумус, фета, зелёный соус, лаваш",
    price: 259,
    weight: "320г",
    tag: "",
    tagColor: "",
    emoji: "🥗",
  },
  {
    id: 5,
    name: "Острая XXL",
    description: "Курица, перец халапеньо, острый чили-соус, двойной лаваш",
    price: 449,
    weight: "500г",
    tag: "Остро",
    tagColor: "bg-red-700",
    emoji: "🌶️",
  },
  {
    id: 6,
    name: "Детская",
    description: "Нежная курица, сыр, помидоры, сметанный соус — без острого",
    price: 229,
    weight: "280г",
    tag: "",
    tagColor: "",
    emoji: "👶",
  },
];

const deliveryZones = [
  { zone: "Центр", time: "25–35 мин", price: "Бесплатно от 500₽" },
  { zone: "Север / Юг", time: "35–50 мин", price: "Бесплатно от 700₽" },
  { zone: "Пригород", time: "50–70 мин", price: "Бесплатно от 1000₽" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<"home" | "menu" | "delivery">("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (section: "home" | "menu" | "delivery") => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-charcoal-950 font-body text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navTo("home")}
            className="font-heading text-2xl font-bold tracking-widest text-fire-500 hover:text-fire-400 transition-colors"
          >
            ШАУР
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {(["home", "menu", "delivery"] as const).map((s) => (
              <button
                key={s}
                onClick={() => navTo(s)}
                className={`font-heading text-sm tracking-wider uppercase transition-colors ${
                  activeSection === s ? "text-fire-500" : "text-white/60 hover:text-white"
                }`}
              >
                {s === "home" ? "Главная" : s === "menu" ? "Меню" : "Доставка"}
              </button>
            ))}
            <button
              onClick={() => navTo("menu")}
              className="bg-fire-500 hover:bg-fire-600 text-white font-heading text-sm tracking-wider uppercase px-5 py-2.5 rounded-full transition-all hover:scale-105 animate-pulse-glow"
            >
              Заказать
            </button>
            <a
              href={PHONE_HREF}
              className="hidden lg:flex items-center gap-2 text-white/60 hover:text-white transition-colors font-heading text-sm tracking-wider"
            >
              <Icon name="Phone" size={15} className="text-fire-500" />
              {PHONE}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-charcoal-900 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {(["home", "menu", "delivery"] as const).map((s) => (
              <button
                key={s}
                onClick={() => navTo(s)}
                className={`font-heading text-base tracking-wider uppercase text-left transition-colors ${
                  activeSection === s ? "text-fire-500" : "text-white/60"
                }`}
              >
                {s === "home" ? "Главная" : s === "menu" ? "Меню" : "Доставка"}
              </button>
            ))}
            <button
              onClick={() => navTo("menu")}
              className="bg-fire-500 text-white font-heading text-sm tracking-wider uppercase px-5 py-3 rounded-full w-full"
            >
              Заказать
            </button>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white/60 font-heading text-base tracking-wider"
            >
              <Icon name="Phone" size={16} className="text-fire-500" />
              {PHONE}
            </a>
          </div>
        )}
      </nav>

      {/* ───────── HOME ───────── */}
      {activeSection === "home" && (
        <main>
          {/* HERO */}
          <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, #ff6b00 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff9f1c 0%, transparent 50%)",
              }}
            />

            <div className="relative max-w-6xl mx-auto px-4 py-24">
              <div className="max-w-2xl animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-fire-500/20 border border-fire-500/40 text-fire-400 text-xs font-heading tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-fire-500 animate-pulse" />
                  Открыто до 03:00 ночи
                </div>

                <h1 className="font-heading text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6">
                  ГОРЯЧАЯ
                  <br />
                  <span className="text-fire-500">ШАУРМА</span>
                  <br />
                  <span className="text-white/30">С ДОСТАВКОЙ</span>
                </h1>

                <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                  Готовим из свежих ингредиентов. Доставляем за 30–40 минут прямо к вашей двери.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navTo("menu")}
                    className="bg-fire-500 hover:bg-fire-600 text-white font-heading text-base tracking-wider uppercase px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-fire-500/30"
                  >
                    Открыть меню
                  </button>
                  <button
                    onClick={() => navTo("delivery")}
                    className="border border-white/20 hover:border-fire-500/60 text-white/70 hover:text-white font-heading text-base tracking-wider uppercase px-8 py-4 rounded-full transition-all"
                  >
                    Условия доставки
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="bg-charcoal-900 py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "7+", label: "Лет на рынке" },
                { value: "30к+", label: "Довольных клиентов" },
                { value: "35 мин", label: "Средняя доставка" },
                { value: "6", label: "Видов шаурмы" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-fire-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-white/40 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY US */}
          <section className="py-24 max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
              ПОЧЕМУ ВЫБИРАЮТ <span className="text-fire-500">НАС</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Flame",
                  title: "Только свежее",
                  desc: "Мясо маринуется каждое утро. Овощи — с местных рынков. Никакой заморозки.",
                },
                {
                  icon: "Clock",
                  title: "Быстрая доставка",
                  desc: "Собираем заказ за 5–10 минут. Курьер доставит горячим в течение 30–40 минут.",
                },
                {
                  icon: "Star",
                  title: "Фирменные соусы",
                  desc: "Три авторских соуса — чесночный, острый и сметанный. Рецепты не раскрываем.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-charcoal-900 border border-white/5 rounded-2xl p-8 hover:border-fire-500/30 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mb-6 group-hover:bg-fire-500/20 transition-colors">
                    <Icon name={item.icon} size={26} className="text-fire-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold tracking-wide mb-3">{item.title}</h3>
                  <p className="font-body text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-fire-600 to-fire-500 py-20">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">ПРОГОЛОДАЛИСЬ?</h2>
              <p className="font-body text-white/80 text-lg mb-10">
                Заказ оформляется по телефону или в мессенджере
              </p>
              <button
                onClick={() => navTo("menu")}
                className="bg-charcoal-950 hover:bg-charcoal-900 text-white font-heading text-base tracking-wider uppercase px-10 py-4 rounded-full transition-all hover:scale-105"
              >
                Смотреть меню
              </button>
            </div>
          </section>
        </main>
      )}

      {/* ───────── MENU ───────── */}
      {activeSection === "menu" && (
        <main className="pt-16">
          <section className="py-20 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-fire-500/10 border border-fire-500/30 text-fire-400 text-xs font-heading tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                🔥 Всё готовится на живом огне
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
                НАШ <span className="text-fire-500">ОГНЕННЫЙ</span> ВЫБОР
              </h1>
              <p className="font-body text-white/50 text-lg">Выберите шаурму по вкусу и оформите заказ</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item, i) => (
                <div
                  key={item.id}
                  className="group bg-charcoal-900 border border-white/5 rounded-2xl overflow-hidden hover:border-fire-500/40 transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-40 bg-gradient-to-br from-charcoal-800 to-charcoal-950 flex items-center justify-center overflow-hidden">
                    <span className="text-8xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                    {item.tag && (
                      <span
                        className={`absolute top-3 right-3 ${item.tagColor} text-white text-xs font-heading tracking-wider uppercase px-3 py-1 rounded-full`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold tracking-wide">{item.name}</h3>
                      <span className="font-body text-white/30 text-sm mt-1">{item.weight}</span>
                    </div>
                    <p className="font-body text-white/50 text-sm leading-relaxed mb-5">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-fire-500">{item.price}₽</span>
                      <a
                        href={PHONE_HREF}
                        className="inline-block bg-fire-500 hover:bg-fire-600 text-white font-heading text-sm tracking-wider uppercase px-5 py-2.5 rounded-full transition-all hover:scale-105"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-charcoal-900 border border-fire-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-heading text-2xl font-bold mb-3">Оформить заказ по телефону</h3>
              <p className="font-body text-white/50 mb-6">
                Наши операторы помогут с выбором и ответят на все вопросы
              </p>
              <a
                href={PHONE_HREF}
                className="inline-block bg-fire-500 hover:bg-fire-600 text-white font-heading text-base tracking-wider uppercase px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-fire-500/20"
              >
                {PHONE}
              </a>
            </div>
          </section>
        </main>
      )}

      {/* ───────── DELIVERY ───────── */}
      {activeSection === "delivery" && (
        <main className="pt-16">
          <section className="py-20 max-w-5xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-fire-500/10 border border-fire-500/30 text-fire-400 text-xs font-heading tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                🛵 Доставляем горячим
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
                ДОСТАВКА И <span className="text-fire-500">ЗАКАЗ</span>
              </h1>
              <p className="font-body text-white/50 text-lg">Всё что нужно знать перед оформлением</p>
            </div>

            {/* Delivery zones */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold tracking-wide mb-6 text-white/80 uppercase">
                Зоны доставки
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {deliveryZones.map((zone) => (
                  <div
                    key={zone.zone}
                    className="bg-charcoal-900 border border-white/5 hover:border-fire-500/30 rounded-2xl p-6 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-fire-500/10 border border-fire-500/20 flex items-center justify-center">
                        <Icon name="MapPin" size={18} className="text-fire-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold tracking-wide">{zone.zone}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-body text-white/60 text-sm">
                        <Icon name="Clock" size={14} className="text-fire-400 shrink-0" />
                        {zone.time}
                      </div>
                      <div className="flex items-center gap-2 font-body text-white/60 text-sm">
                        <Icon name="Package" size={14} className="text-fire-400 shrink-0" />
                        {zone.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order conditions */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold tracking-wide mb-6 text-white/80 uppercase">
                Условия заказа
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "ShoppingBag",
                    title: "Минимальный заказ",
                    desc: "Минимальная сумма заказа — 500₽. При заказе ниже минимума действует фиксированная доставка 150₽.",
                  },
                  {
                    icon: "CreditCard",
                    title: "Способы оплаты",
                    desc: "Наличными курьеру, картой при получении, или онлайн при оформлении через мессенджер.",
                  },
                  {
                    icon: "RefreshCw",
                    title: "Отмена заказа",
                    desc: "Заказ можно отменить бесплатно в течение 5 минут после оформления. Позже — уточняйте по телефону.",
                  },
                  {
                    icon: "ThumbsUp",
                    title: "Гарантия качества",
                    desc: "Если шаурма приедет холодной или не соответствует заказу — мы переделаем или вернём деньги.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-charcoal-900 border border-white/5 hover:border-fire-500/30 rounded-2xl p-6 transition-all flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={22} className="text-fire-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold tracking-wide mb-2">{item.title}</h3>
                      <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work hours */}
            <div className="bg-gradient-to-br from-fire-600/20 to-fire-500/5 border border-fire-500/20 rounded-2xl p-8 mb-12">
              <h2 className="font-heading text-2xl font-bold tracking-wide mb-6 uppercase flex items-center gap-3">
                <Icon name="Clock" size={24} className="text-fire-500" />
                Режим работы
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { day: "Понедельник — Пятница", time: "11:00 — 03:00" },
                  { day: "Суббота — Воскресенье", time: "10:00 — 04:00" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between bg-charcoal-950/60 rounded-xl px-6 py-4"
                  >
                    <span className="font-body text-white/60 text-sm">{row.day}</span>
                    <span className="font-heading text-fire-400 font-bold tracking-wide">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-charcoal-900 border border-white/5 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-heading text-2xl font-bold mb-3">Готовы сделать заказ?</h3>
              <p className="font-body text-white/50 mb-6">
                Позвоните или напишите — ответим в течение 2 минут
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-block bg-fire-500 hover:bg-fire-600 text-white font-heading text-base tracking-wider uppercase px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-fire-500/20"
                >
                  {PHONE}
                </a>
                <button
                  onClick={() => navTo("menu")}
                  className="border border-white/20 hover:border-fire-500/60 text-white/70 hover:text-white font-heading text-base tracking-wider uppercase px-10 py-4 rounded-full transition-all"
                >
                  К меню
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-charcoal-900 border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading text-xl font-bold text-fire-500 tracking-widest mb-1">ШАУР</div>
            <div className="font-body text-white/30 text-sm">Горячая шаурма с доставкой</div>
          </div>
          <div className="flex gap-8">
            {(["home", "menu", "delivery"] as const).map((s) => (
              <button
                key={s}
                onClick={() => navTo(s)}
                className="font-heading text-sm tracking-wider uppercase text-white/30 hover:text-fire-500 transition-colors"
              >
                {s === "home" ? "Главная" : s === "menu" ? "Меню" : "Доставка"}
              </button>
            ))}
          </div>
          <div className="font-body text-white/20 text-sm">© 2024 ШАУР</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;