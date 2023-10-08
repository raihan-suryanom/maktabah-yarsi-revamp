import { Card, PageWrapper, Skeleton } from '~/components/atoms';
import { BreadcrumbSkeleton } from '~/components/molecules/breadcrumb';
import { MainContentSkeleton } from '~/components/organisms/main-content';

export default function Loading() {
  return (
    <PageWrapper className="flex">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3.5 overflow-y-scroll border-r border-black/10 pl-8 pr-5 pt-5 [&>div]:ml-auto">
        <h2 className="text-2xl font-bold">Daftar Isi</h2>
        <Skeleton className="mt-1" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-10/12" />
        <Skeleton />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-10/12" />
        <Skeleton className="w-10/12" />
        <Skeleton />
        <Skeleton />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-11/12" />
        <Skeleton />
        <Skeleton />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-11/12" />
        <Skeleton className="w-10/12" />
        <Skeleton />
      </aside>
      <div className="ml-auto flex w-9/12 flex-col gap-5 pl-5 pr-8 pt-5">
        <div className="flex justify-between">
          <BreadcrumbSkeleton />
          <Skeleton className="h-11 w-44 rounded-md py-2" />
        </div>
        <Card.Root className="flex w-full flex-col gap-3 bg-primary-light p-5 text-light-100">
          <Card.Header className="p-0">
            <Card.Title className="text-4xl">
              <Skeleton className="h-[34px] w-2/3" />
            </Card.Title>
          </Card.Header>
          <Card.Footer className="flex gap-7 p-0">
            <div className="flex items-center gap-1">
              <Skeleton className="w-5 rounded-full" />
              <Skeleton className="w-36" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="w-5 rounded-full" />
              <Skeleton className="w-6" />
              <span>halaman</span>
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="w-5 rounded-full" />
              <Skeleton className="w-20" />
            </div>
          </Card.Footer>
        </Card.Root>
        <MainContentSkeleton />
      </div>
    </PageWrapper>
  );
}
