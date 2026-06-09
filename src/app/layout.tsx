import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wholesale Catering Supplies UK | Trade Prices | Cater Choice",
  description:
    "The UK's #1 wholesale catering supplier. Trade prices on 10,000+ products. No minimum order. Next day delivery across the UK. Get a free quote today.",
  keywords:
    "wholesale catering supplies UK, catering supplier, trade catering supplies, restaurant supplies UK, hotel catering wholesale, bulk catering supplies",
  openGraph: {
    title: "Wholesale Catering Supplies UK | Cater Choice",
    description:
      "Trade prices on 10,000+ products. No minimum order. Next day UK delivery. Join 5,000+ businesses.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: "Cater Choice" }],
  creator: "Cater Choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
