import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import Link from 'next/link';

import configServer from '~/lib/config.server';
import Button from '~/components/atoms/button';
import Input from '~/components/atoms/input';

const PageControlComponent = ({
  bibliographyId,
  currentPage,
  firstPage = 7,
  lastPage = 9,
}: {
  bibliographyId: string;
  currentPage: string;
  firstPage: number;
  lastPage: number;
}) => {
  const { path } = configServer;

  return (
    <div className="mx-auto flex items-center gap-x-3">
      <Button
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
      >
        <Link
          href={`${path.bibliographies}/${bibliographyId}/${firstPage}`}
          aria-disabled={+currentPage === firstPage}
        >
          <ChevronsLeft size={32} />
        </Link>
      </Button>
      <Button
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
      >
        <Link
          href={`${path.bibliographies}/${bibliographyId}/${+currentPage - 1}`}
          aria-disabled={+currentPage === firstPage}
        >
          <ChevronLeft size={32} />
        </Link>
      </Button>
      <Input
        type="number"
        dimension="small"
        className="w-8 appearance-none text-center text-sm"
        defaultValue={currentPage}
      />
      <Button
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
      >
        <Link
          href={`${path.bibliographies}/${bibliographyId}/${+currentPage + 1}`}
          aria-disabled={+currentPage === lastPage}
        >
          <ChevronRight size={32} />
        </Link>
      </Button>
      <Button
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
      >
        <Link
          href={`${path.bibliographies}/${bibliographyId}/${lastPage}`}
          aria-disabled={+currentPage === lastPage}
        >
          <ChevronsRight size={32} />
        </Link>
      </Button>
    </div>
  );
};

export default PageControlComponent;
