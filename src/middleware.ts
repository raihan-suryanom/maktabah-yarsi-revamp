import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const akhlakBooks = new URL('/categories/akhlak', request.url);

  return Response.redirect(akhlakBooks);
};

export const config = {
  matcher: '/categories',
};
