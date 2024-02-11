'use client';

import Link from 'next/link';
import { FrownIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Button from '~/components/atoms/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="mx-auto my-auto flex w-full flex-col gap-y-4 py-20 text-center">
      <FrownIcon
        className="mx-auto font-bold text-red-600 dark:text-rose-500"
        size={100}
      />
      <main>
        <h2 className="text-lg">
          Maaf, sepertinya halaman yang anda ingin telusuri{' '}
          <span className="text-rose-600 dark:text-rose-500">
            belum tersedia
          </span>
          .
        </h2>
        <p>Mungkin ada kesalahan pada alamat URL.</p>
      </main>
      <Button
        onClick={router.back}
        variant="outline"
        className="mx-auto"
        size="medium"
      >
        Kembali ke halaman sebelumnya
      </Button>
      <small>atau</small>
      <Link
        href="/"
        className="decoration-primary-light underline-offset-2 hover:underline dark:decoration-primary-dark"
        replace
      >
        Kembali ke halaman utama
      </Link>
    </div>
  );
}
