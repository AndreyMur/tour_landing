import { useCallback, useEffect, useState } from "react";
import { IMG } from "../data";
import Reveal from "./Reveal";
import { IconChevronL, IconChevronR, IconX } from "./icons";

const SHOTS = [
  { src: IMG.santorini, cap: "Ия, Санторини — час до заката", span: "sm:col-span-2 sm:row-span-2" },
  { src: IMG.dive, cap: "Снорклинг над коралловым садом", span: "" },
  { src: IMG.sunset, cap: "Регата к закату, Эгейское море", span: "sm:row-span-2" },
  { src: IMG.maldives, cap: "Виллы атолла Ари с высоты", span: "" },
  { src: IMG.amalfi, cap: "Позитано, лимонные террасы", span: "" },
  { src: IMG.bali, cap: "Утро на Нуса-Пенида", span: "sm:col-span-2" },
];

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(
    () => setIdx((v) => (v === null ? v : (v + SHOTS.length - 1) % SHOTS.length)),
    []
  );
  const next = useCallback(
    () => setIdx((v) => (v === null ? v : (v + 1) % SHOTS.length)),
    []
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, close, prev, next]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-foam py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" />
              Открытки с маршрутов
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
              Снято нашими <span className="text-coral">туристами</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-sm text-sm leading-relaxed text-inksoft">
              Каждую неделю пополняем альбом кадрами из ваших путешествий.
              Кликните — фото откроется крупнее.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-4">
          {SHOTS.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 100} variant="scale" className={s.span}>
              <button
                onClick={() => setIdx(i)}
                className="group relative h-full w-full overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-aqua/50"
                aria-label={`Открыть фото: ${s.cap}`}
              >
                <img
                  src={s.src}
                  alt={s.cap}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-4 bottom-4 translate-y-3 text-sm font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.cap}
                </span>
                <span className="absolute right-3 top-3 grid h-9 w-9 scale-50 place-items-center rounded-full bg-paper/90 text-teal opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {idx !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-deep/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <figure className="relative max-h-[86vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={SHOTS[idx].src}
              alt={SHOTS[idx].cap}
              className="max-h-[78vh] w-auto rounded-2xl shadow-2xl shadow-black/50"
            />
            <figcaption className="mt-4 text-center font-display text-sm font-bold text-foam">
              {SHOTS[idx].cap}
              <span className="ml-3 text-foam/50">
                {idx + 1} / {SHOTS.length}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={prev}
            aria-label="Предыдущее фото"
            className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-paper/10 text-white transition-all hover:scale-110 hover:bg-coral sm:left-8"
          >
            <IconChevronL className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Следующее фото"
            className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-paper/10 text-white transition-all hover:scale-110 hover:bg-coral sm:right-8"
          >
            <IconChevronR className="h-5 w-5" />
          </button>
          <button
            onClick={close}
            aria-label="Закрыть"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-paper/10 text-white transition-all hover:rotate-90 hover:bg-coral"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
