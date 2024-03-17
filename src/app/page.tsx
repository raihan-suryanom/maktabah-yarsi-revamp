import { Suspense } from 'react';

import CardGroup, {
  CardGroupSkeleton,
} from '~/components/molecules/card-group/card-group.component';
import SearchButton from '~/components/molecules/search-button';
import { Await } from '~/lib/utils/await.component';

import type { Metadata } from 'next';
import { getCategories } from '~/lib/categories.server';

export const metadata: Metadata = {
  title: 'Maktabah YARSI | Perpustakaan Islam Digital Berbahasa Indonesia',
  description:
    'Maktabah YARSI مكتبة يرسي merupakan aplikasi perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat dan riba.',
};

export default function HomePage() {
  // TODO: Analytics
  // const popularCategoriesPromise = getPopularCategories();
  const categoriesPromise = getCategories();

  return (
    <>
      <header className="mx-auto flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-10 text-center lg:w-9/12">
        <h1 className="!font-lpmq text-6xl font-normal text-primary-light dark:text-primary-dark">
          مَكتَبَةُ يَرسِي
          <strong className="block pt-7 text-7xl font-black text-dark-100 dark:text-light-100">
            Maktabah YARSI
          </strong>
        </h1>
        <p className="text-xl">
          Sebuah perpustakaan islam digital berbahasa Indonesia yang
          memungkinkan pengguna untuk mencari topik atau permasalahan
          berdasarkan kata kunci seperti{' '}
          <strong className="text-primary-light dark:text-primary-dark">
            iman
          </strong>
          ,{' '}
          <strong className="text-primary-light dark:text-primary-dark">
            sabar
          </strong>
          ,{' '}
          <strong className="text-primary-light dark:text-primary-dark">
            shalat
          </strong>
          , dan{' '}
          <strong className="text-primary-light dark:text-primary-dark">
            riba
          </strong>
          .
        </p>
        <SearchButton
          placeholder="Cari nama buku, kategori, topik ..."
          className="w-full bg-light-300"
          size="large"
        />
        {/* TODO: This is unnecessary, should be refactor to much simpler and to the point without icon */}
        <section className="m-0 mx-auto grid auto-rows-[1fr] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          <Suspense fallback={<CardGroupSkeleton />}>
            <Await promise={categoriesPromise}>
              {({ categories }) => <CardGroup data={categories} />}
            </Await>
          </Suspense>
        </section>
      </header>
    </>
  );
}
