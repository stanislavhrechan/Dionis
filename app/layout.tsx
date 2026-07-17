import type { Metadata } from "next";
import { Geist,  Instrument_Serif, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header"
import SmoothScroll from "./components/SmothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});



export const metadata: Metadata = {
  title: "Dionis | Digitálny marketing na Slovensku",
  description:
    "Digitálny marketing ktorý podporuje rast vášho podnikania. Pomáhame firmám zvyšovať viditeľnosť, získavať nových zákazníkov a budovať silnú značku pomocou efektívnych marketingových stratégií.",

  keywords: [
    "digitálny marketing",
    "marketing Slovensko",
    "tvorba web stránok",
    "web development",
    "frontend",
    "Dionis",
  ],

  openGraph: {
    title: "Dionis | Digitálny marketing na Slovensku",
    description:
      "Digitálny marketing ktorý podporuje rast vášho podnikania. Pomáhame firmám zvyšovať viditeľnosť, získavať nových zákazníkov a budovať silnú značku pomocou efektívnych marketingových stratégií.",

    url: "https://dionis.sk",
    type: "website",
    locale: "sk_SK",
    siteName: "Dionis",

    images: [
      {
        url: "https://dionis.sk/image/bg_cta.png",
        width: 1200,
        height: 630,
        alt: "Dionis digitálny marketing",
      },
    ],
  },

  viewport: "width=device-width, initial-scale=1",

  themeColor: "#002F4D",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${dmMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
