const contents = `<h2>A. Penyucian Hati Dari Sifat Tercela</h2><h3>1. Bersihkan Hati</h3><blockquote>Pertama, hendaknya membersihkan hati dari segala perbuatan curang, kotor, benci, dengki, akidah yang buruk dan perangai (budi pekerti) yang tidak baik; hal itu dilakukan untuk memperbaiki dalam menerima ilmu, menjaganya serta mengulas makna-maknanya secara detail dan hakikat-hakikatnya yang samar.</blockquote><h3>2. Kedudukan Ilmu</h3><q>Karena sebagaimana yang disampaikan oleh sebagian ulama bahwa ilmu itu adalah shalat yang tersembunyi, ibadah hati dan kedekatan batin</q><h3>3. Syarat Menimba Ilmu</h3><blockquote dir="ltr" lang="en" cite="Romeo and Juliet (II, ii, 1-2)">But, soft! What light through yonder window breaks? It is the east, and Juliet is the sun.</blockquote>`;

// export const getRegex = (caseSensitiveParams, exactMatchParams, query) => {
//   const flags = caseSensitiveParams === 'true' ? 'gum' : 'gium';
//   const pattern = exactMatchParams === 'true' ? `\\b${query}\\b` : query;
//   const regex = new RegExp(pattern, flags);

//   return regex;
// };

const MainContent = ({ query }: { query: string }) => {
  const highlightedWords = (text: string) => {
    return contents
      .replace(
        new RegExp(text, 'gium'),
        (highlight) => `<mark>${highlight}</mark>`
      )
      .replace(/  +/g, ' ');
  };

  return (
    <article
      className="prose min-h-screen max-w-none"
      dangerouslySetInnerHTML={{
        __html: query ? highlightedWords(query) : contents,
      }}
    />
  );
};

export default MainContent;
