import type { Metadata, Viewport } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/navigation/Navbar";
import { siteUrl } from "@/lib/site";
import { PERSON } from "@/lib/content";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

const title = `${PERSON.name} — ${PERSON.role}`;
const description = `${PERSON.role}, ${PERSON.level}. Next.js и TypeScript, NestJS, PostgreSQL. ${PERSON.location}, ${PERSON.workFormat}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "ru_RU",
    siteName: PERSON.name,
    url: siteUrl,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#121417" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${onest.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-inverse focus:px-4 focus:py-2 focus:text-inverse-foreground"
          >
            Перейти к содержанию
          </a>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
