export function getPaths(category: ReadonlyArray<string>) {
  return category.map((path) => ({ title: path, link: path }));
}
