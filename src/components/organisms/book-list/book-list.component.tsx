import Image from 'next/image';
import Link from 'next/link';
import { Card, Icon, Skeleton } from '~/components/atoms';

async function getBooks(category: string) {
  console.log(category);
  return [
    {
      link: '/books/dummy-template/1',
      title: 'Dalal al-Khairat',
      image: 'https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 64,
    },
    {
      link: '/books/dummy-template/2',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 45,
    },
    {
      link: '/books/dummy-template/3',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 24,
    },
    {
      link: '/books/dummy-template/4',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 40,
    },
    {
      link: '/books/dummy-template/5',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/e/4/e4c35da4496e6f5c47374a40820754b8_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 81,
    },
    {
      link: '/books/dummy-template/6',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/f/1/f138d23cb50c92bff3b3b9200e09fa04_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 124,
    },
    {
      link: '/books/dummy-template/7',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/e/2/e2b55d5be2a1e2c3b13aa345e1578e0e_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 55,
    },
    {
      link: '/books/dummy-template/8',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/8/8/88f09492e9c5874f60e8351989978cf2_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 43,
    },
    {
      link: '/books/dummy-template/9',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/0/8/08c30ebb37c2f6b534c3880469503c0b_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 134,
    },
    {
      link: '/books/dummy-template/10',
      title: 'Dalal al-Khairat',
      image:
        'https://edit.org/photos/editor/json/2021/10/01/e/1/e1b71f04c341c78008a82193726a289a_edit.org.jpg-376.jpg',
      author: 'Abdul Somad Al Bukhari',
      pages: 92,
    },
  ];
}

const BookList = async ({ category }: { category: string }) => {
  const books = await getBooks(category);

  return (
    <>
      {books.map((book) => (
        <Card.Root key={book.link}>
          <Link href="/books/dummy-template/3" passHref>
            <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100 md:rounded-[10px]">
              <Image
                src={book.image}
                alt={`${book.title}'s cover book`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-[inherit]"
                objectFit="cover"
                objectPosition="center"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU2Nn4HwAEdgJL7ELe/AAAAABJRU5ErkJggg=="
                placeholder="blur"
                layout="fill"
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
              <Icon size={12} name="pencil" />
              <small className="text-xs text-dark-100">{book.author}</small>
            </span>
            <div className="flex items-center gap-1.5">
              <Icon size={12} name="layers" />
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
    {Array(10)
      .fill(null)
      .map((_, index) => (
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
