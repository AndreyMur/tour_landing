import { useEffect, useState } from "react";
import { NAV } from "../data";
import { IconWave, IconX } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 160) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        light
          ? "bg-transparent py-4"
          : "bg-paper/90 py-2.5 shadow-[0_10px_40px_-18px_rgba(5,43,59,0.35)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl transition-colors duration-500 ${
              light
                ? "bg-aqua/90 text-deep"
                : "bg-deep text-aquapale"
            }`}
          >
            <IconWave className="h-5.5 w-5.5 transition-transform duration-500 group-hover:-rotate-12" />
          </span>
          <span className="leading-none">
            <span
              className={`block font-display text-lg font-extrabold tracking-wide transition-colors duration-500 ${
                light ? "text-white" : "text-ink"
              }`}
            >
              ЛАЗУРИЯ
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors duration-500 ${
                light ? "text-aquapale" : "text-teal"
              }`}
            >
              морские путешествия
            </span>
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
                light
                  ? "text-white/85 hover:bg-white/15 hover:text-white"
                  : "text-inksoft hover:bg-mist hover:text-ink"
              } ${active === n.id ? (light ? "bg-white/15 text-white" : "bg-mist text-ink") : ""}`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-3 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coraldeep hover:shadow-xl hover:shadow-coral/50 active:translate-y-0"
          >
            Подобрать тур
          </a>
        </nav>

        {/* burger */}
        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors lg:hidden ${
            light ? "text-white hover:bg-white/15" : "text-ink hover:bg-mist"
          }`}
        >
          {open ? (
            <IconX className="h-6 w-6" />
          ) : (
            <>
              <span className="h-0.5 w-6 rounded bg-current" />
              <span className="h-0.5 w-4.5 self-center rounded bg-current" style={{ width: "1.1rem" }} />
              <span className="h-0.5 w-6 rounded bg-current" />
            </>
          )}
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } fixed inset-0 top-0 -z-10 bg-deep/97 backdrop-blur-lg transition-opacity duration-400`}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-2 px-8">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={`font-display text-3xl font-bold text-foam transition-all duration-500 hover:translate-x-3 hover:text-aqua ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lg shadow-coral/40"
          >
            Подобрать тур
          </a>
        </nav>
      </div>
    </header>
  );
}
