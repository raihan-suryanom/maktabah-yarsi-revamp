import { Layers, Pencil } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, Skeleton } from '~/components/atoms';

const BookList = async ({
  books,
}: {
  books: {
    link: string;
    title: string;
    image: string;
    author: string;
    pages: number;
  }[];
}) => {
  return (
    <>
      {books.map((book) => (
        <Card.Root key={book.link}>
          <Link href={book.link} passHref>
            <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100 md:rounded-[10px]">
              <Image
                src={book.image}
                alt={`${book.title}'s cover book`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-[inherit] object-cover object-center"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU2Nn4HwAEdgJL7ELe/AAAAABJRU5ErkJggg=="
                placeholder="blur"
                priority
                fill
              />
            </Card.Content>
          </Link>
          <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0">
            <Card.Title className="text-base text-dark-100">
              {book.title}
            </Card.Title>
            <span className="flex items-center gap-1.5">
              <Pencil size={12} />
              <small className="text-xs text-dark-100">{book.author}</small>
            </span>
            <div className="flex items-center gap-1.5">
              <Layers size={12} />
              <small className="text-xs text-dark-100">
                {book.pages} halaman
              </small>
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
