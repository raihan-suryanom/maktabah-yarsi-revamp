// import Image from 'next/image';
// import Link from 'next/link';
import { Suspense } from 'react';

// import { Card, Icon, PageWrapper } from '~/components/atoms';
import { PageWrapper } from '~/components/atoms';
import { CategoriesOutline } from '~/components/organisms';
// import { Breadcrumb, Pagination } from '~/components/molecules';
// import { wait } from '~/lib/utils';

// async function getPaths(category: ReadonlyArray<string>) {
//   await wait(1000);

//   return category.map((path) => ({ title: path, link: path }));
// }

// async function getBooks(category: string) {
//   await wait(1000);

//   return [
//     {
//       link: '/books/dummy-template/1',
//       title: 'Dalal al-Khairat',
//       image: 'https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 64,
//     },
//     {
//       link: '/books/dummy-template/2',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 45,
//     },
//     {
//       link: '/books/dummy-template/3',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 24,
//     },
//     {
//       link: '/books/dummy-template/4',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 40,
//     },
//     {
//       link: '/books/dummy-template/5',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/e/4/e4c35da4496e6f5c47374a40820754b8_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 81,
//     },
//     {
//       link: '/books/dummy-template/6',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/f/1/f138d23cb50c92bff3b3b9200e09fa04_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 124,
//     },
//     {
//       link: '/books/dummy-template/7',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/e/2/e2b55d5be2a1e2c3b13aa345e1578e0e_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 55,
//     },
//     {
//       link: '/books/dummy-template/8',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/8/8/88f09492e9c5874f60e8351989978cf2_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 43,
//     },
//     {
//       link: '/books/dummy-template/9',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/0/8/08c30ebb37c2f6b534c3880469503c0b_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 134,
//     },
//     {
//       link: '/books/dummy-template/10',
//       title: 'Dalal al-Khairat',
//       image:
//         'https://edit.org/photos/editor/json/2021/10/01/e/1/e1b71f04c341c78008a82193726a289a_edit.org.jpg-376.jpg',
//       author: 'Abdul Somad Al Bukhari',
//       pages: 92,
//     },
//   ];
// }

export async function generateStaticParams() {
  return [
    { category: ['ahklak'] },
    { category: ['ahklak', 'akhlakul-karimah'] },
    { category: ['ahklak', 'tematik'] },
    { category: ['ahklak', 'tematik', 'test-2'] },
    { category: ['ahklak', 'tematik', 'test-1'] },
    { category: ['ahklak', 'tematik', 'test-1', 'ayolohh'] },
    { category: ['ahklak', 'akhlak-budaya'] },
    { category: ['fiqih'] },
    { category: ['fiqih', 'fiqih-ibadah'] },
    { category: ['al-quran'] },
  ];
}

export default async function ListOfBookPage({
  params,
}: {
  params: { category: ReadonlyArray<string> };
}) {
  console.log(params);
  // const visitedCategory = params.category.at(-1)!;
  // const paths = await getPaths(params.category);
  // const categories = await getCategories();
  // const books = await getBooks(visitedCategory);

  return (
    <PageWrapper className="flex">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <Suspense fallback={<p>Loading Categories...</p>}>
          <CategoriesOutline />
        </Suspense>
      </aside>
      {/* <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5">
      <Suspense fallback={<p>Loading...</p>}>
        <Breadcrumb paths={paths} />
      </Suspense>
        <h1 className="text-center text-4xl font-bold">
          Daftar Buku {visitedCategory}
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
        <Suspense fallback={<p>Loading...</p>}>
          {books.map((book) => (
            <Card.Root key={book.link}>
              <Link href="/books/dummy-template/3" passHref>
                <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100">
                  <Image
                    src={book.image}
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-[10px] object-cover"
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
        </Suspense>
        </section>
        <Pagination />
      </div> */}
    </PageWrapper>
  );
}
