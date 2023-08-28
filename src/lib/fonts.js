import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const lpmq = localFont({
  src: '../../public/lpmq.woff2',
  style: 'normal',
  weight: '400',
  variable: '--font-lpmq',
  display: 'swap',
  fallback: ['Tahoma', 'sans-serif'],
});
