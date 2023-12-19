import { Skeleton } from '~/components/atoms';

const MainContent = ({
  content,
  query,
}: {
  content: string;
  query?: string;
}) => {
  const highlightedWords = (text: string) => {
    return content
      .replace(
        new RegExp(text, 'gium'),
        (highlight) => `<mark>${highlight}</mark>`
      )
      .replace(/  +/g, ' ');
  };

  return (
    <article
      className="prose prose-base min-h-screen max-w-none dark:prose-invert prose-p:indent-4"
      dangerouslySetInnerHTML={{
        __html: query ? highlightedWords(query) : content,
      }}
    />
  );
};

export const MainContentSkeleton = () => (
  <div className="flex flex-col gap-5">
    <Skeleton className="w-72" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
    </div>
    <Skeleton className="w-56" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
    </div>
    <Skeleton className="w-56" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
    </div>
    <Skeleton className="w-56" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
      <Skeleton className="h-3.5" />
    </div>
  </div>
);

export default MainContent;
