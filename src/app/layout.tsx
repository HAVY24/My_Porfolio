import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ha-hoang-vy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ha Hoang Vy — Fullstack Developer",
    template: "%s | Ha Hoang Vy",
  },
  description:
    "Personal website and portfolio of Ha Hoang Vy, a Fullstack Developer focused on React, Next.js, Node.js, TypeScript and AI-powered applications.",
  keywords: [
    "Ha Hoang Vy",
    "Hà Hoàng Vỹ",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "AI Engineering",
    "RAG",
    "Vietnam",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Ha Hoang Vy" }],
  creator: "Ha Hoang Vy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ha Hoang Vy — Fullstack Developer",
    description:
      "Personal website and portfolio of Ha Hoang Vy, a Fullstack Developer focused on React, Next.js, Node.js, TypeScript and AI-powered applications.",
    siteName: "Ha Hoang Vy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ha Hoang Vy — Fullstack Developer",
    description:
      "Personal website and portfolio of Ha Hoang Vy, a Fullstack Developer focused on React, Next.js, Node.js, TypeScript and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
