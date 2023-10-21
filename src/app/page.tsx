import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { BookOpen } from 'lucide-react';

import { Card } from '~/components/atoms';
import { Await, getPopularCategories } from '~/lib/utils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maktabah YARSI | Perpustakaan Islam Digital Berbahasa Indonesia',
  description:
    'Maktabah YARSI مكتبة يرسي merupakan aplikasi perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat dan riba.',
};

const SearchForm = dynamic(
  () => import('~/components/molecules/search-form/search-form.component'),
  { ssr: false }
);

const SearchButton = dynamic(
  () => import('~/components/molecules/search-button/search-button.component'),
  { ssr: false }
);

export default function HomePage() {
  const popularCategoriesPromise = getPopularCategories();

  return (
    <>
      <header className="mx-auto flex min-h-screen flex-col items-center justify-center gap-10 text-center lg:w-9/12">
        <h1 className="!font-lpmq text-6xl font-normal text-primary-light dark:text-primary-dark">
          مكتبة يرسي
          <span className="block pt-7 text-7xl font-black text-dark-100 dark:text-light-100">
            Maktabah YARSI
          </span>
        </h1>
        <p className="text-xl">
          Sebuah perpustakaan islam digital berbahasa Indonesia yang
          memungkinkan pengguna untuk mencari topik atau permasalahan
          berdasarkan kata kunci seperti{' '}
          <span className="font-bold text-primary-light dark:text-primary-dark">
            iman
          </span>
          ,{' '}
          <span className="font-bold text-primary-light dark:text-primary-dark">
            sabar
          </span>
          ,{' '}
          <span className="font-bold text-primary-light dark:text-primary-dark">
            shalat
          </span>
          , dan{' '}
          <span className="font-bold text-primary-light dark:text-primary-dark">
            riba
          </span>
          .
        </p>
        <SearchButton
          placeholder="Cari nama buku, kategori, topik ..."
          className="w-full bg-light-300"
          size="large"
        >
          <SearchForm />
        </SearchButton>
        <section className="flex w-full items-center justify-between">
          <Suspense fallback={<p>Loading...</p>}>
            <Await promise={popularCategoriesPromise}>
              {({ popularCategories }) => (
                <>
                  {popularCategories.map((category) => (
                    <Card.Root
                      key={category}
                      className="rounded-[20px] p-7 lg:min-w-[150px]"
                    >
                      <Card.Header className="mb-2.5 items-center p-0">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-white">
                          <BookOpen size={28} strokeWidth={3} />
                        </span>
                      </Card.Header>
                      <Card.Content className="p-0">
                        <Card.Title className="text-center font-normal capitalize">
                          {category}
                        </Card.Title>
                      </Card.Content>
                    </Card.Root>
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </section>
      </header>
    </>
  );
}
