import type { TOCProps } from './index.type';

export const formatToSlugCase = (inputString: string) =>
  inputString.replace(/\s+/g, '-').toLowerCase();

export const reverseSlugCaseToOriginal = (inputString: string) =>
  decodeURIComponent(
    inputString
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, ' ')
  );

export const wait = (milliSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSecond));

export const formateDate = (date: string) =>
  new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(date));

export const renameAttributes = (item: TOCProps): TOCProps => {
  const newItem: TOCProps = {
    ...item,
    page: item.page,
    title: item.title,
    path: `/books/5NW2/${item.page}`,
    _id: 'tester' + item.title,
  };

  if (item.children && item.children.length > 0) {
    newItem.children = item.children.map((child) => renameAttributes(child));
  }

  return newItem;
};
