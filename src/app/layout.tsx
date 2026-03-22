import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import AudioWrapper from "@/components/AudioWrapper";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-family-kalam",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-family-patrick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pihu's Notes — Sammy's Study Kit",
  description:
    "Cute, comprehensive MBBS 3rd year study notes made with love by Varun for Sammy. 42 topics across 5 subjects.",
  keywords: ["MBBS", "study notes", "medical", "Pihu", "Sammy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kalam.variable} ${patrickHand.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <AudioWrapper>{children}</AudioWrapper>
      </body>
    </html>
  );
}
