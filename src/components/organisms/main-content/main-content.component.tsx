'use client';

import { useSearchParams } from 'next/navigation';

const contents = `<h1>A. Penyucian Hati Dari Sifat Tercela</h1><strong>1. Bersihkan Hati</strong><q>Pertama, hendaknya membersihkan hati dari segala perbuatan curang, kotor, benci, dengki, akidah yang buruk dan perangai (budi pekerti) yang tidak baik; hal itu dilakukan untuk memperbaiki dalam menerima ilmu, menjaganya serta mengulas makna-maknanya secara detail dan hakikat-hakikatnya yang samar.</q><strong>2. Kedudukan Ilmu</strong><q>Karena sebagaimana yang disampaikan oleh sebagian ulama bahwa ilmu itu adalah shalat yang tersembunyi, ibadah hati dan kedekatan batin</q><strong>3. Syarat Menimba Ilmu</strong>`;

// export const getRegex = (caseSensitiveParams, exactMatchParams, query) => {
//   const flags = caseSensitiveParams === 'true' ? 'gum' : 'gium';
//   const pattern = exactMatchParams === 'true' ? `\\b${query}\\b` : query;
//   const regex = new RegExp(pattern, flags);

//   return regex;
// };

const MainContent = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('mark');

  const highlightedWords = (text: string) => {
    return contents
      .replace(new RegExp(text, 'gium'), (query) => `<mark>${query}</mark>`)
      .replace(/  +/g, ' ');
  };

  return (
    <article
      dangerouslySetInnerHTML={{ __html: highlightedWords(search as string) }}
    />
  );
};

export default MainContent;
