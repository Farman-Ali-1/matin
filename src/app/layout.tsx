// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./_components/ClientLayout";
import { Poppins } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Created with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en" className={poppins.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} hide-scrollbar  font-poppins antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
