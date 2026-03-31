import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Admit Max — AI-Powered College Essay Coaching",
  description:
    "Built by Harvard students. Powered by 100+ real T20 interviews. Get expert feedback on your college essays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${inter.variable} ${pressStart.variable}`}>
      <body className="y2k-dots">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
