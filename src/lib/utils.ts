import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const wait = (milliSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSecond));

export const getRegex = (
  caseSensitiveParams: string,
  exactMatchParams: string,
  query: string
) => {
  const flags = caseSensitiveParams === 'true' ? 'gum' : 'gium';
  const pattern = exactMatchParams === 'true' ? `\\b${query}\\b` : query;
  const regex = new RegExp(pattern, flags);

  return regex;
};

export const Await = async <T>({
  promise,
  children,
  delay = 0,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
  delay?: number;
}) => {
  await wait(delay); // WARNING: DON'T USE THIS, ONLY FOR DEBUGGING PURPOSE!
  const data = await promise;

  return children(data);
};

const dummyCategories = [
  {
    category: 'ahklak',
    path: '/categories/ahklak',
    sub: [
      {
        category: 'akhlakul-karimah',
        path: '/categories/ahklak/ahklakul-karimah',
      },
      {
        category: 'tematik',
        path: '/categories/ahklak/tematik',
        sub: [
          {
            category: 'test-2',
            path: '/categories/ahklak/tematik/test-2',
          },
          {
            category: 'test-1',
            path: '/categories/ahklak/tematik/test-1',
            sub: [
              {
                category: 'ayolohh',
                path: '/categories/ahklak/tematik/test-1/ayolohh',
              },
            ],
          },
        ],
      },
      {
        category: 'akhlak-budaya',
        path: '/categories/ahklak/ahklak-budaya',
      },
    ],
  },
  {
    category: 'fiqih',
    path: '/categories/fiqih',
    sub: [
      {
        category: 'fiqih-ibadah',
        path: '/categories/fiqih/fiqih-ibadah',
      },
    ],
  },
  {
    category: 'al-quran',
    path: '/categories/al-quran',
  },
];

const dummyInvoices = [
  {
    no: 1,
    page: 9,
    relevantQuery: 'Hati Dari Sifat Tercela...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 12,
    page: 19,
    relevantQuery: 'hati, maka tidak dibenarkan menimbanya kecuali dala...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 13,
    page: 19,
    relevantQuery: 'hati (jantung).”...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 14,
    page: 29,
    relevantQuery: 'hatinya, menghiasi batinnya, mendekatkan diri kepad...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 151,
    page: 139,
    relevantQuery: 'sejatinya dia telah menukar sesuatu yang baik dengan ...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
];

export const getContents = () =>
  new Promise<string>((resolve) =>
    resolve(
      `<h2>A. Penyucian Hati Dari Sifat Tercela</h2><h3>1. Bersihkan Hati</h3><blockquote>Pertama, hendaknya membersihkan hati dari segala perbuatan curang, kotor, benci, dengki, akidah yang buruk dan perangai (budi pekerti) yang tidak baik; hal itu dilakukan untuk memperbaiki dalam menerima ilmu, menjaganya serta mengulas makna-maknanya secara detail dan hakikat-hakikatnya yang samar.</blockquote><h3>2. Kedudukan Ilmu</h3><q>Karena sebagaimana yang disampaikan oleh sebagian ulama bahwa ilmu itu adalah shalat yang tersembunyi, ibadah hati dan kedekatan batin</q><h3>3. Syarat Menimba Ilmu</h3><blockquote dir="ltr" lang="en" cite="Romeo and Juliet (II, ii, 1-2)">But, soft! What light through yonder window breaks? It is the east, and Juliet is the sun.</blockquote>`
    )
  );

export const getInvoices = async (): Promise<{
  invoices: {
    no: number;
    page: number;
    relevantQuery: string;
    title: string;
  }[];
}> => {
  await wait(3000);
  return new Promise((resolve) => resolve({ invoices: dummyInvoices }));
};

export const getCategories = (): Promise<{
  categories: ReadonlyArray<CategoryProps>;
}> => new Promise((resolve) => resolve({ categories: dummyCategories }));

export function getPaths(category: ReadonlyArray<string>) {
  return category.map((path) => ({ title: path, link: path }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getBooks(category: string): Promise<{
  books: {
    link: string;
    title: string;
    image: string;
    author: string;
    pages: number;
  }[];
}> {
  return new Promise((resolve) =>
    resolve({
      books: [
        {
          link: '/books/dummy-template/1?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 64,
        },
        {
          link: '/books/dummy-template/2?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 45,
        },
        {
          link: '/books/dummy-template/3?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 24,
        },
        {
          link: '/books/dummy-template/4?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 40,
        },
        {
          link: '/books/dummy-template/5?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/e/4/e4c35da4496e6f5c47374a40820754b8_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 81,
        },
        {
          link: '/books/dummy-template/6?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/f/1/f138d23cb50c92bff3b3b9200e09fa04_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 124,
        },
        {
          link: '/books/dummy-template/7?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/e/2/e2b55d5be2a1e2c3b13aa345e1578e0e_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 55,
        },
        {
          link: '/books/dummy-template/8?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/8/8/88f09492e9c5874f60e8351989978cf2_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 43,
        },
        {
          link: '/books/dummy-template/9?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/0/8/08c30ebb37c2f6b534c3880469503c0b_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 134,
        },
        {
          link: '/books/dummy-template/10?query=ti',
          title: 'Dalal al-Khairat',
          image:
            'https://edit.org/photos/editor/json/2021/10/01/e/1/e1b71f04c341c78008a82193726a289a_edit.org.jpg-376.jpg',
          author: 'Abdul Somad Al Bukhari',
          pages: 92,
        },
      ],
    })
  );
}
