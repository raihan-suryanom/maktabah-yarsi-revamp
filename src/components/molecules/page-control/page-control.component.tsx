import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import configServer from '~/lib/config.server';
import Input from '~/components/atoms/input';
import ButtonClient from '~/components/atoms/button/button.client.component';

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
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
        location={`${path.bibliographies}/${bibliographyId}/${firstPage}`}
        aria-disabled={+currentPage === firstPage}
      >
        <ChevronsLeft size={32} />
      </ButtonClient>

      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === firstPage}
        location={`${path.bibliographies}/${bibliographyId}/${
          +currentPage - 1
        }`}
        aria-disabled={+currentPage === firstPage}
      >
        <ChevronLeft size={32} />
      </ButtonClient>
      <Input
        type="number"
        dimension="small"
        className="w-8 appearance-none text-center text-sm"
        defaultValue={currentPage}
      />
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
        location={`${path.bibliographies}/${bibliographyId}/${
          +currentPage + 1
        }`}
        aria-disabled={+currentPage === lastPage}
      >
        <ChevronRight size={32} />
      </ButtonClient>
      <ButtonClient
        className="text-primary-light dark:text-primary-dark/80 dark:hover:text-primary-dark"
        disabled={+currentPage === lastPage}
        location={`${path.bibliographies}/${bibliographyId}/${lastPage}`}
        aria-disabled={+currentPage === lastPage}
      >
        <ChevronsRight size={32} />
      </ButtonClient>
    </div>
  );
};

export default PageControlComponent;
