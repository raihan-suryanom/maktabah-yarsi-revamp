import Image from 'next/image';

import { Card, Icon, PageWrapper } from '~/components/atoms';
import { SearchButton } from '~/components/molecules';
import image from '../../public/book_cover_not_available.png';
import { SearchForm } from '~/components/molecules/search-form';

const categories = ['ahklak', 'aqidah', 'fiqih', 'hadits', 'sirah', 'lainnya'];

export default function HomePage() {
  return (
    <PageWrapper className="py-16">
      <header className="mx-auto flex min-h-screen flex-col items-center gap-10 text-center lg:w-9/12">
        <h1 className="font-lpmq text-6xl font-normal text-primary-light dark:text-primary-dark">
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
          {categories.map((category) => (
            <Card.Root
              key={category}
              className="rounded-[20px] p-7 lg:min-w-[150px]"
            >
              <Card.Header className="mb-2.5 items-center p-0">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-white">
                  <Icon name="book-open" size={28} strokeWidth={3} />
                </span>
              </Card.Header>
              <Card.Content className="p-0">
                <Card.Title className="text-center font-normal capitalize">
                  {category}
                </Card.Title>
              </Card.Content>
            </Card.Root>
          ))}
        </section>
      </header>
      <section className="flex flex-col gap-12 px-24 text-center">
        <h2 className="text-3xl font-bold uppercase">
          Buku yang sering dibaca
        </h2>
        <article className="flex w-full items-center justify-between gap-2">
          {[...Array(6)].map((_, index) => (
            <Card.Root key={index} className="w-[180px]">
              <Card.Content className="p-0">
                <Image src={image} alt="Image not available" />
              </Card.Content>
            </Card.Root>
          ))}
        </article>
        <h2 className="text-3xl font-bold uppercase">Buku aqidah</h2>
        <article className="grid w-full grid-cols-6 grid-rows-2 items-center justify-between gap-2.5">
          <Card.Root className="col-span-2 row-span-2 h-full">
            <Card.Content className="p-0">
              <Image src={image} alt="Image not available" />
            </Card.Content>
          </Card.Root>
          {[...Array(8)].map((_, index) => (
            <Card.Root key={index}>
              <Card.Content className="p-0">
                <Image src={image} alt="Image not available" />
              </Card.Content>
            </Card.Root>
          ))}
        </article>
      </section>
    </PageWrapper>
  );
}
