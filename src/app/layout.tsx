import './globals.css';
import { lpmq, poppins } from '~/lib/fonts';
import { NavigationBar } from '~/components/molecules';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maktabah YARSI | Perpustakaan Islam Digital Berbahasa Indonesia',
  description:
    'Maktabah YARSI مكتبة يرسي merupakan aplikasi perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat dan riba.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${lpmq.variable}`}>
      <body className="relative bg-light-100 antialiased dark:bg-dark-100">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
