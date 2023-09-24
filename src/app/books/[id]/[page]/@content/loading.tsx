import { Card, PageWrapper, Skeleton } from '~/components/atoms';

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
          <Skeleton className="w-72" />
          <Skeleton className="h-11 w-60 py-2" />
        </div>
        <Card.Root className="flex w-full flex-col gap-4 bg-primary-light p-5 text-light-100">
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
              <Skeleton className="w-32" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="w-5 rounded-full" />
              <Skeleton className="w-20" />
            </div>
          </Card.Footer>
        </Card.Root>
        <div className="flex flex-col gap-5">
          <Skeleton className="w-72" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
          </div>
          <Skeleton className="w-56" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
          </div>
          <Skeleton className="w-56" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
          </div>
          <Skeleton className="w-56" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
            <Skeleton className="h-3.5" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
