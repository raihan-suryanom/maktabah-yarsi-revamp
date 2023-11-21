export const formatToSlugCase = (inputString: string) =>
  inputString.replace(/\s+/g, '-').toLowerCase();

export const reverseSlugCaseToOriginal = (inputString: string) =>
  inputString
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ');

export const wait = (milliSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSecond));
