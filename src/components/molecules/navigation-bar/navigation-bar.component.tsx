import Link from 'next/link';

import Separator from '~/components/atoms/separator';
import ThemeToggle from '~/components/organisms/theme/theme-toggle.component';
import { cn } from '~/lib/utils/cn';

type NavigationBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 w-full border-b border-black/10 bg-light-100 px-8 py-3.5 text-dark-300 dark:border-gray-800 dark:bg-dark-100 dark:text-light-300',
        className
      )}
    >
      <nav className="flex items-center gap-5 " {...props}>
        <Link
          href="/"
          className="mr-auto flex cursor-pointer items-center"
          passHref
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="35"
            data-name="Layer 2"
            viewBox="0 0 494 624"
          >
            <g data-name="Layer 1">
              <path
                d="m367 428 28-2h5V19h-2l-19-1h-26a396 396 0 0 0-109 15c-13 3-26 7-38 12l-31 14-23 13-19 13-14 10-1 1 1-2 20-21 14-12 4-3 1-1 2-1 1-1 1-1 1-1 16-9a345 345 0 0 1 42-20l16-6a287 287 0 0 1 64-13l16-1a1418 1418 0 0 1 38-3h23l3-1h10l2 1 13-1 28 1v2a131881 131881 0 0 1 0 64v402h-5l-1-1-1 1-29 1-1-1v1l-27 1-18 1-28 3-26 3-31 5a419 419 0 0 0-75 21l-32 16-19 14-1-1 9-9 1-1 4-4h1l2-2 3-3h1l1-2h1l1-1 1-1 2-1v-1a129 129 0 0 1 4-2l1-1h1l1-1 5-4 1-1 14-9 8-5h1l29-16a290 290 0 0 1 45-19l48-14 4-1h1l14-3h2l5-1 9-2h6l1-1Z"
                fill="#0ac869"
              />
              <path
                d="m0 154 21-7 37-14 33-12h1l34 92-92 33-6-16-7-18-5-13-5-14-4-12-5-14-2-4v-1Z"
                fill="#0ac869"
              />
              <path
                d="m435 67 16 2 11 1 31 2v468h-24l-17-1h-1c-3 0-7-2-10-1l-1-1-7-1h-4l-6-1h-12l-7-1-7-1-12-1-5-1-6-1h-6l-6-1-7-1h-6l-5-1-7-1h-8l-7-1-5-1c-2 1-4 1-6-1l-1 1h-8l-19-1-9-1-15-1h-15l-21 1v-1 1h-8l-1-1v1l-21 2-28 6c-14 4-26 10-37 19l-3 2 7-10 1-1 1-1h1v-1h1l5-4 19-14 32-16a329 329 0 0 1 75-21l31-5 26-3 28-3 18-1 27-1h1l29-1h2l5-1 1-3V67Z"
                fill="#08a054"
              />
              <path
                d="m125 551 3-2c11-9 23-15 37-19l28-6 21-2h9l21-1h15l15 1 9 1 19 1h8l1-1c2 2 4 2 6 1l5 1 7 1h8l7 1 5 1h6l7 1 6 1h6l6 1 5 1 12 1 7 1 7 1h12l6 1a169 169 0 0 1 11 1l1 1c3-1 7 1 10 1v85l-24-4-24-6-27-9-19-7-24-9-27-10-29-11-21-7c-17-6-33-11-51-15l-20-4-27-1c-7 0-14 1-21 5l-13 8v-2l1-1Z"
                fill="#067c42"
              />
              <path
                d="m147 354-77 28-28-78 11-4 14-5 12-4 15-6 19-7h1c6-2 5-2 8 4l9 27 9 25 7 20Z"
                fill="#0ac869"
              />
              <path
                d="m248 193-27 10-32 11c-3 1-3 1-4-1l-8-21-6-19-8-20 17-6 43-16c2-1 3-1 4 1l10 28 10 29 1 4Z"
                fill="#0ac869"
              />
              <path d="m263 320-59 21-21-59 59-21 21 59Z" fill="#0ac869" />
              <path d="m294 272-15-40 41-15 14 40-40 15Z" fill="#0ac869" />
              <path
                d="m174 390 41-15 14 40-16 6-22 8c-2 1-2 1-3-1l-9-25-5-13Z"
                fill="#0ac869"
              />
              <path d="m332 379-25 9-9-25 25-9 9 25Z" fill="#0ac869" />
            </g>
          </svg>
          <span className="ml-2.5 font-semibold">Maktabah YARSI</span>
        </Link>
        <ul className="flex items-center gap-10 font-bold">
          <li role="navigation">
            <Link
              className="hover:text-primary-light dark:hover:text-primary-dark"
              href="/"
            >
              Halaman Utama
            </Link>
          </li>
          <li role="navigation">
            <Link
              className="hover:text-primary-light dark:hover:text-primary-dark"
              href="/categories"
            >
              Daftar Buku
            </Link>
          </li>
          <li role="navigation">
            <Link
              className="hover:text-primary-light dark:hover:text-primary-dark"
              href="/about"
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
        <span className="h-6">
          <Separator orientation="vertical" className="w-0.5 opacity-20" />
        </span>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default NavigationBar;
