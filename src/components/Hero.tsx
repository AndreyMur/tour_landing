import { FormEvent, useState } from "react";
import { DESTINATIONS, IMG } from "../data";
import { IconAnchor, IconArrow, IconStar, IconSun } from "./icons";

const BUBBLES = [
  { l: "6%", s: 14, d: 0, t: 16 },
  { l: "14%", s: 8, d: 3.5, t: 19 },
  { l: "26%", s: 18, d: 1.2, t: 15 },
  { l: "47%", s: 10, d: 6, t: 21 },
  { l: "63%", s: 22, d: 2.4, t: 17 },
  { l: "76%", s: 9, d: 5, t: 14 },
  { l: "88%", s: 15, d: 0.8, t: 18 },
  { l: "94%", s: 7, d: 7.5, t: 20 },
];

interface Props {
  onSearch: (dest: string) => void;
}

export default function Hero({ onSearch }: Props) {
  const [dest, setDest] = useState("");
  const [month, setMonth] = useState("");
  const [budget, setBudget] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(dest || "any");
  };

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* sea photo — ken burns breathing */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Спокойное бирюзовое море на рассвете"
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/85 via-deep/45 to-deep/10" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-deep/80 to-transparent" />
      </div>

      {/* rising bubbles */}
      <div aria-hidden className="absolute inset-0">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-40px] rounded-full border border-aquapale/50 bg-aquapale/15 animate-rise"
            style={{
              left: b.l,
              width: b.s,
              height: b.s,
              animationDelay: `${b.d}s`,
              animationDuration: `${b.t}s`,
            }}
          />
        ))}
      </div>

      {/* drifting gulls */}
      <svg
        aria-hidden
        viewBox="0 0 60 20"
        className="absolute right-[12%] top-[22%] w-16 animate-drift text-white/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <path d="M4 14c6-8 12-8 16 0 4-8 10-8 16 0" />
        <path d="M38 6c3-4 6-4 8 0 2-4 5-4 8 0" opacity="0.55" />
      </svg>

      {/* rotating badge */}
      <div className="absolute right-8 top-24 z-10 hidden h-36 w-36 lg:block xl:right-16">
        <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow text-aquapale">
          <defs>
            <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text fill="currentColor" fontSize="10.2" letterSpacing="2.6" fontWeight="700">
            <textPath href="#circ">
              МОРСКИЕ ПУТЕШЕСТВИЯ • ЛАЗУРИЯ • С 2012 ГОДА •
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center">
          <IconAnchor className="h-9 w-9 text-sand animate-floaty" />
        </span>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 pt-32 lg:px-8">
        <div className="fade-late mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-aquapale/40 bg-deep/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-aquapale backdrop-blur-sm">
          <IconSun className="h-4 w-4 text-sand" />
          Туристическая фирма · сезон 2026 открыт
        </div>

        <h1 className="max-w-4xl font-display font-extrabold leading-[1.04] text-white text-[clamp(2.4rem,7.2vw,5.6rem)]">
          <span className="mask-line">
            <span className="mask-inner" style={{ animationDelay: "0.1s" }}>
              Море ближе,
            </span>
          </span>
          <span className="mask-line">
            <span className="mask-inner" style={{ animationDelay: "0.28s" }}>
              чем <span className="text-aqua">кажется</span>
              <svg viewBox="0 0 220 14" className="ml-3 inline-block h-[0.22em] w-[2.6em] text-coral" preserveAspectRatio="none">
                <path d="M2 9c28-7 55 5 82 0s55-8 82-1 34 4 52-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </h1>

        <p className="fade-late mt-6 max-w-xl text-lg leading-relaxed text-foam/90 lg:text-xl">
          Подбираем курорты, круизы и экспедиции у воды — от лагун Мальдив до
          зеркальных фьордов. Вы мечтаете — мы привозите вас к берегу.
        </p>

        {/* search widget */}
        <form
          onSubmit={submit}
          className="fade-late mt-10 w-full max-w-4xl rounded-[1.6rem] bg-paper/95 p-3 shadow-[0_30px_80px_-24px_rgba(3,26,38,0.65)] backdrop-blur sm:p-4"
        >
          <div className="grid gap-3 md:grid-cols-[1.25fr_1fr_1fr_auto]">
            <label className="group flex items-center gap-3 rounded-2xl bg-foam px-4 py-3 transition-colors focus-within:bg-mist">
              <IconAnchor className="h-5 w-5 shrink-0 text-teal" />
              <span className="w-full">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-inksoft">Куда</span>
                <select
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-ink outline-none"
                >
                  <option value="">Любое направление</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.key} value={d.key}>
                      {d.place} · {d.country}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <label className="group flex items-center gap-3 rounded-2xl bg-foam px-4 py-3 transition-colors focus-within:bg-mist">
              <IconSun className="h-5 w-5 shrink-0 text-coral" />
              <span className="w-full">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-inksoft">Когда</span>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-ink outline-none"
                >
                  <option value="">Любой месяц</option>
                  {["Июнь 2026", "Июль 2026", "Август 2026", "Сентябрь 2026"].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </span>
            </label>

            <label className="group flex items-center gap-3 rounded-2xl bg-foam px-4 py-3 transition-colors focus-within:bg-mist">
              <IconStar className="h-5 w-5 shrink-0 text-aquadeep" />
              <span className="w-full">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-inksoft">Бюджет</span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-sm font-bold text-ink outline-none"
                >
                  <option value="">Не важно</option>
                  <option>До 100 000 ₽</option>
                  <option>100–180 000 ₽</option>
                  <option>От 180 000 ₽</option>
                </select>
              </span>
            </label>

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-coral px-7 py-4 font-display text-sm font-bold text-white shadow-lg shadow-coral/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coraldeep hover:shadow-xl hover:shadow-coral/50 active:translate-y-0"
            >
              Найти тур
              <IconArrow className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* stats strip */}
        <div className="fade-late mt-10 flex max-w-4xl flex-wrap items-center gap-x-10 gap-y-4">
          {[
            ["12", "лет у моря"],
            ["48", "стран в маршрутах"],
            ["26 400", "счастливых туристов"],
            ["4.9", "рейтинг на Яндекс"],
          ].map(([num, label], i) => (
            <div key={i} className="flex items-center gap-10">
              <div>
                <p className="font-display text-2xl font-bold text-white lg:text-3xl">{num}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-aquapale/80">{label}</p>
              </div>
              {i < 3 && <span className="hidden h-10 w-px bg-white/20 sm:block" />}
            </div>
          ))}
        </div>
      </div>

      {/* waves to next section */}
      <div aria-hidden className="relative z-10 -mb-px">
        <div className="flex w-[200%] animate-waveslide-rev">
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-16 w-1/2 text-foam sm:h-20">
              <path
                d="M0,50 C240,86 480,18 720,40 C960,62 1200,88 1440,50 L1440,90 L0,90 Z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex w-[200%] animate-waveslide opacity-60">
          {[0, 1].map((k) => (
            <svg key={k} viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-16 w-1/2 text-deep sm:h-20">
              <path
                d="M0,58 C260,20 520,92 760,66 C1000,40 1240,16 1440,58 L1440,90 L0,90 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}
