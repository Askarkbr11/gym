import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "247 Gym - The Fitness District | Build Strength. Break Limits. | Oud Metha, Dubai, UAE",
  description: "Premium transformation gym in Oud Metha, Dubai, UAE. Offering Strength Training, Fat Loss, Personal Training, CrossFit, and Group Classes. Book your free trial today!",
  keywords: "gym, fitness, Oud Metha, Dubai, UAE, strength training, personal training, CrossFit, group classes, fat loss, 247 Gym",
  authors: [{ name: "247 Gym - The Fitness District" }],
  openGraph: {
    title: "247 Gym - The Fitness District | Build Strength. Break Limits.",
    description: "Premium transformation gym in Oud Metha, Dubai, UAE",
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
              "name": "247 Gym - The Fitness District",
              "description": "Premium transformation gym in Oud Metha, Dubai, UAE",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd St - Oud Metha",
                "addressLocality": "Dubai",
                "addressCountry": "United Arab Emirates",
              },
              "telephone": "+971585240247",
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
