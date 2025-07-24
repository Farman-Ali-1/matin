// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Poppins } from 'next/font/google'
import ClientLayout from "../_components/ClientLayout";
import Sidebar from "./_components/Sidebar";
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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white font-poppins antialiased`}>
        <div className="flex flex-row w-full bg-white">
          <div className="w-1/5"><Sidebar/></div>
          <div className="w-4/5"><ClientLayout>{children}</ClientLayout></div>
        </div>
      </body>
    </html>
  );
}
