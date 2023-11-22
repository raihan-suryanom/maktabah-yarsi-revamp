const dummyDetailBook = new Promise((resolve) =>
  resolve({
    statusCode: 200,
    status: 'success',
    data: {
      page: 0,
      path: '/books/dummy-template/2',
      _id: '654d1451c098f76ab43e9705',
      title: 'hadist dua',
      description: 'buku ini berisikan tentang hadist al bukhari',
      contributor: 'MUI',
      creator: 'ridho',
      date_created: '2023-11-09T16:42:12.705Z',
      source: 'https://google.com',
      image_url:
        'https://toko-bukumuslim.com/288-4256-thickbox/buku-shahih-al-bukhari-lengkap-1-set-jilid-1-5.jpg',
      createdAt: '2023-11-09T16:42:12.705Z',
      total: 0,
      category: [],
      sub_category: [],
    },
    message: 'Data has been successfully retrieved',
  })
);

export default dummyDetailBook;
