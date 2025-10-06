import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // <-- Puthusa import panrom
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { cn } from '@/lib/utils';

// Font-a inga configure panrom
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable-ah kooda use pannalam
});

export const metadata: Metadata = {
  title: 'JV-portfolio',
  description: 'Personal portfolio for a Frontend Developer & UI/UX Designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Inga antha 'inter.className'-a serthu, font-a apply panrom
    <html lang="en" className={`${inter.className} dark`}>
      {/* <head> tag ippo thevai illa */}
      <body className={cn("font-body antialiased", "content-blur")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
