import { useMemo, useState } from "react";
import { CATS, DESTINATIONS, TOURS, Tour, fmt } from "../data";
import Reveal from "./Reveal";
import {
  IconArrow,
  IconBuoy,
  IconCalendar,
  IconCheck,
  IconClock,
  IconLuggage,
  IconPin,
  IconX,
} from "./icons";

interface Props {
  searchDest: string;
  onClearSearch: () => void;
  onBook: (tour: Tour) => void;
}

export default function Tours({ searchDest, onClearSearch, onBook }: Props) {
  const [cat, setCat] = useState<string>("all");

  const counts = useMemo(() => {
    const m: Record<string, number> = { all: TOURS.length };
    for (const t of TOURS) m[t.cat] = (m[t.cat] || 0) + 1;
    return m;
  }, []);

  const list = useMemo(
    () =>
      TOURS.filter(
        (t) =>
          (cat === "all" || t.cat === cat) &&
          (!searchDest || searchDest === "any" || t.dest === searchDest)
      ),
    [cat, searchDest]
  );

  const destLabel =
    searchDest && searchDest !== "any"
      ? DESTINATIONS.find((d) => d.key === searchDest)?.place
      : null;

  return (
    <section id="tours" className="relative bg-mist/60 py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-teal/15" />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-aqua/12 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10 xl:gap-16">
          {/* sticky column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="left">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-teal">
                <span className="h-px w-10 bg-teal" />
                Горячее предложение недели
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
                Туры, которые <span className="text-coral">разбирают</span> первыми
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-inksoft">
                Цены обновляются каждое утро в 9:00 по Москве. Если видите
                значок скидки — он настоящий: сравниваем с тарифами прошлой
                недели, а не «рисует» маркетинг.
              </p>
            </Reveal>

            {/* category tabs */}
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {CATS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setCat(c.key)}
                    className={`rounded-full border-2 px-4.5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      cat === c.key
                        ? "border-deep bg-deep text-foam shadow-lg shadow-deep/25"
                        : "border-ink/15 bg-paper text-inksoft hover:-translate-y-0.5 hover:border-teal hover:text-teal"
                    }`}
                    style={{ paddingInline: "1.1rem" }}
                  >
                    {c.label}
                    <span className={`ml-2 text-xs ${cat === c.key ? "text-aquapale" : "text-ink/40"}`}>
                      {counts[c.key] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* support card */}
            <Reveal delay={220}>
              <div className="mt-10 max-w-md overflow-hidden rounded-3xl bg-deep p-7 text-foam shadow-2xl shadow-deep/30">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aqua/20 text-aqua">
                    <IconBuoy className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold">Не нашли свой маршрут?</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foam/70">
                      Соберём тур под ваши даты и бюджет за один рабочий день.
                      Бесплатно и без обязательств.
                    </p>
                    <a
                      href="tel:+78005553124"
                      className="mt-4 inline-flex items-center gap-2 font-display text-base font-bold text-sand transition-colors hover:text-coral"
                    >
                      8 800 555-31-24
                      <IconArrow className="h-4 w-4" />
                    </a>
                    <p className="mt-1.5 text-xs text-foam/50">ежедневно 9:00–21:00 мск</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* tour list */}
          <div>
            {destLabel && (
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-bold text-white shadow-md shadow-teal/30">
                  По запросу: {destLabel}
                  <button
                    onClick={onClearSearch}
                    aria-label="Сбросить фильтр"
                    className="grid h-5 w-5 place-items-center rounded-full bg-white/20 transition-colors hover:bg-coral"
                  >
                    <IconX className="h-3 w-3" />
                  </button>
                </span>
              </div>
            )}

            {list.length === 0 && (
              <div className="rounded-3xl border-2 border-dashed border-teal/30 bg-paper/70 p-12 text-center">
                <IconLuggage className="mx-auto h-12 w-12 text-teal/50" />
                <p className="mt-4 font-display text-lg font-bold text-ink">
                  По этому запросу пока пусто
                </p>
                <p className="mt-2 text-inksoft">
                  Попробуйте другое направление или сбросьте фильтр.
                </p>
                <button
                  onClick={() => {
                    setCat("all");
                    onClearSearch();
                  }}
                  className="mt-6 rounded-full bg-deep px-6 py-3 text-sm font-bold text-foam transition-transform hover:-translate-y-0.5"
                >
                  Показать все туры
                </button>
              </div>
            )}

            <div className="space-y-7">
              {list.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <article className="group grid overflow-hidden rounded-[1.4rem] bg-paper shadow-[0_18px_50px_-22px_rgba(5,43,59,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-24px_rgba(5,43,59,0.42)] sm:grid-cols-[minmax(0,240px)_1fr]">
                    <div className="relative overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.title}
                        loading="lazy"
                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-108 sm:h-full"
                        style={{ transitionTimingFunction: "cubic-bezier(.2,.65,.25,1)" }}
                      />
                      {t.badge && (
                        <span
                          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md ${
                            t.badge.startsWith("−") ? "bg-coral shadow-coral/40" : "bg-aquadeep shadow-aquadeep/40"
                          }`}
                        >
                          {t.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col p-6 sm:p-7">
                      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-teal">
                        <IconPin className="h-3.5 w-3.5" />
                        {t.place}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-ink transition-colors group-hover:text-teal sm:text-2xl">
                        {t.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-semibold text-inksoft">
                        <span className="flex items-center gap-1.5">
                          <IconClock className="h-4 w-4 text-aquadeep" />
                          {t.nights} ночей
                        </span>
                        <span className="flex items-center gap-1.5">
                          <IconCalendar className="h-4 w-4 text-aquadeep" />
                          {t.date}
                        </span>
                      </div>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {t.includes.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-center gap-1.5 rounded-full bg-foam px-3 py-1.5 text-xs font-bold text-ink"
                          >
                            <IconCheck className="h-3.5 w-3.5 text-aquadeep" />
                            {inc}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-mist pt-5">
                        <div>
                          {t.oldPrice && (
                            <p className="text-sm font-semibold text-ink/40 line-through">
                              {fmt(t.oldPrice)} ₽
                            </p>
                          )}
                          <p className="font-display text-2xl font-extrabold text-ink">
                            {fmt(t.price)} <span className="text-base font-bold text-teal">₽ / чел</span>
                          </p>
                        </div>
                        <button
                          onClick={() => onBook(t)}
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-bold text-foam shadow-lg shadow-deep/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal hover:shadow-xl hover:shadow-teal/30 active:translate-y-0"
                        >
                          Выбрать тур
                          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
