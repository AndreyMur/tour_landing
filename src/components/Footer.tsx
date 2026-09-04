import { DESTINATIONS, NAV } from "../data";
import {
  IconAnchor,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconTelegram,
  IconVk,
  IconWave,
  IconYoutube,
} from "./icons";

export default function Footer() {
  return (
    <footer id="contacts" className="relative bg-deep2 text-foam">
      {/* top wave */}
      <div aria-hidden className="flex w-[200%] animate-waveslide">
        {[0, 1].map((k) => (
          <svg key={k} viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-1/2 text-deep sm:h-14">
            <path d="M0,30 C240,58 480,6 720,26 C960,46 1200,58 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua/90 text-deep">
                <IconWave className="h-6 w-6" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl font-extrabold tracking-wide">ЛАЗУРИЯ</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-aquapale">
                  морские путешествия
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foam/60">
              Туристическая фирма полного цикла: от идеи «хочу к морю» до
              солёных брызг на объективе. Работаем с 2012 года, офис — у воды.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: IconTelegram, label: "Telegram" },
                { icon: IconVk, label: "ВКонтакте" },
                { icon: IconYoutube, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 text-foam/70 transition-all duration-300 hover:-translate-y-1 hover:border-aqua hover:bg-aqua hover:text-deep"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* destinations */}
          <nav>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-aqua">Направления</h4>
            <ul className="mt-5 space-y-2.5 text-sm font-semibold text-foam/65">
              {DESTINATIONS.map((d) => (
                <li key={d.key}>
                  <a href="#destinations" className="transition-colors hover:text-coral">
                    {d.place}, {d.country}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* company */}
          <nav>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-aqua">Компания</h4>
            <ul className="mt-5 space-y-2.5 text-sm font-semibold text-foam/65">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition-colors hover:text-coral">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contacts */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-aqua">Контакты</h4>
            <ul className="mt-5 space-y-3.5 text-sm font-semibold text-foam/65">
              <li>
                <a href="tel:+78005553124" className="flex items-center gap-3 transition-colors hover:text-coral">
                  <IconPhone className="h-[1.1rem] w-[1.1rem] shrink-0 text-aqua" />
                  8 800 555-31-24
                </a>
              </li>
              <li>
                <a href="mailto:ahoy@lazuria.travel" className="flex items-center gap-3 transition-colors hover:text-coral">
                  <IconMail className="h-[1.1rem] w-[1.1rem] shrink-0 text-aqua" />
                  ahoy@lazuria.travel
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-aqua" />
                Санкт-Петербург, наб. реки Мойки, 17, «Дом у воды»
              </li>
              <li className="flex items-center gap-3">
                <IconClock className="h-[1.1rem] w-[1.1rem] shrink-0 text-aqua" />
                ежедневно 9:00–21:00 мск
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs font-semibold text-foam/40 sm:flex-row">
          <p>© 2026 «Лазурия» · Реестр туроператоров РТО 021488</p>
          <p className="flex items-center gap-1.5">
            Сделано с любовью к морю
            <IconAnchor className="h-3.5 w-3.5 text-coral" />
          </p>
        </div>
      </div>
    </footer>
  );
}
