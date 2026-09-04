export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/fee732f6-e820-40c8-b1cb-d8307c6c420e/_result.png",
  santorini: "https://image.qwenlm.ai/generated-images/3dcc1adf-3837-4293-87f3-2a1cb5e9024c/_result.png",
  maldives: "https://image.qwenlm.ai/generated-images/c8e45627-ef7c-4724-b1ca-e2490788f836/_result.png",
  amalfi: "https://image.qwenlm.ai/generated-images/dd36858a-14b3-45c9-8cf4-5de0fe67cfe7/_result.png",
  bali: "https://image.qwenlm.ai/generated-images/cdcd7eb8-79eb-4f69-a7f1-baa0ac43a7cd/_result.png",
  fjords: "https://image.qwenlm.ai/generated-images/b269314c-2cf7-4fc4-bb72-b16b278a3c60/_result.png",
  caribbean: "https://image.qwenlm.ai/generated-images/977130a8-e648-4ac6-92de-761337e42258/_result.png",
  dive: "https://image.qwenlm.ai/generated-images/c3407913-3a4c-4062-bfac-cf6793982364/_result.png",
  sunset: "https://image.qwenlm.ai/generated-images/70213a1b-2e58-4792-b596-974c81c4306e/_result.png",
};

export type DestKey =
  | "greece"
  | "maldives"
  | "italy"
  | "bali"
  | "norway"
  | "caribbean"
  | "egypt";

export interface Destination {
  key: DestKey;
  place: string;
  country: string;
  blurb: string;
  priceFrom: number;
  air: string;
  water: string;
  flight: string;
  tag?: string;
  img: string;
}

export const DESTINATIONS: Destination[] = [
  {
    key: "greece",
    place: "Санторини",
    country: "Греция",
    blurb: "Белые домики над кальдерой и закаты, ради которых летят через полмира",
    priceFrom: 89000,
    air: "+29°",
    water: "+25°",
    flight: "4 ч 10 мин",
    tag: "Хит сезона",
    img: IMG.santorini,
  },
  {
    key: "maldives",
    place: "Мальдивы",
    country: "Индийский океан",
    blurb: "Виллы над лазурной лагуной и песок, который не нагревается даже в полдень",
    priceFrom: 214000,
    air: "+31°",
    water: "+29°",
    flight: "8 ч 50 мин",
    tag: "Премиум",
    img: IMG.maldives,
  },
  {
    key: "italy",
    place: "Амальфи",
    country: "Италия",
    blurb: "Лимонные террасы, пастельные деревни и самое фотогеничное побережье Европы",
    priceFrom: 112000,
    air: "+28°",
    water: "+24°",
    flight: "4 ч 40 мин",
    img: IMG.amalfi,
  },
  {
    key: "bali",
    place: "Бали",
    country: "Индонезия",
    blurb: "Остров, где утро начинается с пальм, а заканчивается закатом на пляже",
    priceFrom: 98000,
    air: "+30°",
    water: "+27°",
    flight: "12 ч 30 мин",
    tag: "Новинка",
    img: IMG.bali,
  },
  {
    key: "norway",
    place: "Фьорды",
    country: "Норвегия",
    blurb: "Зеркальная вода, изумрудные склоны и тишина, которую слышно",
    priceFrom: 134000,
    air: "+18°",
    water: "+14°",
    flight: "3 ч 20 мин",
    img: IMG.fjords,
  },
  {
    key: "caribbean",
    place: "Барбадос",
    country: "Карибы",
    blurb: "Пудровый песок, качели прямо в море и ром с кокосом на закате",
    priceFrom: 156000,
    air: "+30°",
    water: "+28°",
    flight: "11 ч 15 мин",
    img: IMG.caribbean,
  },
];

export type TourCat = "beach" | "cruise" | "exotic" | "active";

export const CATS: { key: TourCat | "all"; label: string }[] = [
  { key: "all", label: "Все туры" },
  { key: "beach", label: "Пляжный отдых" },
  { key: "cruise", label: "Круизы" },
  { key: "exotic", label: "Экзотика" },
  { key: "active", label: "Активные" },
];

export interface Tour {
  id: number;
  title: string;
  place: string;
  dest: DestKey;
  nights: number;
  date: string;
  cat: TourCat;
  price: number;
  oldPrice?: number;
  includes: string[];
  img: string;
  badge?: string;
}

export const TOURS: Tour[] = [
  {
    id: 1,
    title: "Изумрудная лагуна",
    place: "Мальдивы, атолл Ари",
    dest: "maldives",
    nights: 7,
    date: "14–21 июня",
    cat: "beach",
    price: 189900,
    oldPrice: 214000,
    includes: ["Перелёт", "Вилла над водой", "Всё включено"],
    img: IMG.maldives,
    badge: "−12%",
  },
  {
    id: 2,
    title: "Белые паруса Эгеиды",
    place: "Греция: Санторини — Миконос — Крит",
    dest: "greece",
    nights: 5,
    date: "28 июня — 3 июля",
    cat: "cruise",
    price: 96400,
    includes: ["Парусная яхта", "Капитан и кок", "3 острова"],
    img: IMG.sunset,
    badge: "Мало мест",
  },
  {
    id: 3,
    title: "Санторини: закатная неделя",
    place: "Греция, Ия",
    dest: "greece",
    nights: 7,
    date: "5–12 июля",
    cat: "beach",
    price: 89000,
    oldPrice: 101500,
    includes: ["Отель 4★ у кальдеры", "Завтраки", "Трансфер"],
    img: IMG.santorini,
  },
  {
    id: 4,
    title: "Амальфитанские каникулы",
    place: "Италия, Позитано",
    dest: "italy",
    nights: 6,
    date: "19–25 июля",
    cat: "beach",
    price: 112000,
    includes: ["Отель с видом на море", "Моторная лодка на день", "Завтраки"],
    img: IMG.amalfi,
  },
  {
    id: 5,
    title: "Ритмы Бали",
    place: "Индонезия, Убуд — Нуса-Пенида",
    dest: "bali",
    nights: 10,
    date: "2–12 августа",
    cat: "exotic",
    price: 98000,
    oldPrice: 116000,
    includes: ["Вилла с бассейном", "Снорклинг с мантами", "Гид-русскоговорящий"],
    img: IMG.bali,
    badge: "−15%",
  },
  {
    id: 6,
    title: "Карибский калейдоскоп",
    place: "Барбадос — Сент-Люсия",
    dest: "caribbean",
    nights: 8,
    date: "9–17 августа",
    cat: "cruise",
    price: 156000,
    includes: ["Катамаран 4 каюты", "Все переходы", "Снорклинг-снаряжение"],
    img: IMG.caribbean,
  },
  {
    id: 7,
    title: "Зеркало фьордов",
    place: "Норвегия, Гейрангер",
    dest: "norway",
    nights: 6,
    date: "23–29 августа",
    cat: "active",
    price: 134000,
    includes: ["Каякинг", "Треккинг с гидом", "Фьорд-отель"],
    img: IMG.fjords,
    badge: "Новинка",
  },
  {
    id: 8,
    title: "Дайв-сафари «Коралловый пояс»",
    place: "Египет, Красное море",
    dest: "egypt",
    nights: 7,
    date: "6–13 сентября",
    cat: "active",
    price: 74500,
    oldPrice: 86000,
    includes: ["12 погружений", "Яхта-бот", "Инструктор PADI"],
    img: IMG.dive,
    badge: "−13%",
  },
];

export interface Testimonial {
  name: string;
  tour: string;
  text: string;
  stars: number;
  date: string;
  initials: string;
  hue: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Анна и Сергей",
    tour: "Санторини: закатная неделя",
    text: "Лазурия спланировала всё до мелочей: от встречи в аэропорту до столика в ресторане у самой кальдеры. Закат в Ие — теперь наша семейная традиция.",
    stars: 5,
    date: "июнь 2025",
    initials: "АС",
    hue: "#2EC4BE",
  },
  {
    name: "Дмитрий К.",
    tour: "Дайв-сафари «Коралловый пояс»",
    text: "Третий раз еду через эту команду. Бот — топ, рифы — фантастика, а когда потеряли багаж, вопрос решили за два часа. Это уровень.",
    stars: 5,
    date: "сентябрь 2025",
    initials: "ДК",
    hue: "#FF7A6B",
  },
  {
    name: "Мария В.",
    tour: "Ритмы Бали",
    text: "Боялась лететь одна так далеко. Менеджер была на связи круглосуточно, маршрут — идеальный баланс: и пляж, и вулканы, и рисовые террасы.",
    stars: 5,
    date: "август 2025",
    initials: "МВ",
    hue: "#0F7E8B",
  },
  {
    name: "Семья Орловых",
    tour: "Карибский калейдоскоп",
    text: "Катамаран с двумя детьми 6 и 9 лет казался авантюрой. Оказалось — лучшим отпуском в жизни. Дети до сих пор называют капитана «наш дядя Хосе».",
    stars: 5,
    date: "июль 2025",
    initials: "СО",
    hue: "#FFB25E",
  },
];

export const FAQS = [
  {
    q: "Как выбрать направление, если хочется всего?",
    a: "Пришлите нам три слова о мечте — например, «белый песок, тишина, кокосы». Личный консьерж за день соберёт 2–3 готовых сценария с ценами, и вы просто сравните.",
  },
  {
    q: "Что уже входит в цену тура?",
    a: "В каждом туре прозрачно расписано: перелёт, проживание, трансферы и активности из списка «включено». Никаких «уточняйте у менеджера» — итоговая цена фиксируется в договоре.",
  },
  {
    q: "Можно ли оплатить поездку частями?",
    a: "Да. Бронь — от 20%, остальное можно разбить на 3 платежа до вылета. Работаем с картами, СБП и счёт-фактурами для компаний.",
  },
  {
    q: "Что будет, если поездка сорвётся?",
    a: "На каждый тур действует страховка от невыезда, а наши менеджеры на связи 24/7: перенесём даты, обменяем билеты или вернём деньги — по ситуации, без волокиты.",
  },
  {
    q: "Помогаете ли вы с визами?",
    a: "Полностью: собираем пакет документов, записываем на подачу и сопровождаем до получения. По Мальдивам, Бали и Карибам визы не нужны — только загранпаспорт.",
  },
];

export const NAV = [
  { id: "destinations", label: "Направления" },
  { id: "tours", label: "Туры" },
  { id: "about", label: "О нас" },
  { id: "gallery", label: "Галерея" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export const fmt = (n: number) => n.toLocaleString("ru-RU");
