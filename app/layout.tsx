import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Softrestart — Software & Innovation Studio",
  description: "Transforming ideas into high-performing digital products. Web, Mobile, SaaS development and technical consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-100 antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
