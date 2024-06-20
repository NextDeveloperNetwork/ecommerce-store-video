import Footer from "@/components/footer";

import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/cookiebanner";
import AdSense from "@/components/adSense";



const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDI STORE",
  description: "EDI STORE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-B8ZH8866VZ" />
        <head>
          <AdSense pId="ca-pub-7384567519895340" />
        </head>
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <CookieBanner />
          <Analytics />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
