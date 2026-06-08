import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Bharat Foundation — Nurturing India's Green Heritage",
  description:
    "Green Bharat Foundation protects forests, empowers communities, and restores ecosystems across India. Join us to plant trees, support conservation, and build a sustainable future for Bharat.",
  keywords: [
    "Green Bharat",
    "tree planting India",
    "reforestation",
    "conservation NGO",
    "environment India",
    "plant a tree",
    "sustainable India",
  ],
  openGraph: {
    title: "Green Bharat Foundation — Nurturing India's Green Heritage",
    description:
      "Protecting forests, empowering communities, and restoring ecosystems across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <I18nProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
