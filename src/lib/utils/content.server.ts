import dummyContent from '../fixtures/content';

export type ContentProps = {
  _id: string;
  text: string;
  page: number;
  bibliography: string;
};

export const getContents = async (
  bookId: string,
  page: string
): Promise<ContentProps> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyContent as Promise<ContentProps>;
  }

  return fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bookId}${process.env.CONTENTS_API}?page=${page}`
  ).then((response) => response.json());
};
