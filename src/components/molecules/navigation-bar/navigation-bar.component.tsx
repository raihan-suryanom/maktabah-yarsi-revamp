import Link from 'next/link';

import { MaktabahIcon, Separator } from '~/components/atoms';
import { ThemeToggle } from '~/components/organisms';
import { cn } from '~/lib/utils';

type NavigationBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <nav
      className={cn(
        'fixed top-0 z-10 flex w-full items-center justify-between gap-5 border-b border-black/10 bg-light-100 px-8 py-3.5 text-dark-300 dark:border-gray-800 dark:bg-dark-100 dark:text-light-300',
        className
      )}
      {...props}
    >
      <Link href="/" className="flex cursor-pointer items-center" passHref>
        <MaktabahIcon />
        <span className="ml-2.5 font-semibold">Maktabah YARSI</span>
      </Link>
      <ul className="ml-auto flex items-center gap-10 font-bold">
        <li>
          <Link
            className="hover:text-primary-light dark:hover:text-primary-dark"
            href="/"
          >
            Halaman Utama
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-light dark:hover:text-primary-dark"
            href="/categories"
          >
            Daftar Buku
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-light dark:hover:text-primary-dark"
            href="/about"
          >
            Tentang
          </Link>
        </li>
      </ul>
      <span className="h-6">
        <Separator orientation="vertical" className="w-0.5 opacity-20" />
      </span>
      <ThemeToggle />
    </nav>
  );
};

export default NavigationBar;
