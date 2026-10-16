import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Providers from './providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://addiseats.et"),
  title: {
    template: "%s · Addis Eats",
    default: "Addis Eats · Food Delivery in Addis Ababa",
  },
  description: "Order fresh traditional Doro Wat, Shiro, and Kitfo from kitchens in Bole and Kazanchis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-50 min-h-screen flex flex-col font-sans antialiased">
        <Providers>
          <header className="bg-red-600 text-white p-4 shadow-md flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Addis Eats</Link>
            <nav className="space-x-4">
              <Link href="/menu" className="hover:underline">Menu</Link>
              <Link href="/cart" className="hover:underline">Cart</Link>
            </nav>
          </header>

          <main className="flex-grow container mx-auto">
            {children}
          </main>

          <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-auto">
            <p>&copy; 2026 CodeOps Software Development</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
