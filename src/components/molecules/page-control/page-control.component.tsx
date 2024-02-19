'use client';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import Input from '~/components/atoms/input';
import ButtonClient from '~/components/atoms/button/button.client.component';
import { useRouter } from 'next/navigation';
import { cn } from '~/lib/utils/cn';

const PageControlComponent = ({
  currentPage,
  lastPage,
  className,
  bibliographyId,
  firstPage = 1,
}: {
  currentPage: string;
  lastPage: number;
  bibliographyId?: string;
  firstPage?: number;
  className?: string;
}) => {
  const router = useRouter();
  const bibliographies = '/bibliographies';

  const searchNavAction = (page: string) => {
    const { searchParams, pathname } = new URL(window.location.href);
    searchParams.set('page', page);

    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const pageControlProps = (page: number) => ({
    ...(!bibliographyId && {
      onClick: () => searchNavAction(page.toString()),
    }),
    ...(bibliographyId && {
      location: `${bibliographies}/${bibliographyId}/${page}`,
    }),
  });

  return (
    <div className={cn('mx-auto flex items-center gap-x-3', className)}>
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
        aria-disabled={+currentPage === firstPage}
        {...pageControlProps(firstPage)}
      >
        <ChevronsLeft size={32} />
      </ButtonClient>

      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
        aria-disabled={+currentPage === firstPage}
        {...pageControlProps(+currentPage - 1)}
      >
        <ChevronLeft size={32} />
      </ButtonClient>
      <Input
        key={currentPage}
        type="number"
        dimension="small"
        className="w-8 appearance-none text-center text-sm"
        defaultValue={currentPage}
      />
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
        aria-disabled={+currentPage === lastPage}
        {...pageControlProps(+currentPage + 1)}
      >
        <ChevronRight size={32} />
      </ButtonClient>
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
        aria-disabled={+currentPage === lastPage}
        {...pageControlProps(lastPage)}
      >
        <ChevronsRight size={32} />
      </ButtonClient>
    </div>
  );
};

export default PageControlComponent;
