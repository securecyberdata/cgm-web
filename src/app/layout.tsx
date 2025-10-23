import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { organizationSchema, medicalBusinessSchema, faqSchema, speakableSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CGM & Diabetic Supplies Coverage | Medicare Part B & PPO Support",
  description: "Get your CGM and diabetic supplies covered by your insurance. Medicare Part B and select PPOs supported. Check coverage in 60 seconds—no obligation.",
  keywords: "CGM, continuous glucose monitor, diabetic supplies, Medicare Part B, insurance coverage, diabetes management",
  authors: [{ name: "CGM Diabetes Web" }],
  openGraph: {
    title: "CGM & Diabetic Supplies Coverage | Medicare Part B & PPO Support",
    description: "Get your CGM and diabetic supplies covered by your insurance. Medicare Part B and select PPOs supported. Check coverage in 60 seconds—no obligation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGM & Diabetic Supplies Coverage | Medicare Part B & PPO Support",
    description: "Get your CGM and diabetic supplies covered by your insurance. Medicare Part B and select PPOs supported. Check coverage in 60 seconds—no obligation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="medical-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <Script
          id="speakable-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speakableSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
