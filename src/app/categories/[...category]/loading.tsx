import { Skeleton } from '~/components/atoms';
import { BreadcrumbSkeleton } from '~/components/molecules/breadcrumb';
import { PaginationSkeleton } from '~/components/molecules/pagination';
import { BookListSkeleton } from '~/components/organisms/book-list';
import { CategoryOutlineSkeleton } from '~/components/organisms/menu-outline';

export default function Loading() {
  return (
    <div className="mx-auto mt-[65px] w-full">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div[aria-label=skeleton]]:ml-auto">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <CategoryOutlineSkeleton />
      </aside>
      <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5">
        <BreadcrumbSkeleton />
        <h1 className="flex items-center justify-center gap-2.5 text-center text-4xl font-bold capitalize">
          Daftar Buku <Skeleton className="h-6 w-32" />
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div[aria-label=skeleton]]:rounded-[10px]">
          <BookListSkeleton />
        </section>
        <PaginationSkeleton />
      </div>
    </div>
  );
}
