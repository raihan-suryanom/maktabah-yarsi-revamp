import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const akhlakBibliographies = new URL(
    '/categories/6573307da027a2e4a3a2828b',
    request.url
  );

  return Response.redirect(akhlakBibliographies);
};

export const config = {
  matcher: '/categories',
};
