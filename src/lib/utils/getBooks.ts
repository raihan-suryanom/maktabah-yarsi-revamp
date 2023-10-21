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
