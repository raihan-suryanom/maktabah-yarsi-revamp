import { NextResponse, type NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const ahklakBooks = new URL('/categories/ahklak', request.url);

  return NextResponse.redirect(ahklakBooks);
};

export const config = {
  matcher: '/categories',
};
