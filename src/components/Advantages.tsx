import { useCountUp, useInView } from "../hooks";
import { fmt } from "../data";
import Reveal from "./Reveal";
import { IconAnchor, IconBuoy, IconCompass, IconShell } from "./icons";

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 12, suffix: " лет", label: "организуем морские путешествия" },
  { value: 48, suffix: "", label: "стран в нашей маршрутной карте" },
  { value: 26400, suffix: "+", label: "туристов доверили нам отпуск" },
  { value: 98, suffix: "%", label: "возвращаются за новым маршрутом" },
];

const POINTS = [
  {
    icon: IconCompass,
    title: "Личный морской консьерж",
    text: "За вами закрепляется один эксперт по направлению — он знает, с какой стороны острова закаты ярче и в какой таверне ловят утреннего тунца. Никаких колл-центров и «ваш звонок очень важен».",
  },
  {
    icon: IconAnchor,
    title: "Отели, проверенные на себе",
    text: "Каждый отель из каталога наша команда прожила лично: спала, завтракала, плавала. Если у бассейна пахнет хлоркой сильнее, чем морем, — в подборку он не попадает.",
  },
  {
    icon: IconShell,
    title: "Честные цены без «звёздочек»",
    text: "Итоговая сумма фиксируется в договоре в день брони. Топливные сборы, портовые налоги и трансферы уже внутри — сюрпризы на месте исключены.",
  },
  {
    icon: IconBuoy,
    title: "Спасательный круг 24/7",
    text: "Чат с живым человеком в любом часовом поясе: задержали рейс, потеряли маску для снорклинга, захотелось продлить отпуск — решаем, пока вы допиваете коктейль.",
  },
];

function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, inView);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="relative pl-6">
        <span aria-hidden className="absolute left-0 top-1 h-[calc(100%-8px)] w-1 rounded-full bg-gradient-to-b from-aqua to-teal" />
        <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          {fmt(n)}
          <span className="text-aqua">{suffix}</span>
        </p>
        <p className="mt-2 max-w-[15rem] text-sm leading-snug text-foam/60">{label}</p>
      </div>
    </Reveal>
  );
}

export default function Advantages() {
  return (
    <section id="about" className="relative overflow-hidden bg-deep py-28 text-foam">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-teal/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -right-40 h-[26rem] w-[26rem] rounded-full bg-aqua/12 blur-3xl" />
      {/* faint contour lines */}
      <svg aria-hidden className="pointer-events-none absolute right-0 top-10 h-80 w-80 text-aqua/10" viewBox="0 0 200 200" fill="none">
        {[30, 55, 80, 105].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
        ))}
        <circle cx="100" cy="100" r="6" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* stats */}
        <div className="grid gap-10 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 110} />
          ))}
        </div>

        {/* heading */}
        <div className="mt-16 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-aqua">
              <span className="h-px w-10 bg-aqua" />
              Почему Лазурия
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Мы живём там, <br />
              куда вас <span className="text-sand">отправляем</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-md leading-relaxed text-foam/65 lg:justify-self-end">
              Не турагентство-посредник, а команда из 23 человек, у которой
              суммарный налёт — 4 100 часов, а на дне чемоданов всегда песок.
            </p>
          </Reveal>
        </div>

        {/* numbered rows */}
        <div className="mt-14">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div
                className={`group grid gap-6 border-t border-white/10 py-9 transition-all duration-500 hover:bg-white/[0.04] hover:px-6 sm:px-2 md:grid-cols-[80px_64px_1fr_1.6fr] md:items-start ${
                  i === POINTS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-display text-3xl font-extrabold text-white/15 transition-colors duration-500 group-hover:text-coral md:text-4xl">
                  0{i + 1}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua/12 text-aqua transition-all duration-500 group-hover:-rotate-12 group-hover:bg-aqua group-hover:text-deep">
                  <p.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl font-bold leading-snug sm:text-2xl">{p.title}</h3>
                <p className="leading-relaxed text-foam/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
