import Link from 'next/link';

import { Button, Icon, MaktabahIcon, Separator } from '~/components/atoms';
import { cn } from '~/lib/utils';

type NavigationBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <nav
      className={cn(
        'flex w-full items-center justify-between gap-5 border-b border-black/10 bg-light-100 py-3.5 pl-8 pr-10 text-dark-300 dark:border-gray-800 dark:bg-dark-100 dark:text-light-300',
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
            Homepage
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-light dark:hover:text-primary-dark"
            href="/categories"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary-light dark:hover:text-primary-dark"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
      <span className="h-6">
        <Separator orientation="vertical" className="w-0.5 opacity-20" />
      </span>
      <Button size="small">
        <Icon
          name="sun"
          className="text-primary-light dark:text-primary-dark"
        />
      </Button>
    </nav>
  );
};

export default NavigationBar;
