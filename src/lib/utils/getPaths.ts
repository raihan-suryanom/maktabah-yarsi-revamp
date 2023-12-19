import { reverseSlugCaseToOriginal } from './helper';

export function getPaths(category: ReadonlyArray<string>) {
  return category.map((path) => ({
    title: reverseSlugCaseToOriginal(path),
    link: path,
  }));
}
