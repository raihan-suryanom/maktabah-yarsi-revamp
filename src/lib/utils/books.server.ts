import dummyAllBibliographies from '../fixtures/all-books';
import dummyBooks from '../fixtures/books';
import dummyDetailBook from '../fixtures/detail-book';
import dummyTableOfContents from '../fixtures/toc';

import type { BookProps } from '~/components/organisms/book-list/book-list.component';

export type TOCProps = {
  page: number;
  text: string;
  children: TOCProps;
}[];

export const getBooks = async (
  uniqueIdentifier: string
): Promise<{ bibliographies: ReadonlyArray<BookProps> }> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyBooks as Promise<{
      bibliographies: ReadonlyArray<BookProps>;
    }>;
  }

  return fetch(
    // `${process.env.BASE_API_URL}${process.env.CATEGORIES_API}/6573307da027a2e4a3a2828b${process.env.BIBLIOGRAPHIES_API}`
    `${process.env.BASE_API_URL}${process.env.CATEGORIES_API}/${uniqueIdentifier}${process.env.BIBLIOGRAPHIES_API}`
  ).then((response) => response.json());
};

export const getAllBibliographies = async (): Promise<
  ReadonlyArray<BookProps>
> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyAllBibliographies as Promise<ReadonlyArray<BookProps>>;
  }

  return fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}`
  ).then((response) => response.json());
};

export const getTableOfContents = async (bookId: string): Promise<TOCProps> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyTableOfContents as Promise<TOCProps>;
  }

  return fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bookId}${process.env.TOC_API}`
  ).then((response) => response.json());
};

export const getDetailBook = async (bookId: string): Promise<BookProps> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyDetailBook as Promise<BookProps>;
  }

  return fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bookId}`
  ).then((response) => response.json());
};
