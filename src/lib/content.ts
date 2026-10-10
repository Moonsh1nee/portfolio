export interface SkillItem {
  name: string;
  level: string;
  progress: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accentClass: string;
  iconWrapperClass: string;
  gradientClass: string;
  hoverBorderClass: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "⚛️",
    accentClass: "text-blue-400",
    iconWrapperClass: "bg-blue-500/10 text-blue-500",
    gradientClass: "from-blue-500 to-indigo-500",
    hoverBorderClass: "hover:border-blue-500/30",
    items: [
      { name: "Next.js", level: "Expert", progress: 95 },
      { name: "TypeScript", level: "Expert", progress: 95 },
      { name: "React", level: "Expert", progress: 90 },
      { name: "Tailwind CSS", level: "Expert", progress: 90 },
      { name: "Redux Toolkit", level: "Advanced", progress: 85 },
      { name: "Zustand", level: "Advanced", progress: 80 },
      { name: "React Hook Form", level: "Advanced", progress: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "🛠️",
    accentClass: "text-emerald-400",
    iconWrapperClass: "bg-emerald-500/10 text-emerald-500",
    gradientClass: "from-emerald-500 to-teal-500",
    hoverBorderClass: "hover:border-emerald-500/30",
    items: [
      { name: "FastAPI", level: "Basic", progress: 45 },
      { name: "NestJS", level: "Intermediate", progress: 60 },
      { name: "Node.js", level: "Advanced", progress: 85 },
      { name: "Express", level: "Intermediate", progress: 75 },
      { name: "Prisma ORM", level: "Advanced", progress: 90 },
      { name: "SQLModel", level: "Intermediate", progress: 75 },
      { name: "REST API", level: "Expert", progress: 90 },
    ],
  },
  {
    title: "Инфраструктура и БД",
    icon: "🗄️",
    accentClass: "text-amber-400",
    iconWrapperClass: "bg-amber-500/10 text-amber-500",
    gradientClass: "from-amber-500 to-orange-500",
    hoverBorderClass: "hover:border-amber-500/30",
    items: [
      { name: "PostgreSQL", level: "Advanced", progress: 85 },
      { name: "Docker", level: "Advanced", progress: 80 },
      { name: "Nginx", level: "Advanced", progress: 80 },
      { name: "Linux-серверы", level: "Advanced", progress: 80 },
      { name: "systemd", level: "Advanced", progress: 80 },
      { name: "Redis", level: "Intermediate", progress: 70 },
      { name: "SQLite", level: "Advanced", progress: 85 },
    ],
  },
  {
    title: "Прочее",
    icon: "✦",
    accentClass: "text-violet-400",
    iconWrapperClass: "bg-violet-500/10 text-violet-500",
    gradientClass: "from-violet-500 to-purple-500",
    hoverBorderClass: "hover:border-violet-500/30",
    items: [
      { name: "JWT / OAuth2", level: "Advanced", progress: 85 },
      { name: "Security hardening", level: "Advanced", progress: 80 },
      { name: "WebSocket", level: "Intermediate", progress: 70 },
      { name: "Stripe-биллинг", level: "Intermediate", progress: 65 },
      { name: "Git & GitHub", level: "Expert", progress: 95 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  emoji: string;
  imageGradientClass: string;
  screenshots?: string[];
  badge: string;
  badgeAccentClass: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  demoCredentials?: { email: string; password: string };
}

export const projects: Project[] = [
  {
    title: "GetGrip",
    description:
      "Персональный «второй мозг»: задачи, привычки, цели, дневник, календарь и аналитика в одном приложении",
    longDescription:
      "Full-stack SaaS-продукт с веб-, мобильным (Expo/React Native) клиентами и async-бэкендом на FastAPI. Кастомизируемый дашборд из виджетов, push-уведомления, геймификация (XP/ачивменты), синхронизация с Google Calendar, Stripe-биллинг с free/pro планами, собственный OAuth2-сервер авторизации — через него в GetGrip заходят Wisely и Fuel. Был задеплоен на своём VPS (nginx, systemd, security hardening) — сейчас сервер выключен, демо временно недоступно.",
    emoji: "🧠",
    imageGradientClass: "from-violet-800 to-indigo-950",
    screenshots: [
      "/projects/getgrip-1.png",
      "/projects/getgrip-2.png",
      "/projects/getgrip-3.png",
      "/projects/getgrip-4.png",
      "/projects/getgrip-5.png",
    ],
    badge: "Демо офлайн",
    badgeAccentClass: "bg-zinc-500/10 text-zinc-400",
    tags: [
      "Next.js 16",
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Stripe",
    ],
    repoUrl: "https://github.com/Moonsh1nee/habitforge-frontend",
  },
  {
    title: "Fuel",
    description: "Трекер питания и тренировок с распознаванием штрихкодов",
    longDescription:
      "Логирование еды с автоматическим пересчётом БЖУ по граммам, сканер штрихкодов (@zxing/browser) и поиск продуктов через Open Food Facts, конструктор собственных составных блюд, автоопределение личных рекордов в тренировках. Алгоритмическая генерация меню на месяц с защитой от повторов и автосборкой списка покупок.",
    emoji: "🥗",
    imageGradientClass: "from-emerald-800 to-teal-950",
    screenshots: [
      "/projects/fuel-1.png",
      "/projects/fuel-2.png",
      "/projects/fuel-3.png",
      "/projects/fuel-4.png",
      "/projects/fuel-5.png",
    ],
    badge: "Готово",
    badgeAccentClass: "bg-emerald-500/10 text-emerald-400",
    tags: ["Next.js 16", "Prisma 7", "SQLite", "TypeScript"],
    repoUrl: "https://github.com/Moonsh1nee/Fuel",
  },
  {
    title: "Wisely",
    description: "Персональный трекер финансов с мультивалютными бюджетами",
    longDescription:
      "Бюджеты и графики расходов по категориям, повторяющиеся транзакции, отдельная модель переводов между счетами (double-entry), накопительные цели с прогресс-барами. Вход через собственный аккаунт GetGrip (OAuth2).",
    emoji: "💰",
    imageGradientClass: "from-amber-800 to-orange-950",
    screenshots: [
      "/projects/wisely-1.png",
      "/projects/wisely-2.png",
      "/projects/wisely-3.png",
      "/projects/wisely-4.png",
      "/projects/wisely-5.png",
    ],
    badge: "Готово",
    badgeAccentClass: "bg-emerald-500/10 text-emerald-400",
    tags: ["Next.js 16", "Prisma 7", "SQLite", "TypeScript"],
    repoUrl: "https://github.com/Moonsh1nee/Wisely",
  },
  {
    title: "Sift",
    description: "AI-скринер вакансий для hh.ru",
    longDescription:
      "Подтягивает вакансии с hh.ru, оценивает соответствие резюме через Claude API (fit-score, совпадающие/недостающие навыки), генерирует сопроводительные письма. CRM-пайплайн статусов отклика с напоминаниями о фоллоу-апе. hh.ru закрыл публичный API — интеграция работает через HTML-парсинг (cheerio) той же разметки, что видит браузер.",
    emoji: "🎯",
    imageGradientClass: "from-blue-800 to-cyan-950",
    screenshots: [
      "/projects/sift-1.png",
      "/projects/sift-2.png",
      "/projects/sift-3.png",
      "/projects/sift-4.png",
    ],
    badge: "Готово",
    badgeAccentClass: "bg-emerald-500/10 text-emerald-400",
    tags: ["Next.js 16", "Claude API", "Prisma 7", "Cheerio"],
    repoUrl: "https://github.com/Moonsh1nee/Sift",
  },
  {
    title: "Cadence",
    description: "Трекер подписок с визуальной шкалой платежей",
    longDescription:
      "Таймлайн подписок с масштабированием по датам и разведением пересекающихся платежей по дорожкам, расчёт биллинг-циклов, полный жизненный цикл подписки (активна → пауза → отмена → возврат).",
    emoji: "📅",
    imageGradientClass: "from-fuchsia-800 to-purple-950",
    screenshots: [
      "/projects/cadence-1.png",
      "/projects/cadence-2.png",
      "/projects/cadence-3.png",
      "/projects/cadence-4.png",
      "/projects/cadence-5.png",
    ],
    badge: "В разработке",
    badgeAccentClass: "bg-violet-500/10 text-violet-400",
    tags: ["Next.js 16", "Prisma 7", "Base UI", "TypeScript"],
    repoUrl: "https://github.com/Moonsh1nee/Cadence",
  },
  {
    title: "Muiraje",
    description: "Интернет-магазин на заказ с необычным ретро-дизайном",
    longDescription:
      "Коммерческая разработка для реального заказчика — не личный проект. Дизайн-концепция полностью клиентская: витрина стилизована под рабочий стол Windows начала 2000-х — папки-категории, окна с заголовками и кнопками свернуть/закрыть, «браузер» с адресной строкой для страниц коллекций, даже пасхалка в духе BSOD на 404. Моя часть — верстка этого нестандартного интерфейса и весь full-stack: Next.js + Redux Toolkit на фронте, NestJS + Prisma + PostgreSQL с JWT-авторизацией, email-уведомлениями и приёмом заказов через Telegram-бота на бэке, админка для управления каталогом. Сайт временно не работает — у заказчика сейчас пауза в бизнесе.",
    emoji: "🖥️",
    imageGradientClass: "from-slate-700 to-blue-950",
    screenshots: [
      "/projects/muiraje-1.png",
      "/projects/muiraje-2.png",
      "/projects/muiraje-3.png",
      "/projects/muiraje-4.png",
      "/projects/muiraje-5.png",
    ],
    badge: "Клиентский проект",
    badgeAccentClass: "bg-zinc-500/10 text-zinc-400",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "JWT", "SCSS"],
  },
];

export interface ExperienceEntry {
  period: string;
  role: string;
  place: string;
  employmentType?: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "сен 2024 — мар 2025",
    role: "Full-stack разработчик",
    place: "Фриланс-проект, соло (Muiraje)",
    employmentType: "Фриланс",
    description:
      "Разработал и запустил под ключ интернет-магазин на заказ: Next.js + Redux Toolkit на фронте, NestJS + Prisma + PostgreSQL с JWT-авторизацией на бэке. Дизайн — полностью клиентская концепция, нестандартная: витрина стилизована под рабочий стол Windows начала 2000-х, пришлось верстать нетиповой, детально проработанный интерфейс, а не типовой e-commerce шаблон. Оформление заказа без встроенной оплаты — заявка уходит Telegram-ботом оператору, который дальше ведёт клиента лично. Полный цикл на VPS: nginx, SSL, CI-подобный процесс деплоя. Единственный разработчик на проекте — от вёрстки и бэкенда до деплоя и последующей поддержки. Около полугода активной разработки.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "SCSS"],
  },
];

export const CONTACT_EMAIL = "moonsh1ne.vlad@yandex.ru";
export const CONTACT_TELEGRAM_HANDLE = "Moonsh1ne_OP";
export const CONTACT_TELEGRAM_URL = `https://t.me/${CONTACT_TELEGRAM_HANDLE}`;
export const GITHUB_URL = "https://github.com/Moonsh1nee";

export interface SocialLink {
  label: string;
  href: string;
}

export const VK_URL = "https://vk.ru/moonsh1ne_vk";
export const RESUME_URL = "/Akimov_Vladislav_Resume.docx";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "Telegram", href: CONTACT_TELEGRAM_URL },
  { label: "VK", href: VK_URL },
];
