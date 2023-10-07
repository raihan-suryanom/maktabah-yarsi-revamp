import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const ahklakBooks = new URL('/categories/ahklak', request.url);

  return Response.redirect(ahklakBooks);
};

export const config = {
  matcher: '/categories',
};
