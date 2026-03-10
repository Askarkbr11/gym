import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness Avenue | Build Strength. Break Limits. | Barsha Heights, Dubai, UAE",
  description: "Premium transformation gym in Barsha Heights, Dubai, UAE. Offering Strength Training, Fat Loss, Personal Training, CrossFit, and Group Classes. Book your free trial today!",
  keywords: "gym, fitness, Barsha Heights, Dubai, UAE, strength training, personal training, CrossFit, group classes, fat loss, Fitness Avenue",
  authors: [{ name: "Fitness Avenue" }],
  openGraph: {
    title: "Fitness Avenue | Build Strength. Break Limits.",
    description: "Premium transformation gym in Barsha Heights, Dubai, UAE",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};
console.log(metadata);
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
              "name": "Fitness Avenue",
              "description": "Premium transformation gym in Barsha Heights, Dubai, UAE",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor Warsan Tower 10, Al Rabee'a 2 Barsha Heights",
                "addressLocality": "Barsha Heights, Dubai",
                "addressCountry": "United Arab Emirates",
              },
              "telephone": "+97142384427",
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
