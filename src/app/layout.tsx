import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppSidebar from "@/components/AppSidebar";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wingman Assignment",
  description: "Created with Next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logos/wingman-logo.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <body className={`${inter.variable} `}>
        <div className="flex min-h-screen w-full max-w-[2140px] mx-auto overflow-x-clip relative">
          <div className="sticky top-0 h-screen">
            <AppSidebar />
          </div>

          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
