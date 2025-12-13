import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Free Geek Portland | Digital Equity & E-Waste Recycling",
  description:
    "Free Geek sustainably reuses technology, enables digital access, and provides education to create a community that empowers people to realize their potential.",
  keywords: [
    "Free Geek",
    "Portland",
    "digital equity",
    "e-waste recycling",
    "nonprofit",
    "free computers",
    "technology access",
    "digital inclusion",
  ],
  openGraph: {
    title: "Free Geek Portland | Digital Equity & E-Waste Recycling",
    description:
      "Sustainably reusing technology and enabling digital access since 2000.",
    url: "https://freegeek.org",
    siteName: "Free Geek",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
