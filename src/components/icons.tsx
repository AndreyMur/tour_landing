import { CSSProperties } from "react";

type P = { className?: string; style?: CSSProperties };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconAnchor = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="5.5" r="2.6" />
    <path d="M12 8.1v12" />
    <path d="M5 12.5H3c0 5 4 7.6 9 7.6s9-2.6 9-7.6h-2" />
    <path d="M9 11h6" />
  </svg>
);

export const IconShell = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 17.5C4 10 8 4.5 12 4.5S20 10 20 17.5c0 .8-.6 1.5-1.4 1.5H5.4c-.8 0-1.4-.7-1.4-1.5Z" />
    <path d="M12 5v14" />
    <path d="M8.2 6.6 7 18.7M15.8 6.6l1.2 12.1" />
  </svg>
);

export const IconCompass = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z" />
  </svg>
);

export const IconBuoy = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3.4" />
    <path d="M6 6l3.6 3.6M18 6l-3.6 3.6M6 18l3.6-3.6M18 18l-3.6-3.6" />
  </svg>
);

export const IconPalm = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M13.5 21c-.6-5.6-.4-9.6 1.2-13" />
    <path d="M14.7 8c-2.4-2.8-5.4-3-7.7-1.6 1.8.2 4 .9 5.4 2.6" />
    <path d="M14.7 8c3-1.6 5.9-.7 7.3 1.1-1.7-.4-4-.4-5.8.4" />
    <path d="M14.7 8c.2-2.7 2-4.4 4.2-4.6-.9 1.3-1.9 2.9-2.1 4.6" />
    <path d="M4 21c4.8-1.7 11.2-1.7 16 0" />
  </svg>
);

export const IconYacht = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3v12" />
    <path d="M12 3c4.6 1.8 6.8 5.4 7 9H12" />
    <path d="M12 6.5C9.6 7.6 8.2 9.8 8 12.5h4" />
    <path d="M3.5 15.5h17l-2 3.4c-.3.6-1 1-1.6 1H7.1c-.7 0-1.3-.4-1.6-1z" />
  </svg>
);

export const IconWave = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M2.5 9c2.4-2.4 4.8-2.4 7.2 0s4.7 2.4 7.1 0c1.6-1.6 3.1-2.1 4.7-1.4" />
    <path d="M2.5 15c2.4-2.4 4.8-2.4 7.2 0s4.7 2.4 7.1 0c1.6-1.6 3.1-2.1 4.7-1.4" />
  </svg>
);

export const IconSun = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
  </svg>
);

export const IconThermo = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M10 4a2 2 0 1 1 4 0v9.2a4.5 4.5 0 1 1-4 0z" />
    <path d="M12 9v6.5" />
  </svg>
);

export const IconPlane = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21 4.5 3.6 10.8c-.9.3-.9 1.6 0 1.9l4.9 1.6 1.7 5c.3.9 1.6.9 1.9 0z" />
    <path d="M21 4.5 10.2 14.3" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-5.7-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.3 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1.5v3c0 .9-.7 1.6-1.6 1.5C10.9 19.4 4.6 13.1 4 5.6 3.9 4.7 4.6 4 5.5 4Z" />
  </svg>
);

export const IconMail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 7.5 7.5 6 7.5-6" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.4}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2}>
    <path d="M4 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const IconStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="m12 2.8 2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.6l-5.6 3.2 1.3-6.2L3 9.3l6.3-.7z" />
  </svg>
);

export const IconSpark = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2c.6 4.7 2.5 7.4 3.4 8.4 1 1 3.7 3 8.6 3.6-4.9.6-7.6 2.5-8.6 3.5-1 1-2.8 3.7-3.4 8.5-.6-4.8-2.4-7.5-3.4-8.5S6.9 14.6 2 14c4.9-.6 7.6-2.6 8.6-3.6C11.6 9.4 11.4 6.7 12 2Z" />
  </svg>
);

export const IconSend = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M20.5 3.5 3.8 9.9c-.8.3-.8 1.5.1 1.7l6.4 1.9 1.9 6.4c.2.9 1.4.9 1.7.1z" />
    <path d="M20.5 3.5 10.3 13.5" />
  </svg>
);

export const IconTelegram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21.6 4.1c.3-1.1-.8-2-1.8-1.6L2.9 9.2c-1.1.4-1 2 .1 2.3l4.3 1.3 1.6 5c.3 1 1.6 1.2 2.2.4l2.3-2.8 4.4 3.2c.9.6 2.1.1 2.3-1zM8 12.5l9.3-5.8-7.2 6.9-.3 3z" />
  </svg>
);

export const IconVk = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.7 18.5c-6.2 0-9.8-4.3-10-11.4h3.1c.1 5.2 2.4 7.4 4.2 7.9V7.1h3v4.5c1.8-.2 3.6-2.2 4.2-4.5h3c-.5 2.8-2.4 4.8-3.8 5.6 1.4.7 3.6 2.4 4.4 5.8h-3.3c-.6-2-2.2-3.6-4.5-3.8v3.8z" />
  </svg>
);

export const IconYoutube = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="6" width="18" height="12" rx="3.5" />
    <path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPlus = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconX = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconChevronL = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2}>
    <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
  </svg>
);

export const IconChevronR = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.2}>
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </svg>
);

export const IconUsers = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <path d="M15.5 5.7a3.2 3.2 0 0 1 0 5.6M17.5 14.9c1.6.8 2.7 2.4 3 4.6" />
  </svg>
);

export const IconCalendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
);

export const IconLuggage = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="7.5" width="14" height="12" rx="2.5" />
    <path d="M9 7.5V5.2A1.7 1.7 0 0 1 10.7 3.5h2.6A1.7 1.7 0 0 1 15 5.2v2.3M9.5 11v5.5M14.5 11v5.5" />
  </svg>
);
