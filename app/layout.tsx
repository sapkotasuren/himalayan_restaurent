import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import WhatsappChat from "@/components/WhatsappChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Himalayan Restaurent Indian & Nepali Cuisine + Bar | Authentic Food in Belgium",
  description:
    "Experience authentic Indian, Western and Nepali cuisine at Himalayan Restaurant in belgium. Enjoy our diverse menu featuring traditional dishes, cocktails, and a warm atmosphere.",
  keywords: [
    "Indian restaurant Belgium",
    "Nepali cuisine",
    "Himalayan restaurant",
    "Indian food Belgium",
    "Nepali food Belgium",
    "best curry Belgium",
  ],
  authors: [{ name: " Himalayan Restaurant" }],
  creator: "Himalayan Restaurant",
  publisher: "Himalayan Restaurant",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_HK",
    url: "https://www.rajdoot.com.hk",
    title: "Himalayan Indian & Nepali Cuisine + Bar | Belgium",
    description:
      "Authentic Indian and Nepali cuisine in the heart of Belgium. Visit Rajdoot for a culinary journey through traditional flavors and dishes.",
    siteName: "Himalayan Restaurant",
    images: [
      {
        url: "/himalayan_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Himalayan logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.rajdoot.com.hk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappChat />
        <Footer />

        {/* Restaurant Schema Markup for SEO */}
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Rajdoot Indian & Nepali Cuisine + Bar",
              image: "https://www.rajdoot.com.hk/rajdootlogo.png",
              url: "https://www.rajdoot.com.hk",
              telephone: "+85228030095",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Oudburg 9000 Gent, Belgium",
                addressLocality: "belgium",
                postalCode: "",
                addressCountry: "HK",







              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.2799, // Replace with actual coordinates
                longitude: 114.1722, // Replace with actual coordinates
              },
              servesCuisine: ["Indian", "Nepali"],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "22:00",
                },
              ],
              acceptsReservations: "True",
            }),
          }}
        />
      </body>
    </html>
  );
}
