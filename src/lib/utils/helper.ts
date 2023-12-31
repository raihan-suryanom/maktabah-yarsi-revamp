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
