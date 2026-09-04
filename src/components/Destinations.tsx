import { DESTINATIONS, fmt } from "../data";
import Reveal from "./Reveal";
import {
  IconArrow,
  IconPlane,
  IconSpark,
  IconSun,
  IconThermo,
} from "./icons";

const MARQUEE = [
  "Санторини",
  "Мальдивы",
  "Амальфи",
  "Бали",
  "Фьорды",
  "Барбадос",
  "Крит",
  "Сейшелы",
  "Занзибар",
  "Капри",
];

const ROT = ["-rotate-2", "rotate-[1.6deg]", "-rotate-1", "rotate-2", "-rotate-[1.8deg]", "rotate-1"];

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-foam pb-28 pt-6">
      {/* marquee band */}
      <div className="relative z-20 -mt-14 mb-20 rotate-[-1.4deg] scale-[1.03]">
        <div className="marquee-track overflow-hidden border-y-2 border-deep bg-aqua py-3.5">
          <div className="marquee-inner flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-display text-lg font-bold uppercase tracking-[0.14em] text-deep">
                  {m}
                </span>
                <IconSpark className="h-4 w-4 text-sand" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-96 h-96 w-96 rounded-full bg-aqua/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-sand/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* heading */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-10 bg-teal" />
              Куда плывём этим летом
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Шесть оттенков <br />
              <span className="text-teal">бирюзы</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-base leading-relaxed text-inksoft lg:justify-self-end">
              Каждое направление мы проверяли ногами, ластами и вилками в
              местных тавернах. Ниже — только то, куда отправили бы собственных
              родителей.
            </p>
          </Reveal>
        </div>

        {/* postcards */}
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.key} delay={(i % 3) * 130} variant="up">
              <article
                className={`group relative cursor-pointer rounded-[6px] bg-paper p-3 pb-5 postcard-shadow transition-all duration-500 hover:z-10 hover:-translate-y-2.5 hover:rotate-0 hover:shadow-[0_34px_70px_-20px_rgba(5,43,59,0.4)] ${ROT[i % ROT.length]}`}
              >
                {/* tape */}
                <span
                  aria-hidden
                  className="absolute -top-3.5 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-[-4deg] rounded-[3px] bg-sand/80 shadow-sm backdrop-blur-[1px]"
                />
                {d.tag && (
                  <span className="absolute right-6 top-6 z-10 rounded-full bg-coral px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md shadow-coral/40">
                    {d.tag}
                  </span>
                )}

                <div className="overflow-hidden rounded-[4px]">
                  <img
                    src={d.img}
                    alt={`${d.place}, ${d.country}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                </div>

                <div className="px-2 pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-ink">{d.place}</h3>
                    <p className="shrink-0 text-right text-sm font-bold text-coraldeep">
                      от {fmt(d.priceFrom)} ₽
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.2em] text-teal">
                    {d.country}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-inksoft">{d.blurb}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold text-ink">
                    <span className="flex items-center gap-1.5 rounded-full bg-foam px-2.5 py-1.5">
                      <IconSun className="h-3.5 w-3.5 text-coral" /> воздух {d.air}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-foam px-2.5 py-1.5">
                      <IconThermo className="h-3.5 w-3.5 text-aquadeep" /> вода {d.water}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-foam px-2.5 py-1.5">
                      <IconPlane className="h-3.5 w-3.5 text-teal" /> {d.flight}
                    </span>
                  </div>

                  <a
                    href="#tours"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors hover:text-coraldeep"
                  >
                    Смотреть туры
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
