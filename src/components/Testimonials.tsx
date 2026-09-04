import { TESTIMONIALS } from "../data";
import Reveal from "./Reveal";
import { IconStar, IconYacht } from "./icons";

const ROT = ["rotate-[-2deg]", "rotate-[1.8deg]", "rotate-[-1.2deg]", "rotate-[2.2deg]"];
const TAPE = ["bg-aquapale/70", "bg-sand/80", "bg-coral/50", "bg-mist"];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-mist/50 py-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" />
              Солёные отзывы
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
              Приветы <span className="text-teal">с берега</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center gap-4 lg:justify-self-end">
              <div className="flex text-sand">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-6 w-6 text-coral" />
                ))}
              </div>
              <p className="text-sm font-semibold text-inksoft">
                4.9 из 5 · 1 240 отзывов <br />
                на Яндекс Путешествиях
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 130}>
              <figure
                className={`relative flex h-full flex-col rounded-[6px] bg-paper p-6 pt-8 postcard-shadow transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_30px_60px_-20px_rgba(5,43,59,0.4)] ${ROT[i % ROT.length]} ${
                  i % 2 === 1 ? "xl:translate-y-6" : ""
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute -top-3 left-8 h-6 w-20 rotate-[3deg] rounded-[3px] shadow-sm ${TAPE[i % TAPE.length]}`}
                />
                <IconYacht className="absolute right-5 top-6 h-7 w-7 text-mist" />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => (
                    <IconStar
                      key={k}
                      className={`h-4 w-4 ${k < t.stars ? "text-sand" : "text-mist"}`}
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                  «{t.text}»
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-mist pt-5">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-bold text-white shadow-md"
                    style={{ backgroundColor: t.hue }}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{t.name}</span>
                    <span className="block text-xs font-semibold text-inksoft">
                      {t.tour} · {t.date}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
