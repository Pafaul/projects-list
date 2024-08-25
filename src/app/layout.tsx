import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "The guy",
  description: "This is my personal website",
  icons: [{ rel: "icon", url: "/me.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextUIProvider>
        <body>{children}</body>
      </NextUIProvider>
    </html>
  );
}
