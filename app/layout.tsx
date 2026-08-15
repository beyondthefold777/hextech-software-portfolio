import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "../components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hextech Software - Custom Apps You Own",
  description: "From $500 PWAs to $15k native apps. I help businesses outgrow no-code tools with real software built on React, Node, and AI.",
  manifest: "/manifest.json",
  icons: {
    icon: "/rune_big_solid_blue_4k.png",
    apple: "/rune_big_solid_blue_4k.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hextech Software",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen overscroll-none`}>
        <SplashScreen />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js?v=5');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}