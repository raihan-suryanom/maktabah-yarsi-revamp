'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => console.error({ error }), [error]);

  return (
    <div>
      <h2>Terjadi suatu kesalahan atau internet Anda sedang mati!</h2>
      <button onClick={reset}>Coba Lagi</button>
    </div>
  );
}
