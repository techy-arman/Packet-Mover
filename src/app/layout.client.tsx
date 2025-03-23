'use client';

import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";

// Dynamically import non-critical components
const WhatsAppChat = dynamic(() => import("../components/WhatsAppChat"), { ssr: false });
const QuotePopup = dynamic(() => import("../components/QuotePopup"), { ssr: false });
const CallButton = dynamic(() => import("../components/CallButton"), { ssr: false });
const TopInfoBar = dynamic(() => import("../components/TopInfoBar"), { ssr: false });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional packing and moving services for homes and businesses. Safe, reliable, and efficient relocation services with free quotes and 24/7 customer support." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-black text-white dark`}
      >
        <TopInfoBar />
        {children}
        <WhatsAppChat />
        <CallButton />
        <QuotePopup />
        <Script strategy="afterInteractive" id="lazyload-script">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const lazyImages = document.querySelectorAll('img[loading="lazy"]');
              if ('loading' in HTMLImageElement.prototype) {
                console.log('Browser supports native lazy loading');
              } else {
                console.log('Browser does not support native lazy loading');
                // Implement fallback lazy loading here if needed
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
} 