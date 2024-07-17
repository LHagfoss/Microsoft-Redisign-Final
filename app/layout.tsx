import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import icon from "@public/microsoft-icon.png"

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Microsoft Redisign",
  description: "Made by LHagfoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon.src} sizes="any" />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}