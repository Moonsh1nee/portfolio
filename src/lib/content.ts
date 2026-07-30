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
      "Персональный «второй мозг»: задачи, привычки, финансы, тренировки, питание, дневник и аналитика в одном приложении",
    longDescription:
      "Full-stack SaaS-продукт с веб-, мобильным (Expo/React Native) клиентами и async-бэкендом на FastAPI. 8+ модулей, кастомизируемый дашборд из 18 виджетов, real-time обновления через WebSocket, геймификация (XP/ачивменты), корреляции привычек с настроением, Stripe-биллинг с free/pro планами.",
    emoji: "🧠",
    imageGradientClass: "from-violet-800 to-indigo-950",
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
    liveUrl: "https://getgrip.ru",
    repoUrl: "https://github.com/Moonsh1nee/habitforge-frontend",
  },
  {
    title: "MoonChat",
    description: "Telegram-подобный мессенджер",
    emoji: "🚀",
    imageGradientClass: "from-zinc-800 to-zinc-900",
    badge: "2026",
    badgeAccentClass: "bg-emerald-500/10 text-emerald-400",
    tags: ["Next.js", "TypeScript", "Socket.io"],
  },
  {
    title: "Portfolio 2026",
    description: "Это портфолио, которое ты сейчас смотришь",
    emoji: "📊",
    imageGradientClass: "from-purple-800 to-violet-900",
    badge: "В разработке",
    badgeAccentClass: "bg-violet-500/10 text-violet-400",
    tags: ["Next.js 16", "Framer Motion", "Tailwind"],
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
    period: "2024 — сейчас",
    role: "Senior Frontend Developer",
    place: "Компания / Проект (или Freelance)",
    employmentType: "Full-time",
    description:
      "Разработка высоконагруженных интерфейсов на Next.js 16, сложная бизнес-логика, производительность и пользовательский опыт.",
    tags: ["Next.js 16", "TypeScript", "Framer Motion", "Prisma"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    place: "Компания / Проект",
    description:
      "Создание современных интерфейсов, работа с состоянием (Zustand, TanStack Query), оптимизация производительности и внедрение анимаций.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    period: "2022 — 2023",
    role: "Junior Frontend Developer",
    place: "Первая компания",
    description:
      "Начало пути. Изучение современных инструментов, участие в коммерческих проектах.",
    tags: [],
  },
];

export const CONTACT_EMAIL = "your@email.com";
export const CONTACT_TELEGRAM_HANDLE = "yourusername";
export const CONTACT_TELEGRAM_URL = `https://t.me/${CONTACT_TELEGRAM_HANDLE}`;

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Instagram", href: "#" },
];
