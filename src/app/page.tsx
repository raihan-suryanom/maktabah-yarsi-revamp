import dynamic from 'next/dynamic';
import { Suspense, lazy } from 'react';

import { Skeleton } from '~/components/atoms';
import { Await, getPopularCategories } from '~/lib/utils';
import { CardGroupSkeleton } from '~/components/molecules/card-group';

import type { Metadata } from 'next';

const CardGroup = lazy(
  () => import('~/components/molecules/card-group/card-group.component')
);

export const metadata: Metadata = {
  title: 'Maktabah YARSI | Perpustakaan Islam Digital Berbahasa Indonesia',
  description:
    'Maktabah YARSI مكتبة يرسي merupakan aplikasi perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat dan riba.',
};

const SearchButton = dynamic(
  () => import('~/components/molecules/search-button/search-button.component'),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[72px] rounded-lg bg-light-300" />,
  }
);

export default function HomePage() {
  const popularCategoriesPromise = getPopularCategories();

  return (
    <>
      <header className="mx-auto flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-10 text-center lg:w-9/12">
        <h1 className="!font-lpmq text-6xl font-normal text-primary-light dark:text-primary-dark">
          مكتبة يرسي
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
        <section className="flex w-full items-center justify-between">
          <Suspense fallback={<CardGroupSkeleton />}>
            <Await promise={popularCategoriesPromise} _DEV>
              {({ popularCategories }) => (
                <CardGroup data={popularCategories} />
              )}
            </Await>
          </Suspense>
        </section>
      </header>
    </>
  );
}
