import { PageWrapper, Skeleton } from '~/components/atoms';

export default function Loading() {
  return (
    <PageWrapper className="flex">
      <div className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div]:ml-auto">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <Skeleton className="mt-1" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-10/12" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5">
        <Skeleton className="w-72" />
        <h1 className="mt-1 text-center text-4xl font-bold">
          Daftar Buku Akhlak
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div]:rounded-[10px]">
          {Array(10).fill(null).map(_=> (
            <div className="flex flex-col">
            <Skeleton className="h-[284.39px]" />
            <div className="mt-1.5 flex-col items-start gap-0.5 p-0">
              <Skeleton className="my-1.5 h-4 w-10/12" />
              <div className="mb-1.5 flex items-center gap-1.5">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-8/12" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-5/12" />
              </div>
            </div>
          </div>
          ))}
        </section>
        <div className="flex items-center gap-1">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </PageWrapper>
  );
}
