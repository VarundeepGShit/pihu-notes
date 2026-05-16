import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AudioWrapper from "@/components/AudioWrapper";
import PasswordGate from "@/components/PasswordGate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-family-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sammy Wise — Your MBBS Study Companion",
  description:
    "A polished, exam-focused study platform for MBBS 3rd year. 42 topics across 5 subjects. Built with love by Varun.",
  keywords: ["MBBS", "study notes", "medical", "Sammy Wise", "exam prep"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <PasswordGate>
          <div className="mesh-bg" aria-hidden="true" />
          <AudioWrapper>{children}</AudioWrapper>
        </PasswordGate>
      </body>
    </html>
  );
}
