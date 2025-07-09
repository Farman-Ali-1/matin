// src/app/_components/ClientLayout.tsx

"use client";

import { usePathname } from "next/navigation";
import Navbar from "../_components/Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = ["/login", "/register"].includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="p-0">{children}</main>
      {!hideNavbar && <Footer />}
    </>
  );
}
