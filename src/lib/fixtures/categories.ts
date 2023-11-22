const dummyCategories = new Promise((resolve) =>
  resolve({
    statusCode: 200,
    status: 'success',
    data: [
      {
        _id: '654d0e04c098f76ab43e96ff',
        name: 'hadist',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fc964a31c349dac69c0ba',
        name: 'fiqih',
        total: 0,
        subcategories: [
          {
            total: 0,
            _id: '6550ce6c8f2e55cb1b97d098',
            name: 'fiqih test',
            category: '654fc964a31c349dac69c0ba',
          },
          {
            total: 0,
            _id: '6550d02b90dcb32166586b9c',
            name: 'fiqih test lagi',
            category: '654fc964a31c349dac69c0ba',
          },
        ],
      },
      {
        _id: '654fd17903ff17d9e2e0579c',
        name: 'Akhlak',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd28203ff17d9e2e057a5',
        name: 'Al Quran & Tafsir',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd33303ff17d9e2e057ab',
        name: 'Fatwa',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd56903ff17d9e2e057bf',
        name: 'Aqidah',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd66d03ff17d9e2e057c5',
        name: 'Kajian Tematik',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd71a03ff17d9e2e057cb',
        name: 'Sirah & Biografi',
        total: 0,
        subcategories: [],
      },
      {
        _id: '654fd7d503ff17d9e2e057cf',
        name: 'Ushul Fiqih',
        total: 0,
        subcategories: [],
      },
    ],
    message: 'Data has been successfully retrieved',
  })
);

export default dummyCategories;
