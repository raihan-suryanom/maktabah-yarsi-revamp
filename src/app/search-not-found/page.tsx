import { SearchXIcon } from 'lucide-react';
import SearchButton from '~/components/molecules/search-button';

export default async function NotFound() {
  return (
    <div className="mx-auto my-auto flex w-full flex-col items-center gap-y-4 py-20 text-center">
      <SearchXIcon
        className="mx-auto font-bold text-red-600 dark:text-rose-500"
        size={100}
      />
      <main>
        <h2 className="text-lg">
          Maaf, sepertinya tidak ada hasil yang sangat cocok untuk penelusuran
          Anda.
        </h2>
        <p className="[&>span]:text-primary-light [&>span]:dark:text-primary-dark">
          Coba hilangkan centang pada pilihan <span>Kata Persis</span> dan{' '}
          <span>Sensitif Huruf Besar/Kecil</span>.
        </p>
      </main>
      <SearchButton
        className="rounded-md [&_span]:mr-5"
        size="medium"
        placeholder="Cari topik yang lain..."
      />
    </div>
  );
}
