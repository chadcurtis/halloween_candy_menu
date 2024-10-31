import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const griffy = localFont({
  src: "./fonts/Griffy-Regular.ttf",
  variable: "--font-griffy",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Halloween Candy Menu",
  description: "PICK SOMETHING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${griffy.variable} antialiased`}>{children}</body>
    </html>
  );
}
