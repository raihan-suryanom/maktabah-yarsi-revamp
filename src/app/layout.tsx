import './globals.css';
import { lpmq, poppins } from '~/lib/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${lpmq.variable}`}>
      <body>{children}</body>
    </html>
  );
}