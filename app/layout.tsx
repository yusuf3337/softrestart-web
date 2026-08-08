import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

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

export const metadata: Metadata = {
  title: "Softrestart — Yazılım & İnovasyon Stüdyosu",
  description:
    "Fikirleri yüksek performanslı dijital ürünlere dönüştüren remote-first mühendislik stüdyosu. Web, Mobil, SaaS geliştirme ve teknik danışmanlık.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
