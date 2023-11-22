import dummyBooks from '../fixtures/books';
import dummyDetailBook from '../fixtures/detail-book';

import type { BookProps } from '~/components/organisms/book-list/book-list.component';

export const getBooks = async (): Promise<ReadonlyArray<BookProps>> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyBooks as Promise<ReadonlyArray<BookProps>>;
  }

  return fetch('http://localhost:5555/api/v1/bibliografi').then((response) =>
    response.json()
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDetailBook = async (id: string): Promise<BookProps> => {
  return dummyDetailBook as Promise<BookProps>;
};
