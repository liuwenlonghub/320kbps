import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "320kbps — FFmpeg presets and tools for humans",
    template: "%s — 320kbps",
  },
  description:
    "Simple media tools powered by FFmpeg. Convert files in your browser or build FFmpeg commands without memorizing FFmpeg.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-8">
          <SiteHeader />

          <main className="flex-1">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}