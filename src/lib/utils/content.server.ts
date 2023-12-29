import type { ContentProps } from './index.type';

export const getContents = (
  bibliographyId: string,
  page: string
): Promise<ContentProps> =>
  fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bibliographyId}${process.env.CONTENTS_API}?page=${page}`
  ).then((response) => response.json());
