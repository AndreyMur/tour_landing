import { FormEvent, useEffect, useState } from "react";
import { DESTINATIONS, FAQS } from "../data";
import Reveal from "./Reveal";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconPlus,
  IconSend,
  IconYacht,
} from "./icons";

export interface Prefill {
  dest?: string;
  tour?: string;
  ts: number;
}

interface Props {
  prefill: Prefill | null;
}

export default function BookingCTA({ prefill }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dest, setDest] = useState("");
  const [month, setMonth] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; agree?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!prefill) return;
    if (prefill.dest) setDest(prefill.dest);
    if (prefill.tour) setComment(`Здравствуйте! Меня заинтересовал тур «${prefill.tour}». Расскажите подробности, пожалуйста.`);
    setStatus("idle");
  }, [prefill]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (name.trim().length < 2) errs.name = "Как к вам обращаться?";
    if (!/^[+()\d\s-]{10,18}$/.test(phone.trim())) errs.phone = "Введите корректный номер";
    if (!agree) errs.agree = "Нужно согласие на обработку данных";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 1100);
  };

  const reset = () => {
    setName("");
    setPhone("");
    setDest("");
    setMonth("");
    setComment("");
    setErrors({});
    setStatus("idle");
  };

  const inputCls =
    "w-full rounded-xl border-2 border-mist bg-foam px-4 py-3 text-sm font-semibold text-ink outline-none transition-all placeholder:font-medium placeholder:text-ink/35 focus:border-aqua focus:bg-paper";

  return (
    <section id="booking" className="relative overflow-hidden bg-deep py-28 text-foam">
      {/* ambient */}
      <div aria-hidden className="pointer-events-none absolute -left-44 top-10 h-[26rem] w-[26rem] rounded-full bg-teal/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        {[
          { l: "12%", s: 12, d: 0, t: 18 },
          { l: "38%", s: 8, d: 4, t: 22 },
          { l: "66%", s: 16, d: 2, t: 16 },
          { l: "86%", s: 10, d: 6, t: 20 },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-30px] rounded-full border border-aquapale/40 bg-aquapale/10 animate-rise"
            style={{ left: b.l, width: b.s, height: b.s, animationDelay: `${b.d}s`, animationDuration: `${b.t}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* left: pitch + FAQ */}
          <div>
            <Reveal variant="left">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-aqua">
                <span className="h-px w-10 bg-aqua" />
                Бесплатный подбор
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl">
                До моря — <br />
                <span className="text-sand">один шаг</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-foam/70">
                Оставьте заявку — консьерж перезвонит в течение 15 минут,
                задаст пять вопросов и пришлёт три готовых сценария с ценами.
                Это бесплатно и ни к чему не обязывает.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold">
                <a href="tel:+78005553124" className="flex items-center gap-2.5 text-aquapale transition-colors hover:text-coral">
                  <IconPhone className="h-5 w-5" /> 8 800 555-31-24
                </a>
                <a href="mailto:ahoy@lazuria.travel" className="flex items-center gap-2.5 text-aquapale transition-colors hover:text-coral">
                  <IconMail className="h-5 w-5" /> ahoy@lazuria.travel
                </a>
              </div>
            </Reveal>

            {/* FAQ */}
            <div className="mt-12">
              <Reveal delay={120}>
                <h3 className="font-display text-lg font-bold text-foam">Частые вопросы</h3>
              </Reveal>
              <div className="mt-5 space-y-3">
                {FAQS.map((f, i) => (
                  <Reveal key={f.q} delay={i * 80}>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition-colors hover:border-white/20">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-foam"
                        aria-expanded={openFaq === i}
                      >
                        {f.q}
                        <IconPlus
                          className={`h-5 w-5 shrink-0 text-aqua transition-transform duration-400 ${
                            openFaq === i ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                          openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-foam/65">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* right: form */}
          <Reveal variant="right" delay={150}>
            <div className="relative rounded-[1.6rem] bg-paper p-7 text-ink shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] sm:p-9">
              <span className="absolute -top-5 right-8 grid h-12 w-12 rotate-6 place-items-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/40">
                <IconYacht className="h-6 w-6" />
              </span>

              {status === "done" ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <span className="pop-check grid h-20 w-20 place-items-center rounded-full bg-aqua/15 text-aquadeep">
                    <IconCheck className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold">Заявка на борту!</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-inksoft">
                    Менеджер Анастасия перезвонит в течение 15 минут в рабочее
                    время и пришлёт варианты в WhatsApp.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-7 rounded-full border-2 border-deep px-6 py-3 text-sm font-bold text-deep transition-all hover:-translate-y-0.5 hover:bg-deep hover:text-foam"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3 className="font-display text-2xl font-extrabold">Подобрать тур</h3>
                  <p className="mt-2 text-sm font-semibold text-inksoft">
                    Заполните форму — остальное сделаем мы.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-inksoft">Ваше имя</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Мария"
                        className={`${inputCls} ${errors.name ? "border-coral bg-coral/5" : ""}`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs font-bold text-coraldeep">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-inksoft">Телефон</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (900) 000-00-00"
                        inputMode="tel"
                        className={`${inputCls} ${errors.phone ? "border-coral bg-coral/5" : ""}`}
                      />
                      {errors.phone && <p className="mt-1.5 text-xs font-bold text-coraldeep">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-inksoft">Направление</label>
                      <select value={dest} onChange={(e) => setDest(e.target.value)} className={`${inputCls} cursor-pointer`}>
                        <option value="">Пока не знаю</option>
                        {DESTINATIONS.map((d) => (
                          <option key={d.key} value={d.key}>
                            {d.place} · {d.country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-inksoft">Когда</label>
                      <select value={month} onChange={(e) => setMonth(e.target.value)} className={`${inputCls} cursor-pointer`}>
                        <option value="">Гибкие даты</option>
                        {["Июнь 2026", "Июль 2026", "Август 2026", "Сентябрь 2026"].map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-inksoft">Пожелания</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      placeholder="Например: отель у самого пляжа, без вечеринок, бюджет до 150 000 ₽"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs font-semibold text-inksoft">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-[#2EC4BE]"
                    />
                    <span>
                      Согласен на обработку персональных данных. Никакого
                      спама — только варианты туров.
                    </span>
                  </label>
                  {errors.agree && <p className="mt-1.5 text-xs font-bold text-coraldeep">{errors.agree}</p>}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-coral py-4 font-display text-base font-bold text-white shadow-xl shadow-coral/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coraldeep hover:shadow-2xl hover:shadow-coral/45 active:translate-y-0 disabled:translate-y-0 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <IconSend className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
