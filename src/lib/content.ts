export const PERSON = {
  name: "Владислав Акимов",
  role: "Full-stack разработчик",
  level: "Junior+ / Middle",
  location: "Волгоград",
  workFormat: "удалёнка или гибрид",
} as const;

export const CONTACT_EMAIL = "moonsh1ne.vlad@yandex.ru";
export const CONTACT_TELEGRAM_HANDLE = "Moonsh1ne_OP";
export const CONTACT_TELEGRAM_URL = `https://t.me/${CONTACT_TELEGRAM_HANDLE}`;
export const GITHUB_HANDLE = "Moonsh1nee";
export const GITHUB_URL = `https://github.com/${GITHUB_HANDLE}`;
export const VK_URL = "https://vk.ru/moonsh1ne_vk";
export const RESUME_PDF_URL = "/Akimov_Vladislav_Resume.pdf";
export const RESUME_DOCX_URL = "/Akimov_Vladislav_Resume.docx";

export type ProjectStatus = "done" | "offline" | "in-progress" | "client";

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  done: "Готово",
  offline: "Демо офлайн",
  "in-progress": "В разработке",
  client: "Коммерческий проект",
};

export interface Screenshot {
  src: string;
  alt: string;
  note: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  statusNote?: string;
  period?: string;
  screenshots: Screenshot[];
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "getgrip",
    title: "GetGrip",
    summary:
      "Персональный «второй мозг»: задачи, привычки, цели, дневник и календарь — веб, мобильное приложение и API.",
    highlights: [
      "Три клиента на одном бэкенде: веб на Next.js, мобильное приложение на Expo/React Native и async API на FastAPI с PostgreSQL и Redis.",
      "Собственный OAuth2-сервер (Authorization Code + PKCE): через него в Wisely и Fuel входят аккаунтом GetGrip.",
      "Настраиваемый дашборд из 13 виджетов, push-уведомления, геймификация, синхронизация с Google Calendar, биллинг Stripe с планами free/pro.",
    ],
    stack: ["Next.js 16", "React Native", "FastAPI", "PostgreSQL", "Redis", "Stripe"],
    status: "offline",
    statusNote:
      "Работал в проде на собственном VPS; сервер выключен, поэтому демо сейчас недоступно.",
    screenshots: [
      {
        src: "/projects/getgrip-1.webp",
        alt: "GetGrip: дашборд с прогрессом дня и задачами",
        note: "Дашборд собирается из 13 виджетов: каждый включается, меняет ширину и порядок; раскладка хранится на бэкенде и синхронизируется между устройствами.",
      },
      {
        src: "/projects/getgrip-2.webp",
        alt: "GetGrip: список задач с фильтрами",
        note: "Задачи с подзадачами, проектами, тегами и повторениями; фильтры, drag-and-drop сортировка, обновления по WebSocket.",
      },
      {
        src: "/projects/getgrip-3.webp",
        alt: "GetGrip: трекер привычек",
        note: "Привычки со стриками и «заморозкой» пропущенного дня; корреляция привычек с настроением из дневника считается на бэкенде.",
      },
      {
        src: "/projects/getgrip-4.webp",
        alt: "GetGrip: цели с прогрессом",
        note: "Цели с историей прогресса: при достижении целевого значения статус меняется автоматически.",
      },
      {
        src: "/projects/getgrip-5.webp",
        alt: "GetGrip: календарь на неделю",
        note: "Календарь собирает задачи, привычки и записи дневника; перетаскивание события меняет его дату.",
      },
    ],
    repoUrl: "https://github.com/Moonsh1nee/habitforge-frontend",
    featured: true,
  },
  {
    slug: "muiraje",
    title: "Muiraje",
    summary:
      "Интернет-магазин для реального заказчика: нестандартная витрина в стиле рабочего стола Windows начала 2000-х.",
    highlights: [
      "Сверстал нетиповой интерфейс по концепции клиента: каталог в виде проводника, окна с заголовками, «браузер» для коллекций, страница 404 в духе BSOD.",
      "Бэкенд на NestJS, Prisma и PostgreSQL: каталог с вариантами товаров, промокоды, email-уведомления по статусам заказа.",
      "Заказы уходят оператору через Telegram-бота вместо платёжного шлюза; админка каталога закрыта JWT.",
    ],
    stack: ["Next.js", "Redux Toolkit", "NestJS", "Prisma", "PostgreSQL", "SCSS"],
    status: "client",
    statusNote:
      "Код приватный — коммерческая разработка. Сайт не работает: у заказчика пауза в бизнесе.",
    period: "сен 2024 — мар 2025",
    screenshots: [
      {
        src: "/projects/muiraje-1.webp",
        alt: "Muiraje: карточка товара с выбором размера и цвета",
        note: "Карточка товара в окне ОС: галерея, описание, наличие, размеры и цвета. Фоновая гифка, подпись и её позиция задаются для каждого варианта в админке.",
      },
      {
        src: "/projects/muiraje-2.webp",
        alt: "Muiraje: каталог в виде проводника с папками категорий",
        note: "Каталог как проводник: категории — папки, товары — файлы, внизу панель задач в духе Windows.",
      },
      {
        src: "/projects/muiraje-3.webp",
        alt: "Muiraje: главная страница — рабочий стол",
        note: "Главная — «рабочий стол» с коллекциями и разделами; вся вёрстка на SCSS-модулях.",
      },
      {
        src: "/projects/muiraje-4.webp",
        alt: "Muiraje: коллекция Night in the Desert в окне ретро-браузера",
        note: "Отдельная коллекция Night in the Desert со своей структурой каталога — в окне ретро-браузера.",
      },
      {
        src: "/projects/muiraje-5.webp",
        alt: "Muiraje: корзина с товаром",
        note: "Корзина: промокод, итог и порог бесплатной доставки; оформленный заказ уходит оператору через Telegram-бота.",
      },
    ],
    featured: true,
  },
  {
    slug: "sift",
    title: "Sift",
    summary:
      "AI-скринер вакансий hh.ru: оценивает соответствие резюме, пишет сопроводительные письма, ведёт трекер откликов.",
    highlights: [
      "Claude API со structured output по Zod-схеме: оценка соответствия, совпадающие и недостающие навыки — одним вызовом.",
      "hh.ru закрыл публичный API в 2026 году — переписал интеграцию на парсинг HTML (cheerio) по стабильным data-qa атрибутам.",
      "Пайплайн откликов со статусами, заметками и напоминаниями о фоллоу-апе; 41 тест на чистых функциях.",
    ],
    stack: ["Next.js 16", "TypeScript", "Claude API", "Prisma 7", "Cheerio"],
    status: "done",
    screenshots: [
      {
        src: "/projects/sift-2.webp",
        alt: "Sift: вакансия с оценкой соответствия и недостающими навыками",
        note: "Один вызов Claude API со structured output возвращает оценку, совпадающие и недостающие навыки и пояснение; рядом — статус отклика и сопроводительное письмо.",
      },
      {
        src: "/projects/sift-1.webp",
        alt: "Sift: список вакансий со статусами",
        note: "Вакансии подтягиваются парсингом HTML hh.ru; у каждой — статус отклика и оценка соответствия.",
      },
      {
        src: "/projects/sift-3.webp",
        alt: "Sift: профиль с резюме и фильтрами поиска",
        note: "Профиль: резюме и фильтры поиска, включая профобласти из открытого справочника hh.ru.",
      },
      {
        src: "/projects/sift-4.webp",
        alt: "Sift: вакансии после обновления",
        note: "Пакетная оценка новых вакансий; оценка помечается устаревшей, если резюме изменилось после скоринга.",
      },
    ],
    repoUrl: "https://github.com/Moonsh1nee/Sift",
    featured: true,
  },
  {
    slug: "fuel",
    title: "Fuel",
    summary:
      "Трекер питания и тренировок: сканер штрихкодов, генерация меню на месяц и список покупок.",
    highlights: [
      "Генератор меню — чистая функция на собственном seeded RNG (mulberry32): результат воспроизводим, тест проверяет отсутствие повторов в любом 7-дневном окне.",
      "Сканер штрихкодов через камеру (@zxing/browser) и поиск в Open Food Facts; БЖУ пересчитывается по граммам съеденного.",
      "Автоопределение личных рекордов в тренировках, графики калорий и объёма; 64 теста.",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma 7", "SQLite", "Recharts"],
    status: "done",
    screenshots: [
      {
        src: "/projects/fuel-1.webp",
        alt: "Fuel: сгенерированное меню на месяц",
        note: "Меню на месяц из своих рецептов: детерминированный генератор без повторов в 7-дневном окне, порции подстраиваются под цель по калориям.",
      },
      {
        src: "/projects/fuel-3.webp",
        alt: "Fuel: дашборд с калориями за 14 дней",
        note: "Калории за 14 дней и прогресс к целям плана питания.",
      },
      {
        src: "/projects/fuel-4.webp",
        alt: "Fuel: дневник питания",
        note: "Дневник питания: БЖУ пересчитывается по граммам съеденного; продукт ищется по названию или штрихкоду.",
      },
      {
        src: "/projects/fuel-2.webp",
        alt: "Fuel: журнал тренировок",
        note: "Журнал тренировок: подходы, повторы и вес; личные рекорды определяются автоматически.",
      },
      {
        src: "/projects/fuel-5.webp",
        alt: "Fuel: редактор рецепта",
        note: "Редактор рецепта: ингредиенты с граммовкой, БЖУ на порцию фиксируется при сохранении.",
      },
    ],
    repoUrl: "https://github.com/Moonsh1nee/Fuel",
    featured: true,
  },
  {
    slug: "wisely",
    title: "Wisely",
    summary:
      "Финансовый трекер: мультивалютные счета, бюджеты, повторяющиеся транзакции, переводы по double-entry и импорт CSV-выписок.",
    highlights: [],
    stack: ["Next.js 16", "Prisma 7", "SQLite", "Auth.js"],
    status: "done",
    screenshots: [
      {
        src: "/projects/wisely-1.webp",
        alt: "Wisely: дашборд с расходами по категориям",
        note: "Расходы по категориям и динамика баланса по месяцам; хвост мелких категорий сворачивается в «Остальное».",
      },
      {
        src: "/projects/wisely-2.webp",
        alt: "Wisely: счета и накопительные цели",
        note: "Счета в разных валютах и накопительные цели с прогрессом.",
      },
      {
        src: "/projects/wisely-4.webp",
        alt: "Wisely: лента транзакций",
        note: "Лента транзакций по датам; повторяющиеся платежи генерируются при открытии страницы, без крон-задач.",
      },
      {
        src: "/projects/wisely-3.webp",
        alt: "Wisely: бюджеты",
        note: "Бюджеты по категориям на период.",
      },
      {
        src: "/projects/wisely-5.webp",
        alt: "Wisely: настройки и категории",
        note: "Настройки: валюта по умолчанию и категории.",
      },
    ],
    repoUrl: "https://github.com/Moonsh1nee/Wisely",
    featured: false,
  },
  {
    slug: "cadence",
    title: "Cadence",
    summary:
      "Трекер подписок с таймлайном платежей и биллинг-циклами без дрейфа даты: 31 января → 28 февраля → 31 марта.",
    highlights: [],
    stack: ["Next.js 16", "Prisma 7", "Base UI", "TypeScript"],
    status: "in-progress",
    screenshots: [
      {
        src: "/projects/cadence-3.webp",
        alt: "Cadence: таймлайн подписок за год",
        note: "Таймлайн за год: пересекающиеся платежи раскладываются по дорожкам, а не накладываются.",
      },
      {
        src: "/projects/cadence-1.webp",
        alt: "Cadence: таймлайн за месяц и сумма в месяц",
        note: "Месячный вид и итог в месяц по активным подпискам.",
      },
      {
        src: "/projects/cadence-2.webp",
        alt: "Cadence: форма новой подписки",
        note: "Новая подписка: периодичность, категория, цвет, ссылка на отмену.",
      },
      {
        src: "/projects/cadence-4.webp",
        alt: "Cadence: отменённые подписки",
        note: "Отменённые подписки свёрнуты в отдельный список.",
      },
      {
        src: "/projects/cadence-5.webp",
        alt: "Cadence: редактирование подписки",
        note: "Редактирование: пауза, отмена и возобновление.",
      },
    ],
    repoUrl: "https://github.com/Moonsh1nee/Cadence",
    featured: false,
  },
];

export interface ExperienceEntry {
  period: string;
  role: string;
  place: string;
  description: string;
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    period: "апр 2025 — сейчас",
    role: "Full-stack разработчик",
    place: "Собственные продукты",
    description:
      "Спроектировал и разработал GetGrip, Sift, Fuel, Wisely и Cadence — от архитектуры и схемы БД до интерфейса, тестов и деплоя. Выделил финансы и питание из GetGrip в отдельные продукты с миграцией данных и связал их общим входом через OAuth2.",
    stack: ["Next.js", "TypeScript", "FastAPI", "React Native", "PostgreSQL"],
  },
  {
    period: "сен 2024 — мар 2025",
    role: "Full-stack разработчик",
    place: "Muiraje · проектная работа, соло",
    description:
      "Разработал и запустил интернет-магазин для заказчика: нестандартная витрина на Next.js и Redux Toolkit, API на NestJS, Prisma и PostgreSQL, заказы через Telegram-бота, развёртывание на VPS с nginx и SSL. Единственный разработчик на проекте — от вёрстки до поддержки.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "SCSS"],
  },
];

export const education = {
  place: "Волгоградский государственный университет",
  program: "Информационная безопасность автоматизированных систем",
  period: "2023 — 2027",
  note: "Практика в секторе защиты информации Волгоградского отделения Банка России.",
};

export const languages = "Английский — B2";

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Основной стек",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["Redux Toolkit", "Zustand", "React Hook Form", "Framer Motion", "React Native (Expo)"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Express", "REST", "WebSocket", "JWT / OAuth2", "FastAPI — базово", "SQLModel"],
  },
  {
    title: "Инфраструктура",
    items: ["Docker", "Nginx", "Linux", "systemd", "Redis", "SQLite", "GitHub Actions", "ufw, fail2ban, TLS"],
  },
];

export const navLinks = [
  { label: "Проекты", href: "#projects" },
  { label: "Опыт", href: "#experience" },
  { label: "Навыки", href: "#skills" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];
