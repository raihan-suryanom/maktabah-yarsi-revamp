'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Terjadi suatu kesalahan atau internet Anda sedang mati!</h2>
        <p>{error?.digest}</p>
        <button onClick={() => reset()}>Coba Lagi</button>
      </body>
    </html>
  );
}
