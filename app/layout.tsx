import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chhota Bheem | Cinematic Sequence',
  description: 'A cinematic scrollytelling experience of Dholakpur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <body className="font-body bg-base-dark text-white overflow-x-hidden selection:bg-accent-ember selection:text-base-dark">
        {children}
      </body>
    </html>
  );
}
