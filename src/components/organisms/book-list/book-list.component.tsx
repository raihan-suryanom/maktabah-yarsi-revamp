import Image from 'next/image';
import Link from 'next/link';
import { Layers, Pencil } from 'lucide-react';

import { Card, Skeleton } from '~/components/atoms';
import { generateBookPaths } from '~/lib/utils/generate-paths';

export type BookProps = {
  _id: string;
  path: string;
  title: string;
  image_url: string;
  description: string;
  contributor: string;
  date_created: string;
  source: string;
  subject: string;
  creator: string;
  total: number;
  category: string;
} & BookPages;

export type BookPages = {
  firstPage: number;
  lastPage: number;
};

const BookList = async ({ books }: { books: ReadonlyArray<BookProps> }) => {
  const formattedBooks = generateBookPaths(books);

  return (
    <>
      {formattedBooks.map((book, order) => (
        <Card.Root key={book._id}>
          <Link href={book.path} passHref>
            <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100 md:rounded-[10px]">
              <Image
                src="/book_cover_not_available.png"
                alt={`${book.title}'s cover book`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-[inherit] object-cover object-center"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU2Nn4HwAEdgJL7ELe/AAAAABJRU5ErkJggg=="
                placeholder="blur"
                priority={order < 10}
                fill
              />
            </Card.Content>
          </Link>
          <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0 text-dark-100 dark:text-light-300">
            <Card.Title className="text-base">{book.title}</Card.Title>
            <span className="flex items-center gap-1.5">
              <Pencil size={12} />
              <small className="text-xs">{book.creator}</small>
            </span>
            <div className="flex items-center gap-1.5">
              <Layers size={12} />
              <small className="text-xs">{book.lastPage} halaman</small>
            </div>
          </Card.Footer>
        </Card.Root>
      ))}
    </>
  );
};

export const BookListSkeleton = () => (
  <>
    {[...Array(10)].map((_, index) => (
      <div key={index} className="flex flex-col">
        <div className="relative aspect-[1/1.5] md:rounded-[10px]">
          <Skeleton className="h-full rounded-[inherit]" />
        </div>
        <div className="mt-1.5 flex-col items-start gap-0.5 p-0">
          <Skeleton className="my-1.5 h-4 w-10/12" />
          <div className="mb-1.5 flex items-center gap-1.5">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-8/12" />
          </div>
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-5/12" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default BookList;
