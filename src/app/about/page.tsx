import { PageWrapper } from '~/components/atoms';
import { Breadcrumb } from '~/components/molecules';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang - Maktaba YARSI',
  description:
    'Sebuah perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat, dan riba.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <Breadcrumb paths={[{ title: 'about' }]} />
      <h1
        id="main_content"
        className="mb-10 mt-5 px-10 text-center text-3xl font-bold text-dark-200 dark:text-light-200 md:px-0 md:text-4xl lg:text-5xl"
      >
        Tentang Maktabah YARSI
      </h1>
      <p className="mx-auto mt-3 px-10 text-center text-sm text-dark-100 dark:text-light-400 md:text-justify md:indent-12 md:text-lg">
        Maktabah YARSI merupakan perpustakaan Islam digital berbahasa Indonesia
        pertama yang hadir dengan fitur pencarian topik permasalahan berdasarkan{' '}
        <span className="highlight">kata kunci</span> dari{' '}
        <span className="highlight">lintas referensi</span> yang terinspirasi
        dari <span className="highlight">Maktabah Syamilah</span>. Semua sumber
        buku dan dokumen yang ditampilkan sudah memiliki{' '}
        <span className="highlight">wakaf hak cipta</span> sehingga{' '}
        <span className="highlight">legal</span> untuk dimanfaatkan dan
        digunakan. Berikut referensi yang digunakan:
      </p>
      <ul className="mt-3 space-y-2 px-10 text-sm text-dark-100 marker:text-primary-light dark:text-light-400 dark:marker:text-primary-dark md:text-base">
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="https://shamela.ws/"
            target="_blank"
            rel="noreferrer"
          >
            Maktabah Syamilah
          </a>
          , sebagai inspirasi utama;
        </li>
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="https://www.rumahfiqih.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rumah Fiqih Indonesia
          </a>
          , sumber buku digital;
        </li>
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="https://mui.or.id/fatwa/"
            target="_blank"
            rel="noreferrer"
          >
            Fatwa MUI
          </a>
          , sumber dokumen Fatwa; dan
        </li>
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="https://buku-islam-api.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Buku literatur Keislaman API
          </a>
          , sumber repositori buku literatur Keislaman.
        </li>
      </ul>
      <p className="mx-auto mt-12 px-10 text-center text-sm text-dark-100 dark:text-light-400 md:text-justify md:indent-12 md:text-lg">
        Maktabah YARSI dikembangkan dan dipelihara oleh:
      </p>
      <ul className="mt-3 space-y-2 px-10 text-sm text-dark-100 marker:text-primary-light dark:text-light-400 dark:marker:text-primary-dark md:text-base">
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="mailto:herika.hayurani@yarsi.ac.id"
          >
            Herika Hayurani
          </a>
        </li>
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="mailto:aya.yahya@yarsi.ac.id"
          >
            Aya Yahya Maulana
          </a>
        </li>
        <li className="list-inside list-disc">
          <a
            className="underline decoration-primary-light underline-offset-2 hover:text-primary-light dark:decoration-primary-dark dark:hover:text-primary-dark"
            href="mailto:raihansuryanom@gmail.com"
          >
            Muhammad Raihan Suryanom
          </a>
        </li>
      </ul>
    </PageWrapper>
  );
}
