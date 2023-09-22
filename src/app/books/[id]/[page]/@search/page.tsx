import type { DetailBookPageProps } from '../page';

const SearchTable = (props: DetailBookPageProps) => {
  if (!props.searchParams.query) {
    return null;
  }

  return <h1 className="text-9xl text-red-500">{props.searchParams.query}</h1>;
};

export default SearchTable;
