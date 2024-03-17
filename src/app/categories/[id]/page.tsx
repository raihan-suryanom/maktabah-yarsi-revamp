import { Suspense } from 'react';

import { getBibliographies } from '~/lib/bibliographies.server';
import { getCategories, getCategoryTitle } from '~/lib/categories.server';
import { Await } from '~/lib/utils/await.component';
import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';
import { extractCategoryPaths } from '~/lib/utils/extract-category-paths';
import BreadcrumbSkeleton from '~/components/atoms/skeleton/breadcrumb-skeleton.component';
import AccordionList, {
  CategoryOutlineSkeleton,
} from '~/components/atoms/accordion/accordion.component';
import Breadcrumb from '~/components/molecules/breadcrumb';
import BibliographyLists, {
  BibliographyListsSkeleton,
} from '~/components/organisms/bibliography-lists';

import type { Metadata } from 'next';
import PageControlComponent from '~/components/molecules/page-control/page-control.component';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { title: visitedCategory } = await getCategoryTitle(params.id);
  const title = `Daftar Buku ${visitedCategory} - Maktaba YARSI`;

  return {
    title,
    description: `Berikut daftar buku kategori ${visitedCategory}`,
    category: visitedCategory,
    openGraph: {
      type: 'book',
      title,
      url: '/favicon.ico',
    },
    metadataBase: new URL('https://maktabah-yarsi-revamp.vercel.app/'),
    twitter: {
      card: 'summary',
      title,
      siteId: '@universitasyarsi',
      images: {
        url: '/favicon.ico',
        alt: "Maktaba YARSI's Logo",
      },
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const { categories } = await getCategories();

  return extractCategoryPaths(categories);
}

export default function BibliographyListsPage({
  params,
}: {
  params: { id: string };
}) {
  const bibliographiesPromise = getBibliographies(params.id);
  const categoryPromise = getCategoryTitle(params.id);
  const categoriesPromise = getCategories();

  return (
    <>
      <aside className="fixed flex h-screen w-3/12 flex-col overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div[aria-label=skeleton]]:mb-3 [&>div[aria-label=skeleton]]:ml-auto">
        <h2 className="mb-3 text-2xl font-bold dark:text-light-400">
          Kategori Buku
        </h2>
        <Suspense fallback={<CategoryOutlineSkeleton />}>
          <Await promise={categoriesPromise}>
            {({ categories }) => (
              <AccordionList
                outlines={categories}
                variant="categories"
                activeItem={params.id}
                open
              />
            )}
          </Await>
        </Suspense>
      </aside>
      <div className="relative ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pt-5 dark:bg-dark-200">
        <Suspense fallback={<BreadcrumbSkeleton />}>
          <Await promise={categoryPromise}>
            {({ title }) => (
              <>
                <Breadcrumb paths={[{ title }]} />
                <h1 className="text-center text-4xl font-bold capitalize dark:text-light-400">
                  Daftar Buku {reverseSlugCaseToOriginal(title)}
                </h1>
              </>
            )}
          </Await>
        </Suspense>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div[aria-label=skeleton]]:rounded-[10px]">
          {/* TODO: New Pagination fallback skeleton */}
          <Suspense key={params.id} fallback={<BibliographyListsSkeleton />}>
            <Await promise={bibliographiesPromise}>
              {({ bibliographies }) => (
                <>
                  <BibliographyLists bibliographies={bibliographies} />
                  {bibliographies.length > 0 ? (
                    <PageControlComponent
                      className="fixed bottom-2.5 left-1/2 translate-x-[20%] rounded-md bg-light-100 px-3.5 py-1.5 dark:bg-dark-100"
                      currentPage="1"
                      lastPage={1}
                    />
                  ) : (
                    <p className="col-span-full mt-20 text-center text-lg [&>span]:font-semibold [&>span]:text-primary-light [&>span]:dark:text-primary-dark">
                      Maaf, kategori yang dipilih saat ini{' '}
                      <span>sedang kosong</span>. Tim kami sedang bekerja keras
                      untuk menambahkan buku ke kategori ini. Silakan{' '}
                      <span>cek kembali</span> nanti untuk pembaruan. Terima
                      kasih atas kesabaran dan pengertiannya.
                    </p>
                  )}
                </>
              )}
            </Await>
          </Suspense>
        </section>
      </div>
    </>
  );
}
