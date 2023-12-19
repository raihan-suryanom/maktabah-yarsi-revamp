import Link from 'next/link';

import { MaktabahIcon, Separator } from '~/components/atoms';
import { ThemeToggle } from '~/components/organisms';
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
          <MaktabahIcon />
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
