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
      { name: "Tailwind CSS", level: "Expert", progress: 95 },
      { name: "Framer Motion", level: "Advanced", progress: 85 },
    ],
  },
  {
    title: "Tools & Backend",
    icon: "🛠️",
    accentClass: "text-emerald-400",
    iconWrapperClass: "bg-emerald-500/10 text-emerald-500",
    gradientClass: "from-emerald-500 to-teal-500",
    hoverBorderClass: "hover:border-emerald-500/30",
    items: [
      { name: "Prisma", level: "Advanced", progress: 85 },
      { name: "PostgreSQL", level: "Intermediate", progress: 75 },
      { name: "Zustand", level: "Advanced", progress: 90 },
      { name: "TanStack Query", level: "Advanced", progress: 80 },
      { name: "Git & GitHub", level: "Expert", progress: 95 },
    ],
  },
  {
    title: "Другое",
    icon: "✦",
    accentClass: "text-violet-400",
    iconWrapperClass: "bg-violet-500/10 text-violet-500",
    gradientClass: "from-violet-500 to-purple-500",
    hoverBorderClass: "hover:border-violet-500/30",
    items: [
      { name: "UI/UX", level: "Advanced", progress: 80 },
      { name: "Анимации", level: "Advanced", progress: 85 },
      { name: "Performance", level: "Expert", progress: 90 },
      { name: "Figma", level: "Intermediate", progress: 70 },
      { name: "Тимворкинг", level: "Expert", progress: 95 },
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
}

export const projects: Project[] = [
  {
    title: "GetGrip",
    description:
      "Персональный «второй мозг»: задачи, привычки, цели, дневник, календарь и аналитика в одном приложении",
    longDescription:
      "Full-stack SaaS-продукт с веб-, мобильным (Expo/React Native) клиентами и async-бэкендом на FastAPI. Кастомизируемый дашборд из виджетов, push-уведомления, геймификация (XP/ачивменты), синхронизация с Google Calendar, Stripe-биллинг с free/pro планами, собственный OAuth2-сервер авторизации — через него в GetGrip заходят Wisely и Fuel. Задеплоен на своём VPS (nginx, systemd) с полноценным security hardening.",
    emoji: "🧠",
    imageGradientClass: "from-violet-800 to-indigo-950",
    screenshots: [
      "/projects/getgrip-1.png",
      "/projects/getgrip-2.png",
      "/projects/getgrip-3.png",
      "/projects/getgrip-4.png",
      "/projects/getgrip-5.png",
    ],
    badge: "Live",
    badgeAccentClass: "bg-emerald-500/10 text-emerald-400",
    tags: [
      "Next.js 16",
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Stripe",
    ],
    liveUrl: "https://demo.getgrip.ru",
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
    period: "2025",
    role: "Frontend-разработчик",
    place: "Фриланс-проект, соло",
    employmentType: "Фриланс",
    description:
      "Самостоятельно разработал и задеплоил интернет-магазин на React: каталог и оформление заказа без встроенной оплаты — данные заявки уходят Telegram-ботом оператору, который дальше ведёт клиента лично. Единственный разработчик на проекте — от вёрстки и логики до деплоя и последующей поддержки. Заняло около 3 месяцев.",
    tags: ["React", "Telegram Bot API", "Деплой"],
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

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "Telegram", href: CONTACT_TELEGRAM_URL },
];
