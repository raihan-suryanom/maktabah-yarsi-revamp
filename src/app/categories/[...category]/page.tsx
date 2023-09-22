import Image from 'next/image';
import Link from 'next/link';

import { Card, Icon, PageWrapper } from '~/components/atoms';
import { Breadcrumb, Pagination } from '~/components/molecules';
import { TableOfContent } from '~/components/organisms';
import { categories } from '~/lib/utils';

export default function ListOfBookPage({
  params,
}: {
  params: { category: ReadonlyArray<string> };
}) {
  const paths = params.category.map((path) => ({ title: path, link: path }));

  return (
    <PageWrapper className="flex min-h-screen">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll pb-28 pl-7 pr-5 pt-5">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        {categories.map((category) => (
          <TableOfContent
            controlled
            variant="categories"
            iconName="book-marked"
            key={category.category}
            {...category}
            isRootCategory
          />
        ))}
      </aside>
      <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-5 bg-light-300 p-6">
        <Breadcrumb paths={paths} />
        <h1 className="text-center text-4xl font-bold">Daftar Buku Akhlak</h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
          {Array(10)
            .fill('')
            .map((_, index) => (
              <Card.Root key={index}>
                <Link href="/books/dummy-template" passHref>
                  <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100">
                    <Image
                      src="https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg"
                      alt=""
                      fill
                      className="rounded-[10px] object-cover"
                    />
                  </Card.Content>
                </Link>
                <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0">
                  <Card.Title className="text-base text-dark-100">
                    Dalal al-Khairat
                  </Card.Title>
                  <span className="flex items-center gap-1.5">
                    <Icon size={12} name="pencil" />
                    <small className="text-xs text-dark-100">
                      Abdul Somad Al Bukhari
                    </small>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon size={12} name="layers" />
                    <small className="text-xs text-dark-100">124 halaman</small>
                  </div>
                </Card.Footer>
              </Card.Root>
            ))}
        </section>
        <Pagination className="mx-auto w-[384px]" />
      </div>
    </PageWrapper>
  );
}
