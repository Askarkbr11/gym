import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReStart Fitness Center & Gym | Build Strength. Break Limits. | Bur Dubai, UAE",
  description: "Premium transformation gym in Bur Dubai, UAE. Offering Strength Training, Fat Loss, Personal Training, CrossFit, and Group Classes. Book your free trial today!",
  keywords: "gym, fitness, Bur Dubai, UAE, strength training, personal training, CrossFit, group classes, fat loss",
  authors: [{ name: "ReStart Fitness Center & Gym" }],
  openGraph: {
    title: "ReStart Fitness Center & Gym | Build Strength. Break Limits.",
    description: "Premium transformation gym in Bur Dubai, UAE",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ReStart Fitness Center & Gym",
              "description": "Premium transformation gym in Bur Dubai, UAE",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Zarooni Building - HC Floor, Rolla Street",
                "addressLocality": "Bur Dubai",
                "addressCountry": "UAE",
              },
              "telephone": "+971-XX-XXX-XXXX",
              "priceRange": "$$",
              "openingHours": "Mo-Su 06:00-23:00",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-accent antialiased`}>
        {children}
      </body>
    </html>
  );
}
