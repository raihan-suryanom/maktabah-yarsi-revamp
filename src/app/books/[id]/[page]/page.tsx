import { Card, Icon, PageWrapper } from '~/components/atoms';
import { Breadcrumb, SearchInput } from '~/components/molecules';
import { MainContent, TableOfContent } from '~/components/organisms';
import { categories } from '~/lib/utils';

export type DetailBookPageProps = {
  params: {
    id: string;
    page: string;
  };
  searchParams: {
    query: string;
  };
};

const DetailBookPage = (props: DetailBookPageProps) => {
  return (
    <PageWrapper className="flex">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5">
        <h2 className="text-2xl font-bold">Daftar Isi</h2>
        {categories.map((category) => (
          <TableOfContent
            variant="tableOfContent"
            iconName="chevron-right"
            key={category.category}
            isRootCategory
            {...category}
          />
        ))}
      </aside>
      <div className="ml-auto flex w-9/12 flex-col gap-5 pl-5 pr-8 pt-5">
        <div className="flex items-center justify-between">
          <Breadcrumb
            paths={[
              { title: 'Categories', link: '/categories' },
              { title: 'Adab Murid Terhadap Diri Sendiri' },
            ]}
          />
          <SearchInput
            className="bg-light-300 lg:w-60"
            placeholder="Cari topik ..."
            dimension="medium"
          />
        </div>
        <Card.Root className="w-full bg-primary-light p-5 text-light-100 flex flex-col gap-1.5">
          <Card.Header className="p-0">
            <Card.Title className="text-4xl">
              Adab Murid Terhadap Diri Sendiri
            </Card.Title>
          </Card.Header>
          <Card.Footer className="flex gap-7 p-0">
            <div className="flex items-center gap-1">
              <Icon size={20} name="pencil" />
              <small className="text-base">Abdul Somad Al Bukhari</small>
            </div>
            <div className="flex items-center gap-1">
              <Icon size={20} name="layers" />
              <small className="text-base">124 halaman</small>
            </div>
            <div className="flex items-center gap-1">
              <Icon size={20} name="calendar" />
              <small className="text-base">2020</small>
            </div>
          </Card.Footer>
        </Card.Root>
        <MainContent query={props?.searchParams?.query} />
      </div>
    </PageWrapper>
  );
};

export default DetailBookPage;
