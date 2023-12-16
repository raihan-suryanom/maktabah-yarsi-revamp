const dummyCategories = new Promise((resolve) =>
  resolve({
    categories: [
      {
        _id: '6573307da027a2e4a3a2828b',
        parent: null,
        title: 'Akhlak',
      },
      {
        _id: '6573310e2431a417cc6aa35b',
        parent: null,
        title: 'Fiqih',
        children: [
          {
            _id: '657331362431a417cc6aa35f',
            parent: '6573310e2431a417cc6aa35b',
            title: 'Fiqih Ibadah',
          },
          {
            _id: '657331462431a417cc6aa362',
            parent: '6573310e2431a417cc6aa35b',
            title: 'Fiqih Jinayat',
          },
          {
            _id: '6573314e2431a417cc6aa365',
            parent: '6573310e2431a417cc6aa35b',
            title: 'Fiqih Muamalat',
          },
          {
            _id: '657331542431a417cc6aa368',
            parent: '6573310e2431a417cc6aa35b',
            title: 'Fiqih Wanita',
          },
        ],
      },
      {
        _id: '657331802431a417cc6aa36c',
        parent: null,
        title: 'Al Quran & Tafsir',
      },
      {
        _id: '6573318a2431a417cc6aa36f',
        parent: null,
        title: 'Aqidah',
      },
      {
        _id: '657331932431a417cc6aa372',
        parent: null,
        title: 'Fatwa',
      },
      {
        _id: '6573319a2431a417cc6aa375',
        parent: null,
        title: 'Hadits',
      },
      {
        _id: '657331a22431a417cc6aa378',
        parent: null,
        title: 'Kajian Tematik',
      },
      {
        _id: '657331af2431a417cc6aa37b',
        parent: null,
        title: 'Sirah & Biografi',
      },
      {
        _id: '657331bb2431a417cc6aa37e',
        parent: null,
        title: 'Ushul Fiqih',
      },
      {
        _id: '657b12be32147675a73e7319',
        title: 'Nah',
        parent: null,
      },
      {
        _id: '657b1317378eafbea4ee1641',
        title: 'Nah Loh',
        parent: null,
      },
      {
        _id: '657b1344378eafbea4ee164c',
        title: 'Asf',
        parent: null,
      },
      {
        _id: '657b135c378eafbea4ee1657',
        title: 'Asdf',
        parent: null,
      },
      {
        _id: '657b1371378eafbea4ee1662',
        title: 'Ha',
        parent: null,
      },
      {
        _id: '657b1386378eafbea4ee1673',
        title: 'Satu Lagi',
        parent: null,
      },
      {
        _id: '657b1393378eafbea4ee1680',
        title: 'Adsf',
        parent: null,
      },
    ],
  })
);

export default dummyCategories;
