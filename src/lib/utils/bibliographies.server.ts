import type { BibliographyProps, TOCProps } from './index.type';

export const getBibliographies = (
  uniqueIdentifier: string
): Promise<{ bibliographies: ReadonlyArray<BibliographyProps> }> =>
  fetch(
    `${process.env.BASE_API_URL}${process.env.CATEGORIES_API}/${uniqueIdentifier}${process.env.BIBLIOGRAPHIES_API}`
  ).then((response) => response.json());

export const getAllBibliographies = (): Promise<
  ReadonlyArray<BibliographyProps>
> =>
  fetch(`${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}`).then(
    (response) => response.json()
  );

export const getTableOfContents = (
  bibliographyId: string
): Promise<ReadonlyArray<TOCProps>> =>
  fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bibliographyId}${process.env.TOC_API}`
  ).then((response) => response.json());

export const getDetailBibliography = (
  bibliographyId: string
): Promise<BibliographyProps> =>
  fetch(
    `${process.env.BASE_API_URL}${process.env.BIBLIOGRAPHIES_API}/${bibliographyId}`
  ).then((response) => response.json());
