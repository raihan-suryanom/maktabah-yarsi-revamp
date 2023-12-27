import type { BookProps } from '../utils/index.type';

const dummyDetailBook = new Promise<BookProps>((resolve) =>
  resolve({
    _id: '5NW2',
    category: '6573307da027a2e4a3a2828b',
    title: 'Adab Murid Terhadap Diri Sendiri',
    description:
      'Pertama, hendaknya membersihkan hati dari segala perbuatan curang, kotor, benci, dengki, akidah yang buruk dan perangai (budi pekerti) yang tidak baik; hal itu dilakukan untuk memperbaiki dalam menerima ilmu, menjaganya serta mengulas makna-maknanya secara detail dan hakikat-hakikatnya yang samar.',
    contributor: '-',
    creator: 'Syafri M. Noor, Lc',
    publisher: '-',
    resource_identifier: 'ISBN',
    rights: 'wakaf',
    source: 'https://www.rumahfiqih.com/pdf/z.php?id=305',
    subject: 'akhlak',
    date_created: 'Thu, 23 April 2020',
    firstPage: 5,
    lastPage: 9,
    path: '',
    image: '/public/images/default.png',
  })
);

export default dummyDetailBook;
