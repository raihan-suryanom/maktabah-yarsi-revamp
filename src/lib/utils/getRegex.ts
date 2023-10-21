export const getRegex = (
  caseSensitiveParams: string,
  exactMatchParams: string,
  query: string
) => {
  const flags = caseSensitiveParams === 'true' ? 'gum' : 'gium';
  const pattern = exactMatchParams === 'true' ? `\\b${query}\\b` : query;
  const regex = new RegExp(pattern, flags);

  return regex;
};
