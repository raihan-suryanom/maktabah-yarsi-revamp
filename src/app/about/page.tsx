import { Breadcrumb } from '~/components/molecules';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang - Maktaba YARSI',
  description:
    'Sebuah perpustakaan islam digital berbahasa Indonesia yang memungkinkan pengguna untuk mencari topik atau permasalah berdasarkan kata kunci seperti iman, sabar, shalat, dan riba.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 px-8 py-5">
      <Breadcrumb paths={[{ title: 'about' }]} />
      <article className="prose max-w-none dark:prose-invert prose-h1:text-center prose-a:underline prose-a:decoration-primary-light prose-a:underline-offset-2 prose-strong:text-primary-light dark:prose-a:decoration-primary-dark dark:prose-strong:text-primary-dark">
        <h1>Tentang Kami</h1>
        <section>
          <p>
            Maktabah YARSI merupakan perpustakaan Islam digital berbahasa
            Indonesia pertama yang hadir dengan fitur pencarian topik
            permasalahan berdasarkan <strong>kata kunci</strong> dari{' '}
            <strong>lintas referensi</strong> yang terinspirasi dari{' '}
            <strong>Maktabah Syamilah</strong>. Semua sumber buku dan dokumen
            yang yang ditampilkan sudah memiliki{' '}
            <strong>wakaf hak cipta</strong> sehingga sehingga sehingga{' '}
            <strong>legal</strong> untuk dimanfaatkan referensi yang digunakan:
          </p>
          <ul>
            <li>
              <a href="https://shamela.ws/" target="_blank" rel="noreferrer">
                Maktabah Syamilah
              </a>
              , sebagai inspirasi utama;
            </li>
            <li>
              <a
                href="https://www.rumahfiqih.com/"
                target="_blank"
                rel="noreferrer"
              >
                Rumah Fiqih Indonesia
              </a>
              , sumber buku digital;
            </li>
            <li>
              <a
                href="https://mui.or.id/fatwa/"
                target="_blank"
                rel="noreferrer"
              >
                Fatwa MUI
              </a>
              , sumber dokumen Fatwa; dan
            </li>
            <li>
              <a
                href="https://buku-islam-api.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Buku literatur Keislaman API
              </a>
              , sumber repositori buku literatur Keislaman.
            </li>
          </ul>
        </section>
        <section>
          <p>Maktabah YARSI dikembangkan dan dipelihara oleh:</p>
          <ul>
            <li>
              <a href="mailto:herika.hayurani@yarsi.ac.id">Herika Hayurani</a>
            </li>
            <li>
              <a href="mailto:aya.yahya@yarsi.ac.id">Aya Yahya Maulana</a>
            </li>
            <li>
              <a href="mailto:raihansuryanom@gmail.com">
                Muhammad Raihan Suryanom
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
