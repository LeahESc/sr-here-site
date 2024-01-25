import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: "Sara Rue",
  description: "Public website for actress Sara Rue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
          <NavBar />
          <div className="md:overflow-y-auto">{children}</div>
          </main>
          <Footer />        
        </div>
      </body>
    </html>
  );
}
