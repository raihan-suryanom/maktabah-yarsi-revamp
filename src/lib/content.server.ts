import configServer from './config.server';

import type { ContentProps } from './utils/index.type';

const {
  path: { baseUrl, bibliographies, contents },
} = configServer;

export const getContents = (
  bibliographyId: string,
  page: string
): Promise<ContentProps> =>
  fetch(
    `${baseUrl}${bibliographies}/${bibliographyId}${contents}?page=${page}`,
    { next: { revalidate: 1 } }
  ).then((response) => response.json());
